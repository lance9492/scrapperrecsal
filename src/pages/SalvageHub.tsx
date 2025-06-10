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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Equipment & Parts Shop</h1>
          <p className="text-gray-600 max-w-2xl">
            South Africa's premier marketplace for quality used vehicles, machinery, and parts. 
            All items verified by professional assessors.
          </p>
        </div>
        {user && (
          <button
            onClick={() => setShowCreateListing(true)}
            className="flex items-center gap-2 bg-[#FF3B81] text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition shadow-sm"
          >
            <Plus className="w-5 h-5" />
            Post Listing
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {/* Listings Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Latest Listings</h2>
        
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
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Tool className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No listings found</h3>
            <p className="text-gray-600 mb-6">Be the first to post a salvage listing!</p>
            {user && (
              <button
                onClick={() => setShowCreateListing(true)}
                className="bg-[#FF3B81] text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
              >
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

      {/* Trust Indicators */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-xl font-bold mb-8 text-center">Why Choose SalvageHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start">
            <Shield className="w-8 h-8 text-[#FF3B81] mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Verified Sellers</h3>
              <p className="text-gray-600">
                All sellers undergo strict verification. Business credentials and track record checked.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Star className="w-8 h-8 text-[#FF3B81] mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Professional assessment of all listed items. Detailed condition reports available.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="w-8 h-8 text-[#FF3B81] mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Secure Trading</h3>
              <p className="text-gray-600">
                Protected payments and verified transactions. Full buyer protection on all purchases.
              </p>
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