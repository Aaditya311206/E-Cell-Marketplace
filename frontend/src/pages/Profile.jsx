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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div>
      <h1>Profile</h1>

      <div>
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <p>{profile.dept}</p>
      </div>

      <h2>My Listings</h2>
      <div>
        {profile.listings?.length ? (
          profile.listings.map(listing => (
            <ListingCard
              key={listing.id}
              title={listing.title}
              price={listing.price}
              type={listing.type}
              seller={listing.seller}
              dept={listing.dept}
            />
          ))
        ) : (
          <p>No listings yet.</p>
        )}
      </div>
    </div>
  );
}