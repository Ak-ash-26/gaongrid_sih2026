from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import CropListing, BuyerBid, Fertilizer, ResidueListing
from .forms import CropListingForm, ResidueListingForm

def home_view(request):
    crops = CropListing.objects.all().order_by('-created_at')[:6]
    fertilizers = Fertilizer.objects.all()[:6]
    return render(request, 'marketplace/home.html', {
        'crops': crops,
        'fertilizers': fertilizers,
    })


def sell_crops_view(request):
    if request.method == 'POST':
        form = CropListingForm(request.POST)
        if form.is_valid():
            crop = form.save()
            # Generate demo bids automatically for the farmer
            BuyerBid.objects.create(
                crop_listing=crop,
                buyer_name="Sanjay Agarwal",
                company_name="Kisan Flour Mills",
                offered_price_per_quintal=crop.expected_price_per_quintal + 50,
                distance_km=6.5,
                free_pickup=True,
                payment_terms="Instant UPI / NEFT on Pickup"
            )
            BuyerBid.objects.create(
                crop_listing=crop,
                buyer_name="Vikram Verma",
                company_name="Purvanchal Agro Traders",
                offered_price_per_quintal=crop.expected_price_per_quintal - 30,
                distance_km=12.0,
                free_pickup=False,
                payment_terms="Bank Transfer in 24 hrs"
            )
            messages.success(request, f"Your {crop.crop_name} listing has been created! Competing buyer bids received.")
            return redirect('crop_detail', pk=crop.pk)
    else:
        form = CropListingForm()

    all_listings = CropListing.objects.all().order_by('-created_at')
    return render(request, 'marketplace/sell_crops.html', {
        'form': form,
        'listings': all_listings,
    })


def crop_detail_view(request, pk):
    crop = get_object_or_404(CropListing, pk=pk)
    bids = crop.bids.all().order_by('-offered_price_per_quintal')
    return render(request, 'marketplace/crop_detail.html', {
        'crop': crop,
        'bids': bids,
    })


def accept_bid_view(request, bid_id):
    bid = get_object_or_404(BuyerBid, pk=bid_id)
    bid.is_accepted = True
    bid.save()
    bid.crop_listing.status = "Sold"
    bid.crop_listing.save()
    messages.success(request, f"Deal confirmed with {bid.company_name} at ₹{bid.offered_price_per_quintal}/Q!")
    return redirect('crop_detail', pk=bid.crop_listing.pk)


def fertilizers_view(request):
    category = request.GET.get('category', 'All')
    search = request.GET.get('search', '')

    fertilizers = Fertilizer.objects.all()

    if category != 'All' and category:
        fertilizers = fertilizers.filter(category=category)

    if search:
        fertilizers = fertilizers.filter(name__icontains=search) | fertilizers.filter(dealer_name__icontains=search)

    # Subsidy calculator logic
    calc_bags = int(request.GET.get('bags', 5))
    selected_fert_id = request.GET.get('fert_id')
    calc_fert = Fertilizer.objects.filter(id=selected_fert_id).first() if selected_fert_id else fertilizers.first()

    calc_total_subsidized = 0
    calc_total_savings = 0
    if calc_fert:
        calc_total_subsidized = calc_bags * calc_fert.subsidized_price
        calc_total_savings = calc_bags * calc_fert.subsidy_savings_per_bag()

    return render(request, 'marketplace/fertilizers.html', {
        'fertilizers': fertilizers,
        'selected_category': category,
        'search': search,
        'calc_bags': calc_bags,
        'calc_fert': calc_fert,
        'calc_total_subsidized': calc_total_subsidized,
        'calc_total_savings': calc_total_savings,
    })


def residue_view(request):
    if request.method == 'POST':
        form = ResidueListingForm(request.POST)
        if form.is_valid():
            residue = form.save()
            messages.success(request, f"Listed {residue.quantity_tons} tons of {residue.crop_type}. Bio-energy buyer notified!")
            return redirect('residue')
    else:
        form = ResidueListingForm()

    # Calculator
    tons_input = int(request.GET.get('tons', 10))
    rate_per_ton = 1800
    estimated_earnings = tons_input * rate_per_ton
    co2_saved = round(tons_input * 1.4, 1)

    listings = ResidueListing.objects.all().order_by('-created_at')

    return render(request, 'marketplace/crop_residue.html', {
        'form': form,
        'listings': listings,
        'tons_input': tons_input,
        'estimated_earnings': estimated_earnings,
        'co2_saved': co2_saved,
    })
