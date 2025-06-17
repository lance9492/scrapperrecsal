import React from 'react';
import { Shield, Users, Scale, Truck, Target, Globe, Leaf, Recycle, Package, Settings, Cog, Wrench, PenTool as Tool, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-8"> {/* Added pt-24 for navbar spacing */}
      {/* Pink & Black 2-tone background with watermarks */}
      <div className="relative overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-pink-600 opacity-90"></div>
        
        {/* Watermarks - Industrial & Recycling Theme */}
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
          
          {/* Industrial machinery watermarks */}
          <div className="absolute top-40 left-2/3 transform -rotate-25">
            <Settings className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-24 left-1/5 transform rotate-40">
            <Cog className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-1/5 right-2/3 transform -rotate-55">
            <Wrench className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-1/3 right-1/5 transform rotate-30">
            <Tool className="w-22 h-22 text-white" />
          </div>
          <div className="absolute top-3/4 left-8 transform -rotate-20">
            <Zap className="w-26 h-26 text-white" />
          </div>
          
          {/* Additional scattered elements for depth */}
          <div className="absolute top-12 left-2/3 transform -rotate-12">
            <Tool className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-16 left-20 transform rotate-70">
            <Cog className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-2/5 right-1/2 transform -rotate-45">
            <Wrench className="w-18 h-18 text-white" />
          </div>
          <div className="absolute bottom-1/3 right-1/5 transform rotate-30">
            <Settings className="w-22 h-22 text-white" />
          </div>
          <div className="absolute top-3/4 left-8 transform -rotate-20">
            <Zap className="w-26 h-26 text-white" />
          </div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mb-6 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500 border border-pink-400/30">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-white mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Founded in 2025, Scrapper has revolutionized South Africa's recycling industry by creating the country's first digital marketplace for recyclable materials. Our platform connects buyers and sellers, making recycling more accessible and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 -mt-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-[#FF3B81]" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To become Africa's leading digital platform for sustainable material trading, driving the circular economy and creating economic opportunities through innovative technology.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#FF3B81]" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To revolutionize the recycling industry by providing a secure, efficient platform that connects buyers and sellers, promotes sustainable practices, and creates value for all stakeholders.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p className="text-gray-600">Active Traders</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50,000+</h3>
            <p className="text-gray-600">Tons Recycled</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">9</h3>
            <p className="text-gray-600">Provinces Covered</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">75,000+</h3>
            <p className="text-gray-600">CO₂ Tons Saved</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to make recycling more efficient and accessible through technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to promoting sustainable practices and reducing environmental impact.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of transparency and ethical business practices.
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Our Technology</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Real-time Market Data</h3>
                  <p className="text-gray-600">Live pricing updates and market trends</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Smart Matching</h3>
                  <p className="text-gray-600">AI-powered buyer-seller matching system</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Mobile Integration</h3>
                  <p className="text-gray-600">Trade on-the-go with our mobile platform</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Security & Compliance</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Verified Users</h3>
                  <p className="text-gray-600">Strict verification process for all traders</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Secure Transactions</h3>
                  <p className="text-gray-600">Bank-grade security for all payments</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                  <p className="text-gray-600">Full compliance with SA recycling regulations</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;