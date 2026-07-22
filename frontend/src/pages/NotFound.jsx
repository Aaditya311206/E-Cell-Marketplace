import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="glass-card max-w-md mx-auto text-center p-10 rounded-[2rem] mt-16">
      <h1 className="text-3xl font-extrabold text-white mb-2">404</h1>
      <p className="text-slate-400 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-emerald-400 font-bold hover:underline">
        Go back home
      </Link>
    </div>
  );
}
