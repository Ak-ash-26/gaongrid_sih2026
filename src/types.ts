export interface CropListing {
  id: string;
  cropName: string;
  variety: string;
  quantity: number;
  unit: string;
  expectedPrice: number;
  location: string;
  district: string;
  state: string;
  qualityGrade: 'Grade A+' | 'Grade A' | 'Grade B' | 'Standard';
  harvestDate: string;
  farmerName: string;
  verified: boolean;
  offersCount: number;
  bestOffer: number;
  image: string;
}

export interface BuyerOffer {
  id: string;
  buyerName: string;
  company: string;
  offeredPrice: number;
  paymentTerms: string;
  rating: number;
  reviewsCount: number;
  pickupOffered: boolean;
  distanceKm: number;
  isBestOffer?: boolean;
}

export interface FertilizerItem {
  id: string;
  name: string;
  brand: string;
  category: 'Urea' | 'DAP' | 'NPK' | 'Potash' | 'Bio-Fertilizer' | 'Micronutrient';
  mrp: number;
  unsubsidizedCost?: number;
  discountedPrice: number;
  packSize: string;
  weightKg?: number;
  dealerName: string;
  dealerLocation: string;
  dealerPhone?: string;
  distanceKm: number;
  inStock: boolean;
  stockBags?: number;
  rating: number;
  subsidyBenefit?: string;
  deliveryAvailable?: boolean;
}

export interface ResidueListing {
  id: string;
  residueType: string;
  quantityTon: number;
  pricePerTon: number;
  location: string;
  farmerName: string;
  readyDate: string;
  potentialBuyers: string[];
  transportAvailable: boolean;
  co2SavedKg: number;
}

export interface FarmMachinery {
  id: string;
  name: string;
  category: 'Tractor' | 'Harvester' | 'Rotavator' | 'Seed Drill' | 'Thresher' | 'Cultivator';
  model: string;
  ratePerDay: number;
  ratePerHour?: number;
  ratePerAcre?: number;
  location: string;
  distanceKm: number;
  ownerName: string;
  ownerPhone?: string;
  isAvailable: boolean;
  rating: number;
  image: string;
}

export interface FarmLabourGroup {
  id: string;
  leaderName: string;
  teamSize: number;
  specialization: string;
  dailyWagePerPerson: number;
  location: string;
  distanceKm: number;
  experienceYears: number;
  isAvailable: boolean;
  rating: number;
}

export interface GovScheme {
  id: string;
  name: string;
  hindiName?: string;
  category: 'Income Support' | 'Insurance' | 'Mechanization' | 'Irrigation' | 'Soil & Inputs';
  ministry: string;
  benefits: string;
  eligibility: string[];
  requiredDocs: string[];
  applicationUrl: string;
  tag: string;
}
