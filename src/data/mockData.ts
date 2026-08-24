import { CropListing, BuyerOffer, FertilizerItem, ResidueListing, FarmMachinery, FarmLabourGroup, GovScheme } from '../types';

export const SAMPLE_CROP_LISTINGS: CropListing[] = [
  {
    id: 'crop-1',
    cropName: 'Sharbati Wheat',
    variety: 'C-306 Premium',
    quantity: 50,
    unit: 'Quintal',
    expectedPrice: 2400,
    location: 'Deoria',
    district: 'Deoria',
    state: 'Uttar Pradesh',
    qualityGrade: 'Grade A+',
    harvestDate: 'April 2026',
    farmerName: 'Rajesh Kumar Yadav',
    verified: true,
    offersCount: 4,
    bestOffer: 2450,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'crop-2',
    cropName: 'Basmati Paddy (Pusa 1121)',
    variety: 'Pusa Basmati 1121',
    quantity: 80,
    unit: 'Quintal',
    expectedPrice: 3800,
    location: 'Karnal',
    district: 'Karnal',
    state: 'Haryana',
    qualityGrade: 'Grade A',
    harvestDate: 'Nov 2026',
    farmerName: 'Gurpreet Singh',
    verified: true,
    offersCount: 6,
    bestOffer: 3920,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'crop-3',
    cropName: 'Yellow Mustard (Sarson)',
    variety: 'Pusa Mustard 25',
    quantity: 35,
    unit: 'Quintal',
    expectedPrice: 5200,
    location: 'Bharatpur',
    district: 'Bharatpur',
    state: 'Rajasthan',
    qualityGrade: 'Grade A+',
    harvestDate: 'March 2026',
    farmerName: 'Rameshwar Meena',
    verified: true,
    offersCount: 3,
    bestOffer: 5350,
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'crop-4',
    cropName: 'Soybean (JS 335)',
    variety: 'JS 335 Seed Grade',
    quantity: 60,
    unit: 'Quintal',
    expectedPrice: 4400,
    location: 'Ujjain',
    district: 'Ujjain',
    state: 'Madhya Pradesh',
    qualityGrade: 'Grade A',
    harvestDate: 'Oct 2026',
    farmerName: 'Virendra Patidar',
    verified: true,
    offersCount: 5,
    bestOffer: 4480,
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80'
  }
];

export const DEMO_BUYER_OFFERS: BuyerOffer[] = [
  {
    id: 'buyer-b',
    buyerName: 'Vikram Sethi',
    company: 'Bharat Agri Processing & Flour Mills',
    offeredPrice: 2450,
    paymentTerms: 'Instant Digital Payment (Same Day)',
    rating: 4.9,
    reviewsCount: 142,
    pickupOffered: true,
    distanceKm: 18,
    isBestOffer: true
  },
  {
    id: 'buyer-c',
    buyerName: 'Manoj Agarwal',
    company: 'Kisan Agro Traders & Mandi Exporters',
    offeredPrice: 2400,
    paymentTerms: 'Bank Transfer within 24 Hours',
    rating: 4.7,
    reviewsCount: 88,
    pickupOffered: true,
    distanceKm: 24
  },
  {
    id: 'buyer-a',
    buyerName: 'Sunil Verma',
    company: 'Eastern Grain Logistics Ltd.',
    offeredPrice: 2350,
    paymentTerms: 'Payment within 48 Hours',
    rating: 4.5,
    reviewsCount: 63,
    pickupOffered: false,
    distanceKm: 42
  }
];

export const SAMPLE_FERTILIZERS: FertilizerItem[] = [
  {
    id: 'fert-1',
    name: 'IFFCO Nano Urea Liquid',
    brand: 'IFFCO',
    category: 'Bio-Fertilizer',
    mrp: 225,
    unsubsidizedCost: 350,
    discountedPrice: 220,
    packSize: '500 ml Bottle (Replaces 1 Bag Urea)',
    weightKg: 0.5,
    dealerName: 'Kisan Seva Kendra (IFFCO Auth)',
    dealerLocation: 'Civil Lines, Deoria',
    dealerPhone: '+91 98391 22345',
    distanceKm: 4.5,
    inStock: true,
    stockBags: 140,
    rating: 4.9,
    subsidyBenefit: 'Govt Promoted 80% Absorption Efficiency',
    deliveryAvailable: true
  },
  {
    id: 'fert-2',
    name: 'Neem Coated Urea (Prilled 46% N)',
    brand: 'NFL / KRIBHCO',
    category: 'Urea',
    mrp: 268,
    unsubsidizedCost: 2450,
    discountedPrice: 268,
    packSize: '45 kg Bag',
    weightKg: 45,
    dealerName: 'Jai Kisan Fertilizer Depot',
    dealerLocation: 'Salempur Road, Deoria',
    dealerPhone: '+91 94152 78901',
    distanceKm: 6.2,
    inStock: true,
    stockBags: 85,
    rating: 4.8,
    subsidyBenefit: 'Direct DBT Subsidy: ₹2,182 saved per bag',
    deliveryAvailable: true
  },
  {
    id: 'fert-3',
    name: 'Di-Ammonium Phosphate (DAP 18-46-0)',
    brand: 'IFFCO DAP',
    category: 'DAP',
    mrp: 1350,
    unsubsidizedCost: 4100,
    discountedPrice: 1350,
    packSize: '50 kg Bag',
    weightKg: 50,
    dealerName: 'Gramin Krishi Vikas Kendra',
    dealerLocation: 'Kasya Road, Deoria',
    dealerPhone: '+91 98890 33412',
    distanceKm: 8.0,
    inStock: true,
    stockBags: 60,
    rating: 4.7,
    subsidyBenefit: 'Direct DBT Subsidy: ₹2,750 saved per bag',
    deliveryAvailable: true
  },
  {
    id: 'fert-4',
    name: 'Di-Ammonium Phosphate (DAP 18-46-0)',
    brand: 'Coromandel Gromor DAP',
    category: 'DAP',
    mrp: 1350,
    unsubsidizedCost: 4100,
    discountedPrice: 1340,
    packSize: '50 kg Bag',
    weightKg: 50,
    dealerName: 'Shri Ram Agro Traders',
    dealerLocation: 'Bhatpar Gate, Deoria',
    dealerPhone: '+91 97920 11984',
    distanceKm: 12.0,
    inStock: true,
    stockBags: 45,
    rating: 4.8,
    subsidyBenefit: 'Direct DBT Subsidy: ₹2,760 saved per bag',
    deliveryAvailable: false
  },
  {
    id: 'fert-5',
    name: 'Muriate of Potash (MOP 60% K2O)',
    brand: 'IPL Potash',
    category: 'Potash',
    mrp: 1700,
    unsubsidizedCost: 2950,
    discountedPrice: 1650,
    packSize: '50 kg Bag',
    weightKg: 50,
    dealerName: 'Adarsh Agro Input Center',
    dealerLocation: 'Rudrapur Gate, Deoria',
    dealerPhone: '+91 94502 67123',
    distanceKm: 11.5,
    inStock: true,
    stockBags: 30,
    rating: 4.6,
    subsidyBenefit: 'Govt NBS Subsidy: ₹1,300 saved per bag',
    deliveryAvailable: true
  },
  {
    id: 'fert-6',
    name: 'Complex NPK (12-32-16)',
    brand: 'IFFCO Complex',
    category: 'NPK',
    mrp: 1470,
    unsubsidizedCost: 3200,
    discountedPrice: 1470,
    packSize: '50 kg Bag',
    weightKg: 50,
    dealerName: 'Kisan Seva Kendra (IFFCO Auth)',
    dealerLocation: 'Civil Lines, Deoria',
    dealerPhone: '+91 98391 22345',
    distanceKm: 4.5,
    inStock: true,
    stockBags: 90,
    rating: 4.9,
    subsidyBenefit: 'Balanced Nutrition Formula (N:P:K)',
    deliveryAvailable: true
  },
  {
    id: 'fert-7',
    name: 'Zinc Sulphate Heptahydrate (21% Zn)',
    brand: 'Kisan Zinc Super',
    category: 'Micronutrient',
    mrp: 680,
    unsubsidizedCost: 850,
    discountedPrice: 620,
    packSize: '10 kg Bag',
    weightKg: 10,
    dealerName: 'Purvanchal Beej & Khad Bhandar',
    dealerLocation: 'Station Road, Deoria',
    dealerPhone: '+91 99360 44556',
    distanceKm: 5.0,
    inStock: true,
    stockBags: 110,
    rating: 4.7,
    subsidyBenefit: 'Prevents Khaira disease in Paddy',
    deliveryAvailable: true
  }
];

export const SAMPLE_RESIDUE_LISTINGS: ResidueListing[] = [
  {
    id: 'res-1',
    residueType: 'Paddy Straw (Parali)',
    quantityTon: 8,
    pricePerTon: 1750,
    location: 'Gorakhpur, Uttar Pradesh',
    farmerName: 'Suraj Bhan Singh',
    readyDate: 'Immediate Pickup',
    potentialBuyers: ['Purvanchal Biomass Power Plant', 'GreenFuel Pellet Mills', 'EcoBoard Industrial Board'],
    transportAvailable: true,
    co2SavedKg: 11200
  },
  {
    id: 'res-2',
    residueType: 'Wheat Straw (Turi/Bhusa)',
    quantityTon: 12,
    pricePerTon: 2200,
    location: 'Ludhiana, Punjab',
    farmerName: 'Harpreet Dhillon',
    readyDate: 'Available in 3 Days',
    potentialBuyers: ['Punjab Bio-Coal Processing', 'Local Dairy Cooperatives'],
    transportAvailable: true,
    co2SavedKg: 16800
  },
  {
    id: 'res-3',
    residueType: 'Sugarcane Bagasse & Tops',
    quantityTon: 25,
    pricePerTon: 1450,
    location: 'Muzaffarnagar, UP',
    farmerName: 'Choudhary Satyaveer',
    readyDate: 'Immediate Pickup',
    potentialBuyers: ['Shree Cogen Power', 'Kisan Paper Products Ltd'],
    transportAvailable: true,
    co2SavedKg: 35000
  }
];

export const SAMPLE_MACHINERY: FarmMachinery[] = [
  {
    id: 'mach-1',
    name: 'Mahindra 575 DI (45 HP) with Rotavator',
    category: 'Tractor',
    model: '2023 Turbo Series',
    ratePerDay: 1600,
    ratePerHour: 350,
    ratePerAcre: 600,
    location: 'Bhatpar Rani',
    distanceKm: 5.2,
    ownerName: 'Ramakant Tiwari',
    isAvailable: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mach-2',
    name: 'Claas Crop Tiger Combine Harvester',
    category: 'Harvester',
    model: 'Tiger 30 Terra Trac',
    ratePerDay: 8500,
    ratePerHour: 1800,
    ratePerAcre: 1200,
    location: 'Barhaj',
    distanceKm: 8.4,
    ownerName: 'Balwant Singh Custom Hiring',
    isAvailable: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mach-3',
    name: 'Happy Seeder & Zero Till Seed Drill',
    category: 'Seed Drill',
    model: 'Punjab Agri Super Seeder',
    ratePerDay: 1400,
    ratePerHour: 300,
    ratePerAcre: 500,
    location: 'Rampur Karkhana',
    distanceKm: 6.8,
    ownerName: 'Vikas Patel Agro Tech',
    isAvailable: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80'
  }
];

export const SAMPLE_LABOUR_GROUPS: FarmLabourGroup[] = [
  {
    id: 'labour-1',
    leaderName: 'Dinesh Manjhi & Team',
    teamSize: 8,
    specialization: 'Crop Harvesting & Bundle Threshing',
    dailyWagePerPerson: 420,
    location: 'Rudrapur Village',
    distanceKm: 4.8,
    experienceYears: 11,
    isAvailable: true,
    rating: 4.9
  },
  {
    id: 'labour-2',
    leaderName: 'Shambhu Yadav Toli',
    teamSize: 12,
    specialization: 'Paddy Sowing, Transplanting & Weeding',
    dailyWagePerPerson: 400,
    location: 'Tarkulwa Block',
    distanceKm: 7.5,
    experienceYears: 8,
    isAvailable: true,
    rating: 4.7
  }
];

export const GOV_SCHEMES_DATA: GovScheme[] = [
  {
    id: 'scheme-1',
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    hindiName: 'प्रधानमंत्री किसान सम्मान निधि',
    category: 'Income Support',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    benefits: '₹6,000 per year direct income support in three 4-monthly installments of ₹2,000 into Aadhaar-linked bank accounts.',
    eligibility: [
      'Small and marginal landholder farmer families',
      'Valid Aadhaar card linked with bank account',
      'Name in state land revenue records (e-KYC verified)'
    ],
    requiredDocs: [
      'Aadhaar Card',
      'Land Ownership Record (Khatauni/Khasra)',
      'Bank Account Passbook / IFSC code',
      'Mobile number for OTP verification'
    ],
    applicationUrl: 'https://pmkisan.gov.in',
    tag: 'Financial Assistance'
  },
  {
    id: 'scheme-2',
    name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    hindiName: 'प्रधानमंत्री फसल बीमा योजना',
    category: 'Insurance',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    benefits: 'Comprehensive crop insurance against natural calamities, pests & diseases. Farmer premium: only 2% for Kharif, 1.5% for Rabi, 5% for commercial crops.',
    eligibility: [
      'All farmers growing notified crops in notified areas',
      'Both loanee and non-loanee farmers eligible',
      'Sharecroppers and tenant farmers with proof of cultivation'
    ],
    requiredDocs: [
      'Land Sowing Certificate (Sowing report/Patwari report)',
      'Land Record document (ROR / B-1 / Parcha)',
      'Aadhaar Card & Bank Account proof',
      'Crop loss intimation within 72 hours for claims'
    ],
    applicationUrl: 'https://pmfby.gov.in',
    tag: 'Crop Protection'
  },
  {
    id: 'scheme-3',
    name: 'SMAM (Sub-Mission on Agricultural Mechanization)',
    hindiName: 'कृषि यंत्रीकरण पर उप-मिशन',
    category: 'Mechanization',
    ministry: 'Department of Agriculture & Farmers Welfare',
    benefits: '40% to 50% subsidy on purchase of agricultural machinery (Tractors, Rotavators, Harvesters, Super Seeders) and Custom Hiring Centers (CHC).',
    eligibility: [
      'Individual farmers, Small & Marginal farmers (additional subsidy preference)',
      'Women farmers, SC/ST categories receive higher subsidy tier',
      'Registered Farmer Producer Organizations (FPOs) / Self Help Groups'
    ],
    requiredDocs: [
      'Aadhaar Card & Caste certificate (if applicable)',
      'Land revenue records with verified area',
      'Bank account details for DBT (Direct Benefit Transfer)',
      'Machinery quotation from empaneled dealer'
    ],
    applicationUrl: 'https://agrimachinery.nic.in',
    tag: 'Machinery Subsidy'
  },
  {
    id: 'scheme-4',
    name: 'PMKSY - Per Drop More Crop (Micro Irrigation)',
    hindiName: 'प्रधानमंत्री कृषि सिंचाई योजना',
    category: 'Irrigation',
    ministry: 'Ministry of Jal Shakti / Ministry of Agriculture',
    benefits: 'Up to 55% financial assistance for small/marginal farmers and 45% for other farmers to install drip and sprinkler micro-irrigation systems.',
    eligibility: [
      'Farmers possessing agricultural land with an assured water source',
      'Members of cooperative farming societies and water user associations',
      'Minimum landholding requirements as per state operational guidelines'
    ],
    requiredDocs: [
      'Proof of land ownership / 7-12 extract / Khasra',
      'Electricity connection / Tube well or water source certificate',
      'Aadhaar card & Bank passbook',
      'Soil & water testing report (if requested by district office)'
    ],
    applicationUrl: 'https://pmksy.gov.in',
    tag: 'Irrigation Subsidy'
  },
  {
    id: 'scheme-5',
    name: 'Soil Health Card Scheme',
    hindiName: 'मृदा स्वास्थ्य कार्ड योजना',
    category: 'Soil & Inputs',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    benefits: 'Free soil testing every 2 years across 12 chemical & physical parameters with precise dosage recommendations for fertilizers to reduce input costs by 20-30%.',
    eligibility: [
      'All farmers cultivating agricultural land in India',
      'Soil samples collected by local Krishi Vigyan Kendra (KVK) / Village Level Worker'
    ],
    requiredDocs: [
      'Farmer Name & Mobile Number',
      'Plot / Field Geo-location or Khasra Number'
    ],
    applicationUrl: 'https://soilhealth.dac.gov.in',
    tag: 'Free Soil Advisory'
  }
];
