import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart3, Zap, ShieldCheck, Truck, Settings, Cog, Wrench, PenTool as Tool } from 'lucide-react';
import { MarketInsights } from '../components/MarketInsights';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Industrial Watermarks */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-[#1A1A1A] to-[#FF3B81]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>
        
        {/* Industrial watermarks background */}
        <div className="absolute inset-0 opacity-5">
          {/* Vehicle watermarks */}
          <div className="absolute top-8 left-12 transform rotate-15">
            <Truck className="w-20 h-20 text-white" />
          </div>
          <div className="absolute top-24 right-16 transform -rotate-20">
            <Truck className="w-28 h-28 text-white" />
          </div>
          <div className="absolute bottom-16 left-1/4 transform rotate-35">
            <Truck className="w-18 h-18 text-white" />
          </div>
          <div className="absolute top-1/3 right-1/4 transform -rotate-25">
            <Truck className="w-24 h-24 text-white" />
          </div>
          
          {/* Engine/machinery watermarks */}
          <div className="absolute top-16 left-1/3 transform -rotate-40">
            <Settings className="w-26 h-26 text-white" />
          </div>
          <div className="absolute bottom-28 right-1/3 transform rotate-15">
            <Settings className="w-32 h-32 text-white" />
          </div>
          <div className="absolute top-1/2 left-20 transform -rotate-10">
            <Cog className="w-22 h-22 text-white" />
          </div>
          <div className="absolute bottom-12 right-12 transform rotate-50">
            <Cog className="w-20 h-20 text-white" />
          </div>
          <div className="absolute top-2/3 left-1/2 transform rotate-25">
            <Settings className="w-24 h-24 text-white" />
          </div>
          
          {/* Mining/industrial equipment watermarks */}
          <div className="absolute top-32 right-1/5 transform rotate-45">
            <Zap className="w-22 h-22 text-white" />
          </div>
          <div className="absolute bottom-32 left-1/2 transform -rotate-35">
            <Wrench className="w-28 h-28 text-white" />
          </div>
          <div className="absolute top-1/4 right-8 transform rotate-65">
            <Tool className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-1/3 left-16 transform -rotate-20">
            <Wrench className="w-18 h-18 text-white" />
          </div>
          <div className="absolute top-3/4 right-1/3 transform rotate-30">
            <Zap className="w-16 h-16 text-white" />
          </div>
          
          {/* Additional scattered elements for depth */}
          <div className="absolute top-12 left-2/3 transform -rotate-12">
            <Tool className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/5 transform rotate-70">
            <Cog className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-1/5 right-2/3 transform -rotate-55">
            <Wrench className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/5 transform rotate-40">
            <Settings className="w-18 h-18 text-white" />
          </div>
          <div className="absolute top-2/5 left-8 transform -rotate-30">
            <Zap className="w-24 h-24 text-white" />
          </div>
        </div>
        
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Welcome to Scrapper
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              Your One-Stop Platform for Recycling and Salvage
            </p>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Featuring RecycleMart for all your recycling needs and SalvageHub for quality used parts and materials.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/marketplace"
                className="bg-[#FF3B81] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition shadow-lg"
              >
                Visit RecycleMart
              </Link>
              <Link
                to="/salvage"
                className="bg-[#1A1A1A] text-white px-6 py-3 rounded-lg border border-gray-700 hover:bg-opacity-90 transition shadow-lg"
              >
                Explore SalvageHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <MarketInsights />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Scrapper?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Join South Africa's most comprehensive platform for recycling and salvage materials.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Secure Trading</h3>
              <p className="text-gray-600">
                All traders are verified and transactions are protected through our secure platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Large Network</h3>
              <p className="text-gray-600">
                Connect with thousands of verified buyers and sellers across South Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Best Prices</h3>
              <p className="text-gray-600">
                Get competitive prices through our real-time market data and bidding system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Fast Transactions</h3>
              <p className="text-gray-600">
                Quick and efficient trading process with our streamlined platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">RecycleMart</h3>
              <p className="text-gray-600 mb-6">
                Your premier marketplace for trading recyclable materials. Connect with verified buyers and sellers of metals, plastics, paper, and more. Get real-time pricing and secure transactions.
              </p>
              <Link
                to="/marketplace"
                className="inline-block bg-[#FF3B81] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Start Trading →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4">SalvageHub</h3>
              <p className="text-gray-600 mb-6">
                Specialized platform for industrial equipment and vehicle salvage. Find quality used parts, machinery, and professional stripping services from verified providers.
              </p>
              <Link
                to="/salvage"
                className="inline-block bg-[#FF3B81] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Explore Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Benefits for Sellers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-[#FF3B81]" />
                  <div>
                    <h4 className="font-semibold mb-2">Access to Verified Buyers</h4>
                    <p className="text-gray-600">
                      Connect with a network of pre-verified buyers, ensuring secure and reliable transactions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BarChart3 className="w-6 h-6 text-[#FF3B81]" />
                  <div>
                    <h4 className="font-semibold mb-2">Real-time Market Prices</h4>
                    <p className="text-gray-600">
                      Stay informed with up-to-date market prices to maximize your profits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">Benefits for Buyers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#FF3B81]" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">
                      All listings are verified to ensure quality and accuracy of materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-[#FF3B81]" />
                  <div>
                    <h4 className="font-semibold mb-2">Efficient Logistics</h4>
                    <p className="text-gray-600">
                      Coordinate pickup and delivery through our network of trusted transporters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join South Africa's fastest-growing platform for recycling and salvage materials.
          </p>
          <Link
            to="/register"
            className="inline-block bg-[#FF3B81] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition shadow-lg"
          >
            Create Free Account →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;