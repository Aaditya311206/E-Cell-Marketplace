import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then(res => {
        if (!res.ok) throw new Error("Could not create account");
        return res.json();
      })
      .then(() => {
        setLoading(false);
        navigate("/login");
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex justify-center items-center min-h-[60vh]"
    >
      <div className="glass-card w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Join the Network</h1>
          <p className="text-slate-400 font-medium">Create your campus marketplace account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-slate-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-slate-300 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white outline-none focus:border-emerald-500 transition"
            />
          </div>

          {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition mt-4 text-lg"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-400 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
