"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SendPage() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    await new Promise((res) => setTimeout(res, 1200));
    if (recipient && amount && !isNaN(Number(amount))) {
      setStatus("success");
    } else {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Header copié de la landing page */}
      <motion.header
        className="sticky top-0 z-50 shadow-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: '#3A86FF',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mr-3 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)' }}
                whileHover={{ scale: 1.12, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-white font-extrabold text-2xl tracking-widest drop-shadow-lg">W</span>
              </motion.div>
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#fff', textShadow: '0 2px 8px #3A86FF55' }}>Weda</span>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="/dashboard" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Tableau de bord</a>
              <a href="/send" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Envoyer</a>
              <a href="/savings" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Épargne</a>
              <Link href="/" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Accueil</Link>
              <button
                className="flex items-center gap-2 text-white px-7 py-3 rounded-xl font-semibold shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Send className="w-5 h-5 mr-1" />
                Rejoindre la liste
              </button>
            </nav>
          </div>
        </div>
      </motion.header>
      {/* Main content */}
      <main className="flex-1 max-w-md mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#111827]">Envoyer de l&apos;argent</h1>
        <form onSubmit={handleSend} className="bg-gray-50 rounded-2xl p-6 shadow-lg space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-800">Email ou téléphone du destinataire</label>
            <input
              type="text"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 placeholder-gray-400 bg-white"
              placeholder="ex: +22890123456 ou email@exemple.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-800">Montant à envoyer (XLM)</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 placeholder-gray-400 bg-white"
              placeholder="ex: 10"
              min="0.01"
              step="0.01"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
          {status === "success" && (
            <div className="text-emerald-700 font-semibold mt-2">Envoi réussi !</div>
          )}
          {status === "error" && (
            <div className="text-red-600 font-semibold mt-2">Erreur : veuillez vérifier les informations.</div>
          )}
        </form>
      </main>
      {/* Footer copié de la landing page */}
      <motion.footer
        className="py-16"
        style={{ backgroundColor: '#111827', color: 'white' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)' }}>
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">Weda</span>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2025 Weda. Tous droits réservés. Rendre l&apos;argent plus intelligent pour tous.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
} 