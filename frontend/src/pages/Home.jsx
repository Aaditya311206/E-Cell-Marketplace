import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VariableProximity from "../components/effects/VariableProximity";
import ListingCard from "../components/ListingCard";

export default function Home() {
  const heroRef = useRef(null);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <div ref={heroRef} className="flex flex-col items-center text-center max-w-4xl mx-auto relative p-8">
        <h2 className="text-4xl md:text-7xl mb-10 text-white cursor-default">
          <VariableProximity
            label="What are you hunting for today?"
            className="font-black tracking-tight"
            fromFontVariationSettings="'wght' 300, 'opsz' 10"
            toFontVariationSettings="'wght' 900, 'opsz' 144"
            containerRef={heroRef}
            radius={220}
            falloff="gaussian"
          />
        </h2>

        <div className="w-full relative group max-w-2xl">
          <div className="glass rounded-full p-2 flex items-center shadow-2xl border border-white/20">
            <span className="pl-5 text-xl">🔍</span>
            <input
              type="text"
              placeholder="Search for textbooks, iPads, dorm decor..."
              className="w-full bg-transparent border-none outline-none px-4 py-3 text-white placeholder-slate-400"
            />
            <button type="button" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition whitespace-nowrap">
              Find It
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="text-2xl font-extrabold text-white">Fresh on Campus</h3>
          <Link to="/marketplace" className="text-emerald-400 font-bold text-sm hover:underline">
            View all
          </Link>
        </div>

        {loading && <p className="text-slate-400 px-2">Loading...</p>}
        {error && <p className="text-red-400 px-2">{error}</p>}
        {!loading && !error && !listings.length && <p className="text-slate-400 px-2">No listings yet.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.slice(0, 8).map(listing => (
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
    </motion.div>
  );
}
