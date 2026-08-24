import React, { useState } from 'react';
import { 
  FlaskConical, 
  Search, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Scale, 
  ShieldCheck, 
  ShoppingCart, 
  ArrowRight, 
  X, 
  Check, 
  Info,
  Sparkles,
  Truck
} from 'lucide-react';
import { SAMPLE_FERTILIZERS } from '../data/mockData';
import { FertilizerItem } from '../types';

interface FertilizerMarketplaceProps {
  onOpenJoinModal: (role?: string) => void;
}

export const FertilizerMarketplace: React.FC<FertilizerMarketplaceProps> = ({ onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [comparedItems, setComparedItems] = useState<string[]>(['fert-2', 'fert-3']);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  
  // Reservation Modal state
  const [reservingItem, setReservingItem] = useState<FertilizerItem | null>(null);
  const [orderQuantity, setOrderQuantity] = useState<number>(3);
  const [farmerName, setFarmerName] = useState<string>('Rajesh Kumar');
  const [farmerPhone, setFarmerPhone] = useState<string>('9876543210');
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Calculator State
  const [calcBags, setCalcBags] = useState<number>(5);
  const [calcFertId, setCalcFertId] = useState<string>('fert-2');

  const categories = ['All', 'Urea', 'DAP', 'NPK', 'Potash', 'Bio-Fertilizer', 'Micronutrient'];

  // Filter items
  const filteredFertilizers = SAMPLE_FERTILIZERS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dealerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dealerLocation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleCompare = (id: string) => {
    if (comparedItems.includes(id)) {
      setComparedItems(comparedItems.filter((item) => item !== id));
    } else {
      if (comparedItems.length >= 3) {
        alert('You can compare up to 3 fertilizers at once.');
        return;
      }
      setComparedItems([...comparedItems, id]);
    }
  };

  const handleOpenReserve = (item: FertilizerItem) => {
    setReservingItem(item);
    setOrderQuantity(2);
    setBookingSuccess(false);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const selectedForCompare = SAMPLE_FERTILIZERS.filter((f) => comparedItems.includes(f.id));
  const calcItem = SAMPLE_FERTILIZERS.find((f) => f.id === calcFertId) || SAMPLE_FERTILIZERS[0];
  const calcTotalSubsidized = calcBags * calcItem.discountedPrice;
  const calcTotalUnsubsidized = calcBags * (calcItem.unsubsidizedCost || (calcItem.discountedPrice * 3));
  const calcTotalSaved = calcTotalUnsubsidized - calcTotalSubsidized;

  return (
    <div id="fertilizer-section" className="space-y-8">
      
      {/* Top Banner Notice */}
      <div className="bg-emerald-950/80 border border-emerald-700/60 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-800 text-emerald-300 flex items-center justify-center shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white font-display">
                Government Subsidized Fertilizer Marketplace
              </h3>
              <span className="px-2 py-0.5 bg-emerald-800 text-emerald-200 text-[10px] font-bold rounded-md uppercase">
                DBT Verified MRP
              </span>
            </div>
            <p className="text-xs text-stone-300 mt-0.5">
              Check real stock in your block, compare dealer distances, and reserve at fixed official rates without black-market extra charges.
            </p>
          </div>
        </div>

        {comparedItems.length > 0 && (
          <button
            type="button"
            onClick={() => setIsCompareOpen(true)}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-extrabold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-md"
          >
            <Scale className="w-4 h-4" />
            <span>Compare Selected ({comparedItems.length})</span>
          </button>
        )}
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Urea, DAP, Brand, Dealer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-stone-800/90 border border-stone-700 text-white placeholder-stone-400 rounded-xl focus:outline-hidden focus:border-emerald-500 font-medium"
          />
        </div>

      </div>

      {/* Fertilizer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredFertilizers.map((fert) => {
          const isCompared = comparedItems.includes(fert.id);
          const savingsPerBag = (fert.unsubsidizedCost || 0) - fert.discountedPrice;

          return (
            <div
              key={fert.id}
              id={`fert-card-${fert.id}`}
              className={`bg-stone-800/90 rounded-2xl border p-5 flex flex-col justify-between transition-all hover:border-emerald-500 shadow-md ${
                isCompared ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-stone-700'
              }`}
            >
              <div>
                {/* Header: Category & Stock */}
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-stone-700/80 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                    {fert.category} • {fert.brand}
                  </span>
                  
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{fert.stockBags || 50} in stock</span>
                  </span>
                </div>

                {/* Product Name & Bag Size */}
                <h4 className="text-base font-bold text-white font-display mt-2.5">
                  {fert.name}
                </h4>
                <p className="text-xs text-stone-400 mt-0.5 font-medium">
                  Pack: <strong className="text-stone-300">{fert.packSize}</strong>
                </p>

                {/* Price Display */}
                <div className="mt-3.5 p-3 rounded-xl bg-stone-900/80 border border-stone-700/70 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase font-medium">Official Subsidized Rate</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-white font-display">
                        ₹{fert.discountedPrice}
                      </span>
                      {fert.mrp > fert.discountedPrice && (
                        <span className="text-xs text-stone-400 line-through">₹{fert.mrp}</span>
                      )}
                    </div>
                  </div>

                  {savingsPerBag > 0 && (
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 block">Govt Subsidy Benefit</span>
                      <span className="text-xs font-bold text-emerald-400">
                        ₹{savingsPerBag} saved/bag
                      </span>
                    </div>
                  )}
                </div>

                {/* Dealer Info */}
                <div className="mt-3 space-y-1.5 text-xs text-stone-300">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Authorized Dealer:</span>
                    <strong className="text-stone-200">{fert.dealerName}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Location:</span>
                    <span className="text-stone-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {fert.dealerLocation} ({fert.distanceKm} km)
                    </span>
                  </div>
                  {fert.subsidyBenefit && (
                    <div className="text-[11px] text-amber-300/90 pt-1">
                      ℹ️ {fert.subsidyBenefit}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3.5 border-t border-stone-700 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => toggleCompare(fert.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 ${
                    isCompared
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                      : 'bg-stone-700/60 hover:bg-stone-700 text-stone-300'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenReserve(fert)}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Buy / Reserve</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Side-by-Side Comparison Modal / Box */}
      {isCompareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-stone-900 border border-stone-700 rounded-3xl shadow-2xl max-w-4xl w-full p-6 text-white relative animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-700">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold font-display">
                  Fertilizer Price & Dealer Comparison
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCompareOpen(false)}
                className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-700 text-stone-400">
                    <th className="py-3 px-4 font-semibold">Comparison Attribute</th>
                    {selectedForCompare.map((item) => (
                      <th key={item.id} className="py-3 px-4 font-bold text-white text-sm">
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800">
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Brand & Formulation</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-stone-200 font-semibold">
                        {item.brand} ({item.category})
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Pack Weight / Size</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-stone-200">
                        {item.packSize}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-emerald-950/40">
                    <td className="py-3 px-4 text-emerald-300 font-bold">Subsidized Price (MRP)</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-emerald-400 font-black text-sm font-display">
                        ₹{item.discountedPrice}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Without Subsidy Market Cost</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-stone-400 line-through">
                        ₹{item.unsubsidizedCost || 2500}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Dealer Name</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-stone-200 font-medium">
                        {item.dealerName}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Distance from Village</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-stone-200">
                        {item.distanceKm} km away
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Stock Availability</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4 text-emerald-400 font-bold">
                        ✓ {item.stockBags || 40} Bags Ready
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-stone-400 font-medium">Action</td>
                    {selectedForCompare.map((item) => (
                      <td key={item.id} className="py-3 px-4">
                        <button
                          type="button"
                          onClick={() => {
                            setIsCompareOpen(false);
                            handleOpenReserve(item);
                          }}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs cursor-pointer"
                        >
                          Book at ₹{item.discountedPrice}
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 text-right">
              <button
                type="button"
                onClick={() => setIsCompareOpen(false)}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Reservation / Buy Modal */}
      {reservingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-200 text-stone-900">
            
            <button
              type="button"
              onClick={() => setReservingItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900 font-display">
                  Fertilizer Reserved!
                </h3>
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-left space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Item:</span>
                    <strong className="text-stone-800">{reservingItem.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Quantity:</span>
                    <strong className="text-stone-800">{orderQuantity} Bags</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Total Payable:</span>
                    <strong className="text-emerald-800 text-sm font-bold">
                      ₹{(orderQuantity * reservingItem.discountedPrice).toLocaleString('en-IN')}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Dealer Center:</span>
                    <span className="text-stone-700 font-medium">{reservingItem.dealerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Pickup Token OTP:</span>
                    <strong className="text-emerald-800 font-mono tracking-widest">GG-9482</strong>
                  </div>
                </div>

                <p className="text-xs text-stone-500">
                  SMS sent to +91 {farmerPhone}. Show this token at the dealer counter for guaranteed subsidized price.
                </p>

                <button
                  type="button"
                  onClick={() => setReservingItem(null)}
                  className="w-full py-3 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                    Official Fertilizer Booking
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900 font-display mt-1">
                    {reservingItem.name}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Dealer: {reservingItem.dealerName} ({reservingItem.dealerLocation})
                  </p>
                </div>

                <form onSubmit={handleConfirmReservation} className="space-y-3.5">
                  {/* Quantity Selector */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Number of Bags / Bottles:
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={1}
                        max={reservingItem.stockBags || 20}
                        value={orderQuantity}
                        onChange={(e) => setOrderQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-24 px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-xl font-bold text-center focus:outline-hidden focus:border-emerald-700"
                      />
                      <span className="text-xs text-stone-500">
                        @ ₹{reservingItem.discountedPrice} / unit
                      </span>
                    </div>
                  </div>

                  {/* Delivery Option */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Fulfillment Method:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDeliveryType('pickup')}
                        className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                          deliveryType === 'pickup'
                            ? 'bg-emerald-900 text-white border-emerald-900'
                            : 'bg-stone-50 text-stone-700 border-stone-200'
                        }`}
                      >
                        🏪 Store Self-Pickup
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryType('delivery')}
                        className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                          deliveryType === 'delivery'
                            ? 'bg-emerald-900 text-white border-emerald-900'
                            : 'bg-stone-50 text-stone-700 border-stone-200'
                        }`}
                      >
                        🚚 Tractor Delivery
                      </button>
                    </div>
                  </div>

                  {/* Farmer Details */}
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Farmer Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={farmerName}
                      onChange={(e) => setFarmerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Mobile Number:
                    </label>
                    <input
                      type="tel"
                      required
                      value={farmerPhone}
                      onChange={(e) => setFarmerPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700"
                    />
                  </div>

                  {/* Price Breakdown */}
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
                    <div className="flex justify-between font-semibold text-emerald-950">
                      <span>Total Amount:</span>
                      <span className="text-base font-extrabold text-emerald-900 font-display">
                        ₹{(orderQuantity * reservingItem.discountedPrice).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] text-emerald-800">
                      <span>Govt Subsidy Savings:</span>
                      <span>
                        ₹{(orderQuantity * ((reservingItem.unsubsidizedCost || 2400) - reservingItem.discountedPrice)).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    Confirm Subsidized Reservation
                  </button>

                  <p className="text-[10px] text-stone-400 text-center">
                    Pay at dealer on pickup. Zero advance charges.
                  </p>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Simple Subsidy Cost Calculator */}
      <div className="bg-stone-900 rounded-2xl border border-stone-700 p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h4 className="text-base font-bold font-display">
            Fertilizer Subsidy & Budget Calculator
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="text-xs text-stone-400 block mb-1">Select Fertilizer:</label>
            <select
              value={calcFertId}
              onChange={(e) => setCalcFertId(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-stone-800 border border-stone-700 rounded-xl text-white focus:outline-hidden focus:border-emerald-500"
            >
              {SAMPLE_FERTILIZERS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} (₹{f.discountedPrice}/bag)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-stone-400 block mb-1">Quantity (Bags):</label>
            <input
              type="number"
              min={1}
              max={100}
              value={calcBags}
              onChange={(e) => setCalcBags(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-2 text-xs bg-stone-800 border border-stone-700 rounded-xl text-white font-bold focus:outline-hidden focus:border-emerald-500"
            />
          </div>

          <div className="bg-stone-800 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase">Farmer Payout</span>
              <span className="text-base font-extrabold text-white font-display">
                ₹{calcTotalSubsidized.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-stone-400 block uppercase">You Save</span>
              <span className="text-xs font-bold text-emerald-400">
                +₹{calcTotalSaved.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
