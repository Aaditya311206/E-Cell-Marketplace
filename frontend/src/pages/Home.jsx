import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Campus Marketplace</h1>
      <p>Buy, sell, and rent items with students on your campus.</p>
      <Link to="/marketplace">Browse Marketplace</Link>
    </div>
  );
}