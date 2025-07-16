"use client";
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
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
            </motion.div>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Accueil</Link>
            <Link href="/dashboard" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Tableau de bord</Link>
            <Link href="/send" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Envoyer</Link>
            <Link href="/savings" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Épargne</Link>
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
  );
} 