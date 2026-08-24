# GaonGrid (Pure Django & Python Edition)

A 100% Python & Django implementation of **GaonGrid** — built specifically for beginners with **zero complex JavaScript**.

---

## 🛠️ Features
- **Pure Server-Side HTML Rendering**: Uses standard Django template tags (`{% for %}`, `{% if %}`, `{% csrf_token %}`) and native HTML `<form>` methods (`POST` and `GET`).
- **Direct Crop Sale**: Farmers post wheat/paddy lots, and buyers submit competing bids. Farmers accept deals directly.
- **Fertilizer Subsidy Calculator**: Automatically calculates government DBT subsidies (e.g. Urea at ₹266.50 vs ₹2,100 unsubsidized cost).
- **Crop Residue Monetization**: Farmers enter stubble weight in tons to book industrial bio-pellet pickups.
- **Django Admin Panel**: Complete management of crops, bids, fertilizer stocks, and farmers at `/admin/`.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
cd django_project
pip install -r requirements.txt
```

### 2. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 3. Create an Admin User (Optional)
```bash
python manage.py createsuperuser
```

### 4. Start the Django Server
```bash
python manage.py runserver
```

Open your browser at `http://127.0.0.1:8000/` to access the portal!

---

## 📁 Directory Structure
```
django_project/
├── manage.py
├── requirements.txt
├── gaongrid/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── marketplace/
│   ├── models.py       (CropListing, BuyerBid, Fertilizer, ResidueListing)
│   ├── views.py        (Standard Python view functions)
│   ├── forms.py        (Django ModelForms)
│   ├── admin.py        (Admin registration)
│   └── urls.py         (URL routing)
└── templates/
    ├── base.html       (Clean base layout with CDN styling)
    └── marketplace/
        ├── home.html
        ├── sell_crops.html
        ├── crop_detail.html
        ├── fertilizers.html
        └── crop_residue.html
```
