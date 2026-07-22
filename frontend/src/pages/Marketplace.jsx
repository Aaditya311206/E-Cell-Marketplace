import { useState, useEffect } from "react"

import ListingCard from "../components/ListingCard"

export default function Marketplace() {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
	fetch("http://localhost:5000/api/listings")
	  .then(res => res.json())
	  .then(data => {
		setListings(data)
		setLoading(false)
	  })
	  .catch(err => {
		setError("something wong")
		setLoading(false)
	  })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!listings.length) return <p>No listings yet.</p>

  return (
	<div>
	  <h1>Marketplace</h1>
	  <div>
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
  )
}