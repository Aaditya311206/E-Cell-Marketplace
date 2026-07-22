import { useState, useEffect } from "react";

import ListingCard from "../components/ListingCard";

export default function Marketplace() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load listings");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-slate-400 text-center py-16">Loading...</p>;
  if (error) return <p className="text-red-400 text-center py-16">{error}</p>;
  if (!listings.length) return <p className="text-slate-400 text-center py-16">No listings yet.</p>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-extrabold text-white">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            title={listing.title}
            price={listing.price}
            type={listing.type}
            seller={listing.seller}
            dept={listing.dept}
          />
        ))}
      </div>
    </div>
  );
}
