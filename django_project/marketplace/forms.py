from django import forms
from .models import CropListing, ResidueListing

class CropListingForm(forms.ModelForm):
    class Meta:
        model = CropListing
        fields = ['farmer_name', 'phone', 'location', 'crop_name', 'variety', 'quantity_quintal', 'expected_price_per_quintal']
        widgets = {
            'farmer_name': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. Ramesh Singh'}),
            'phone': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. 9876543210'}),
            'location': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. Deoria, UP'}),
            'crop_name': forms.Select(attrs={'class': 'form-select'}),
            'variety': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. Sharbati / Basmati'}),
            'quantity_quintal': forms.NumberInput(attrs={'class': 'form-input', 'placeholder': 'e.g. 50'}),
            'expected_price_per_quintal': forms.NumberInput(attrs={'class': 'form-input', 'placeholder': 'e.g. 2400'}),
        }


class ResidueListingForm(forms.ModelForm):
    class Meta:
        model = ResidueListing
        fields = ['farmer_name', 'phone', 'location', 'crop_type', 'quantity_tons']
        widgets = {
            'farmer_name': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Farmer Name'}),
            'phone': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Phone Number'}),
            'location': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Village / Block'}),
            'crop_type': forms.Select(attrs={'class': 'form-select'}),
            'quantity_tons': forms.NumberInput(attrs={'class': 'form-input', 'placeholder': 'Tons (e.g. 15)'}),
        }
