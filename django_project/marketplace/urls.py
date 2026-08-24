from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('sell-crops/', views.sell_crops_view, name='sell_crops'),
    path('crop/<int:pk>/', views.crop_detail_view, name='crop_detail'),
    path('bid/<int:bid_id>/accept/', views.accept_bid_view, name='accept_bid'),
    path('fertilizers/', views.fertilizers_view, name='fertilizers'),
    path('crop-residue/', views.residue_view, name='residue'),
]
