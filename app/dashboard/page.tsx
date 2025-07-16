"use client";
import React, { useState } from "react";
import { Send, PiggyBank } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fakeTransactions = [
  { id: 1, type: "Envoi", amount: -15, to: "+228 90 12 34 56", date: "2024-06-01" },
  { id: 2, type: "Épargne", amount: 0.3, to: "Portefeuille d'épargne", date: "2024-06-01" },
  { id: 3, type: "Réception", amount: 20, from: "Marie L.", date: "2024-05-30" },
];

export default function DashboardPage() {
  const [balance] = useState(120.5); // XLM
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
              <span className="relative flex items-center">
                <span style={{ background: '#fff', borderRadius: '16px', padding: 6, display: 'inline-flex', boxShadow: '0 2px 8px #0001' }}>
                  <Image src="/weda-logo.png" alt="Weda Logo" width={64} height={64} />
                </span>
              </span>
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
      <main className="flex-1 max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#111827]">Tableau de bord</h1>
        <div className="bg-blue-100 rounded-2xl p-6 mb-8 shadow-lg flex flex-col items-center">
          <span className="text-gray-700 font-semibold">Solde disponible</span>
          <span className="text-4xl font-bold text-blue-700 mb-2">{balance.toFixed(2)} XLM</span>
        </div>
        <div className="flex gap-4 mb-8 justify-center">
          <Link href="/send">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition">
              <Send className="w-5 h-5" /> Envoyer de l&apos;argent
            </button>
          </Link>
          <Link href="/savings">
            <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:bg-emerald-600 transition">
              <PiggyBank className="w-5 h-5" /> Épargne automatique
            </button>
          </Link>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-[#111827]">Historique des transactions</h2>
        <ul className="space-y-3">
          {fakeTransactions.map((tx) => (
            <li key={tx.id} className="bg-gray-50 rounded-lg p-4 shadow flex justify-between items-center">
              <div>
                <span className="font-semibold text-[#111827]">{tx.type}</span>
                <span className="block text-gray-600 text-sm">
                  {tx.to ? `à ${tx.to}` : tx.from ? `de ${tx.from}` : ""}
                </span>
              </div>
              <div className={tx.amount >= 0 ? "text-emerald-700 font-bold" : "text-red-600 font-bold"}>
                {tx.amount >= 0 ? "+" : ""}{tx.amount} XLM
              </div>
              <div className="text-gray-400 text-xs">{tx.date}</div>
            </li>
          ))}
        </ul>
        {/* Section Partenaires (exemple d'utilisation de <Image />) */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#111827' }}>
              Nos partenaires
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10">
              <div className="flex flex-col items-center">
                <Image src="/abc-logo.png" alt="ABC" width={80} height={56} className="h-14 w-auto mb-2" style={{ filter: 'drop-shadow(0 2px 8px #3A86FF22)' }} />
                <span className="text-gray-700 text-sm font-medium">ABC</span>
              </div>
            </div>
          </div>
        </section>
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
              <Image src="/weda-logo.png" alt="Weda Logo" width={48} height={48} />
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