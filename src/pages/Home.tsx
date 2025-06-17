import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BarChart3, Zap, ShieldCheck, Truck, Settings, Cog, Wrench, PenTool as Tool, Target, Globe, Leaf, Scale, Star, CheckCircle, Recycle, Package } from 'lucide-react';
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

      {/* WHY CHOOSE SCRAPPER - PINK & BLACK 2-TONE WITH INDUSTRIAL WATERMARKS! */}
      <section className="relative py-20 overflow-hidden">
        {/* EPIC Pink & Black Gradient Background with Fade Effects */}
        <div className="absolute inset-0">
          {/* Main gradient background */}
          <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-pink-600"></div>
          
          {/* Fade overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-pink-600/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
          
          {/* Border fade effects */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent"></div>
        </div>

        {/* INDUSTRIAL WATERMARKS - Recycling & Manufacturing Theme */}
        <div className="absolute inset-0 opacity-5">
          {/* Recycling symbol watermarks */}
          <div className="absolute top-8 left-12 transform rotate-15">
            <Recycle className="w-24 h-24 text-white" />
          </div>
          <div className="absolute top-32 right-20 transform -rotate-20">
            <Recycle className="w-32 h-32 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 transform rotate-45">
            <Recycle className="w-20 h-20 text-white" />
          </div>
          <div className="absolute top-1/2 right-1/3 transform -rotate-30">
            <Recycle className="w-28 h-28 text-white" />
          </div>
          
          {/* Container/packaging watermarks */}
          <div className="absolute top-16 left-1/3 transform -rotate-40">
            <Package className="w-26 h-26 text-white" />
          </div>
          <div className="absolute bottom-32 right-1/4 transform rotate-15">
            <Package className="w-36 h-36 text-white" />
          </div>
          <div className="absolute top-2/3 left-16 transform -rotate-10">
            <Package className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-12 right-12 transform rotate-50">
            <Package className="w-20 h-20 text-white" />
          </div>
          
          {/* Truck/logistics watermarks */}
          <div className="absolute top-24 right-1/5 transform rotate-25">
            <Truck className="w-22 h-22 text-white" />
          </div>
          <div className="absolute bottom-40 left-1/2 transform -rotate-35">
            <Truck className="w-30 h-30 text-white" />
          </div>
          <div className="absolute top-1/3 right-8 transform rotate-65">
            <Truck className="w-18 h-18 text-white" />
          </div>
          
          {/* Scale/weighing watermarks */}
          <div className="absolute top-40 left-2/3 transform -rotate-25">
            <Scale className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-24 left-1/5 transform rotate-40">
            <Scale className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-1/5 right-2/3 transform -rotate-55">
            <Scale className="w-24 h-24 text-white" />
          </div>
          
          {/* Industrial machinery watermarks */}
          <div className="absolute top-12 left-2/3 transform -rotate-12">
            <Settings className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-16 left-20 transform rotate-70">
            <Cog className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-2/5 right-1/2 transform -rotate-45">
            <Wrench className="w-18 h-18 text-white" />
          </div>
          <div className="absolute bottom-1/3 right-1/5 transform rotate-30">
            <Tool className="w-22 h-22 text-white" />
          </div>
          <div className="absolute top-3/4 left-8 transform -rotate-20">
            <Zap className="w-26 h-26 text-white" />
          </div>
          
          {/* Additional scattered elements for depth */}
          <div className="absolute top-1/6 left-1/5 transform rotate-80">
            <Recycle className="w-18 h-18 text-white" />
          </div>
          <div className="absolute bottom-1/6 right-1/6 transform -rotate-25">
            <Package className="w-22 h-22 text-white" />
          </div>
          <div className="absolute top-5/6 right-2/5 transform rotate-35">
            <Scale className="w-20 h-20 text-white" />
          </div>
          <div className="absolute top-1/4 left-1/6 transform -rotate-60">
            <Truck className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-2/5 left-3/4 transform rotate-15">
            <Settings className="w-24 h-24 text-white" />
          </div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section header with explosive styling */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 border border-pink-400/30">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Why Choose 
              <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-white bg-clip-text text-transparent"> Scrapper</span>?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-white mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Join South Africa's most comprehensive platform for recycling and salvage materials.
            </p>
          </div>

          {/* Colorful feature cards with pink accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Pink Accent */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300 border-2 border-pink-200">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Trading</h3>
                <p className="text-gray-600 leading-relaxed">
                  All traders are verified and transactions are protected through our secure platform.
                </p>
              </div>
            </div>

            {/* Card 2 - Black Accent */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300 border-2 border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Large Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with thousands of verified buyers and sellers across South Africa.
                </p>
              </div>
            </div>

            {/* Card 3 - Pink Accent */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300 border-2 border-pink-200">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Best Prices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get competitive prices through our real-time market data and bidding system.
                </p>
              </div>
            </div>

            {/* Card 4 - Black Accent */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300 border-2 border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Transactions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quick and efficient trading process with our streamlined platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - COLORFUL SPLIT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card - Teal Gradient */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10 border-2 border-teal-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become Africa's leading digital platform for sustainable material trading, driving the circular economy and creating economic opportunities through innovative technology.
                </p>
              </div>
            </div>

            {/* Mission Card - Orange Gradient */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 border-2 border-orange-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To revolutionize the recycling industry by providing a secure, efficient platform that connects buyers and sellers, promotes sustainable practices, and creates value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Description - VIBRANT CARDS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* RecycleMart Card - Green Theme */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border-2 border-green-100 transform group-hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">RecycleMart</h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                  Your premier marketplace for trading recyclable materials. Connect with verified buyers and sellers of metals, plastics, paper, and more. Get real-time pricing and secure transactions.
                </p>
                <div className="text-center">
                  <Link
                    to="/marketplace"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Start Trading →
                  </Link>
                </div>
              </div>
            </div>

            {/* SalvageHub Card - Pink Theme */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border-2 border-pink-100 transform group-hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Tool className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">SalvageHub</h3>
                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                  Specialized platform for industrial equipment and vehicle salvage. Find quality used parts, machinery, and professional stripping services from verified providers.
                </p>
                <div className="text-center">
                  <Link
                    to="/salvage"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Explore Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - COLORFUL SPLIT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Sellers Benefits - Blue Theme */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur opacity-10"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border-2 border-blue-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Benefits for Sellers</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Access to Verified Buyers</h4>
                      <p className="text-gray-600">
                        Connect with a network of pre-verified buyers, ensuring secure and reliable transactions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Real-time Market Prices</h4>
                      <p className="text-gray-600">
                        Stay informed with up-to-date market prices to maximize your profits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buyers Benefits - Purple Theme */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl blur opacity-10"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border-2 border-purple-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Benefits for Buyers</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Quality Assurance</h4>
                      <p className="text-gray-600">
                        All listings are verified to ensure quality and accuracy of materials.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Efficient Logistics</h4>
                      <p className="text-gray-600">
                        Coordinate pickup and delivery through our network of trusted transporters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - EXPLOSIVE FINALE */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-8 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Get 
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"> Started</span>?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join South Africa's fastest-growing platform for recycling and salvage materials.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-xl shadow-xl"
          >
            <Star className="w-6 h-6" />
            Create Free Account →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;