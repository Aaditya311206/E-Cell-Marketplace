import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Marketplace</h2>

      <Link to="/">Home</Link>
      <Link to="/marketplace">Marketplace</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}