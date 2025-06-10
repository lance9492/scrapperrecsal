import React from 'react';
import { ShoppingBag, Store, Zap, Shield, TrendingUp, Package } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're buying or selling, our pricing structure is designed to be fair and straightforward.
        </p>
      </div>

      {/* Seller Pricing */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Store className="w-6 h-6 text-[#FF3B81]" />
          <h2 className="text-2xl font-bold">For Sellers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Single Listing */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Single Listing</h3>
              <p className="text-3xl font-bold text-[#FF3B81] mb-2">R10.00</p>
              <p className="text-gray-600">Per item listing</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Basic visibility
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                30-day listing duration
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Standard search placement
              </li>
            </ul>
          </div>

          {/* Catalogue Package */}
          <div className="bg-white rounded-lg p-6 border-2 border-[#FF3B81] relative">
            <div className="absolute -top-3 right-4 bg-[#FF3B81] text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Catalogue Package</h3>
              <p className="text-3xl font-bold text-[#FF3B81] mb-2">R50.00</p>
              <p className="text-gray-600">For 10 item listings</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Save 50% on listings
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                45-day listing duration
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Enhanced search visibility
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Bulk upload tools
              </li>
            </ul>
          </div>

          {/* Boost Package */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Boost Package</h3>
              <p className="text-3xl font-bold text-[#FF3B81] mb-2">R20.00</p>
              <p className="text-gray-600">Per item boost</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Featured listing placement
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                7 days of premium visibility
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Priority search ranking
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buyer Pricing */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <ShoppingBag className="w-6 h-6 text-[#FF3B81]" />
          <h2 className="text-2xl font-bold">For Buyers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Purchase */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Standard Purchase</h3>
              <p className="text-3xl font-bold text-[#FF3B81] mb-2">R100.00</p>
              <p className="text-gray-600">For items under R3,000</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Secure payment processing
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Basic buyer protection
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Standard support
              </li>
            </ul>
          </div>

          {/* Premium Purchase */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Premium Purchase</h3>
              <p className="text-3xl font-bold text-[#FF3B81] mb-2">R200.00</p>
              <p className="text-gray-600">For items over R3,000</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Enhanced buyer protection
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Priority support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Quality verification service
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-[#FF3B81] rounded-full mr-2"></span>
                Escrow payment protection
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <Shield className="w-8 h-8 text-[#FF3B81] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Secure Trading</h3>
          <p className="text-gray-600">Protected payments and verified users</p>
        </div>
        <div className="text-center">
          <Zap className="w-8 h-8 text-[#FF3B81] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Quick Process</h3>
          <p className="text-gray-600">List and trade items efficiently</p>
        </div>
        <div className="text-center">
          <TrendingUp className="w-8 h-8 text-[#FF3B81] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Market Insights</h3>
          <p className="text-gray-600">Access to real-time market data</p>
        </div>
        <div className="text-center">
          <Package className="w-8 h-8 text-[#FF3B81] mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Quality Control</h3>
          <p className="text-gray-600">Verified materials and sellers</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;