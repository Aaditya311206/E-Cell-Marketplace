import { useState, useEffect } from "react";

import ListingCard from "../components/ListingCard";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load profile");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-slate-400 text-center py-16">Loading...</p>;
  if (error) return <p className="text-red-400 text-center py-16">{error}</p>;
  if (!profile) return <p className="text-slate-400 text-center py-16">No profile found.</p>;

  return (
    <div className="space-y-10">
      <div className="glass-card rounded-[2rem] p-8 flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-2xl font-bold shrink-0">
          {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-white">{profile.name}</h1>
          <p className="text-slate-400">{profile.email}</p>
          <p className="text-emerald-400 text-sm font-bold">{profile.dept}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-extrabold text-white mb-6">My Listings</h2>
        {profile.listings?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.listings.map(listing => (
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
        ) : (
          <p className="text-slate-400">No listings yet.</p>
        )}
      </div>
    </div>
  );
}
