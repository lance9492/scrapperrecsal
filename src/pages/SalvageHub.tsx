import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Wrench, Cog, PenTool as Tool, Star, MapPin, Shield, Clock, Plus } from 'lucide-react';
import { CreateListing } from '../components/CreateListing';
import { ListingCard } from '../components/ListingCard';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  created_at: string;
  user_id: string;
  profiles?: {
    first_name: string;
    last_name: string;
    company_name: string;
  };
}

const SalvageHub = () => {
  const { user } = useAuth();
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('listings')
        .select(`
          id,
          title,
          description,
          price,
          location,
          images,
          created_at,
          user_id,
          profiles!listings_user_id_profiles_fkey (
            first_name,
            last_name,
            company_name
          )
        `)
        .eq('type', 'salvage')
        .eq('status', 'active')
        .gt('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Fetch error:', fetchError);
        throw fetchError;
      }

      setListings(data || []);
    } catch (err: any) {
      console.error('Error fetching listings:', err);
      setError('Failed to load listings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleCreateListingSuccess = () => {
    fetchListings(); // Refresh listings after creating a new one
  };

  const formatSellerName = (listing: Listing) => {
    if (listing.profiles?.company_name) {
      return listing.profiles.company_name;
    }
    if (listing.profiles?.first_name || listing.profiles?.last_name) {
      return `${listing.profiles.first_name || ''} ${listing.profiles.last_name || ''}`.trim();
    }
    return 'Anonymous Seller';
  };

  return (
    <div className="pt-32 pb-8">
      {/* Vibrant Hero Section with Dynamic Background */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B81]/20 via-purple-600/20 to-blue-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="mb-8">
              {/* Glowing Title */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                  SalvageHub
                </span>
              </h1>
              
              {/* Dynamic Gradient Line */}
              <div className="relative mx-auto mb-8">
                <div className="w-40 h-1.5 bg-gradient-to-r from-[#FF3B81] via-purple-500 to-blue-500 mx-auto rounded-full"></div>
                <div className="absolute inset-0 w-40 h-1.5 bg-gradient-to-r from-[#FF3B81] via-purple-500 to-blue-500 mx-auto rounded-full blur-sm opacity-75"></div>
              </div>
              
              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                South Africa's <span className="text-white font-semibold">premier marketplace</span> for quality used vehicles, machinery, and parts.
                <br />
                <span className="text-purple-200">All items verified by professional assessors.</span>
              </p>
            </div>
            
            {/* Enhanced CTA Button */}
            {user && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowCreateListing(true)}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FF3B81] via-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 font-semibold text-lg overflow-hidden"
                >
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B81] via-purple-600 to-blue-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center gap-3">
                    <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    Post New Listing
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {/* Centered Listings Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Latest Listings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF3B81] to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              {listings.length} {listings.length === 1 ? 'listing' : 'listings'} available
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                  <div className="w-full h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : listings.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <Tool className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No listings found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Be the first to post a salvage listing and connect with buyers across South Africa.
              </p>
              {user && (
                <button
                  onClick={() => setShowCreateListing(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF3B81] to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                  Create First Listing
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map(listing => (
                <ListingCard
                  key={listing.id}
                  id={listing.id}
                  title={listing.title}
                  description={listing.description || ''}
                  image={listing.images?.[0] || 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'}
                  price={listing.price}
                  location={listing.location}
                  seller={{
                    name: formatSellerName(listing),
                    rating: 4.5, // This should come from a ratings system
                    verified: true // This should be based on verification status
                  }}
                  type="salvage"
                  onBidPlaced={fetchListings}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f3f4f6" fill-opacity="0.4"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent mb-4">
                Why Choose SalvageHub?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FF3B81] to-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We ensure quality, security, and reliability in every transaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF3B81] to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#FF3B81] to-purple-600 rounded-2xl mx-auto blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Verified Sellers</h3>
                <p className="text-gray-600">
                  All sellers undergo strict verification. Business credentials and track record checked.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Professional assessment of all listed items. Detailed condition reports available.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Secure Trading</h3>
                <p className="text-gray-600">
                  Protected payments and verified transactions. Full buyer protection on all purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Listing Modal */}
      {showCreateListing && (
        <CreateListing
          type="salvage"
          onClose={() => setShowCreateListing(false)}
          onSuccess={handleCreateListingSuccess}
        />
      )}
    </div>
  );
};

export default SalvageHub;