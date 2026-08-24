from django.db import models

class Farmer(models.Model):
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=15)
    village = models.CharField(max_length=100)
    district = models.CharField(max_length=100, default="Deoria")
    state = models.CharField(max_length=100, default="Uttar Pradesh")
    land_acres = models.DecimalField(max_digits=5, decimal_places=2, default=2.5)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.village}, {self.district})"


class CropListing(models.Model):
    CROP_CHOICES = [
        ('Wheat', 'Wheat (Gehun)'),
        ('Paddy', 'Paddy (Dhan / Rice)'),
        ('Mustard', 'Mustard (Sarson)'),
        ('Maize', 'Maize (Makka)'),
        ('Sugarcane', 'Sugarcane (Ganna)'),
        ('Potato', 'Potato (Aloo)'),
    ]
    
    farmer_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=150, default="Deoria, UP")
    crop_name = models.CharField(max_length=50, choices=CROP_CHOICES, default='Wheat')
    variety = models.CharField(max_length=100, default="Sharbati Grade A")
    quantity_quintal = models.PositiveIntegerField(help_text="Quantity in Quintals (1 Quintal = 100 kg)")
    expected_price_per_quintal = models.PositiveIntegerField(help_text="Expected price in ₹ per Quintal")
    status = models.CharField(max_length=30, default="Active", choices=[('Active', 'Active'), ('Sold', 'Sold')])
    created_at = models.DateTimeField(auto_now_add=True)

    def total_expected_amount(self):
        return self.quantity_quintal * self.expected_price_per_quintal

    def __str__(self):
        return f"{self.crop_name} - {self.quantity_quintal}Q by {self.farmer_name}"


class BuyerBid(models.Model):
    crop_listing = models.ForeignKey(CropListing, on_delete=models.CASCADE, related_name='bids')
    buyer_name = models.CharField(max_length=150)
    company_name = models.CharField(max_length=150)
    offered_price_per_quintal = models.PositiveIntegerField()
    distance_km = models.DecimalField(max_digits=4, decimal_places=1, default=10.0)
    free_pickup = models.BooleanField(default=True)
    payment_terms = models.CharField(max_length=100, default="Instant Bank Transfer on Weighing")
    is_accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def total_payout(self):
        return self.offered_price_per_quintal * self.crop_listing.quantity_quintal

    def __str__(self):
        return f"₹{self.offered_price_per_quintal}/Q by {self.company_name}"


class Fertilizer(models.Model):
    CATEGORY_CHOICES = [
        ('Urea', 'Urea'),
        ('DAP', 'DAP'),
        ('NPK', 'NPK Complex'),
        ('Potash', 'Potash (MOP)'),
        ('Bio-Fertilizer', 'Bio-Fertilizer (Nano Urea)'),
        ('Micronutrient', 'Zinc / Micronutrient'),
    ]

    name = models.CharField(max_length=150)
    brand = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    subsidized_price = models.PositiveIntegerField(help_text="Govt fixed MRP in ₹")
    unsubsidized_market_cost = models.PositiveIntegerField(help_text="True cost without subsidy")
    pack_size = models.CharField(max_length=100, default="50 kg Bag")
    dealer_name = models.CharField(max_length=150)
    dealer_location = models.CharField(max_length=150)
    dealer_phone = models.CharField(max_length=15)
    distance_km = models.DecimalField(max_digits=4, decimal_places=1, default=5.0)
    stock_available = models.PositiveIntegerField(default=100)

    def subsidy_savings_per_bag(self):
        return self.unsubsidized_market_cost - self.subsidized_price

    def __str__(self):
        return f"{self.name} (₹{self.subsidized_price}) - {self.dealer_name}"


class ResidueListing(models.Model):
    CROP_TYPE_CHOICES = [
        ('Paddy Straw', 'Paddy Straw (Parali)'),
        ('Wheat Straw', 'Wheat Straw (Bhusa)'),
        ('Sugarcane Trash', 'Sugarcane Trash (Patti)'),
        ('Mustard Stalks', 'Mustard Stalks'),
    ]

    farmer_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=150)
    crop_type = models.CharField(max_length=50, choices=CROP_TYPE_CHOICES)
    quantity_tons = models.PositiveIntegerField(help_text="Quantity in Metric Tons")
    rate_per_ton = models.PositiveIntegerField(default=1800)
    created_at = models.DateTimeField(auto_now_add=True)

    def estimated_income(self):
        return self.quantity_tons * self.rate_per_ton

    def __str__(self):
        return f"{self.crop_type} - {self.quantity_tons} Tons by {self.farmer_name}"
