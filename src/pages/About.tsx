import React from 'react';
import { Shield, Users, Scale, Truck, Target, Globe, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-8"> {/* Added pt-24 for navbar spacing */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2025, Scrapper has revolutionized South Africa's recycling industry by creating the country's first digital marketplace for recyclable materials. Our platform connects buyers and sellers, making recycling more accessible and efficient.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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