"use client";

import { useState } from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Message is being sent...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Message sent successfully!");
        setForm({ name: "", phone: "", description: "" });
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      setMessage("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[600px] w-full flex items-center justify-center bg-black overflow-hidden py-20 font-syne">
      {/* Background Component from stars-background.tsx */}
      <StarsBackground 
        className="z-0 opacity-60" 
        starDensity={0.0002} 
        allStarsTwinkle={true} 
      />

      <div className="relative z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-white/60 text-lg">
            Ready to start your next cosmic project?
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-white/70 ml-1">Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full p-4 bg-transparent border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-white/70 ml-1">Phone</label>
            <input
              type="text"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full p-4 bg-transparent border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-white/70 ml-1">Work Description</label>
            <textarea
              placeholder="Tell us about your vision..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
              rows={4}
              className="w-full p-4 bg-transparent border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Transmitting..." : "Send Message"}
          </motion.button>

          {message && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center text-sm mt-4 font-medium ${
                message.includes("successfully") ? "text-green-400" : "text-white/70"
              }`}
            >
              {message}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}