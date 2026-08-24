from django.contrib import admin
from .models import Farmer, CropListing, BuyerBid, Fertilizer, ResidueListing

@admin.register(Farmer)
class FarmerAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'village', 'district', 'land_acres')
    search_fields = ('name', 'phone', 'village')

@admin.register(CropListing)
class CropListingAdmin(admin.ModelAdmin):
    list_display = ('crop_name', 'farmer_name', 'quantity_quintal', 'expected_price_per_quintal', 'status', 'created_at')
    list_filter = ('crop_name', 'status')

@admin.register(BuyerBid)
class BuyerBidAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'crop_listing', 'offered_price_per_quintal', 'distance_km', 'is_accepted')
    list_filter = ('is_accepted',)

@admin.register(Fertilizer)
class FertilizerAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'category', 'subsidized_price', 'dealer_name', 'stock_available')
    list_filter = ('category', 'brand')

@admin.register(ResidueListing)
class ResidueListingAdmin(admin.ModelAdmin):
    list_display = ('crop_type', 'farmer_name', 'quantity_tons', 'rate_per_ton', 'created_at')
