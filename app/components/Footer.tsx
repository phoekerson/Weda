"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
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
  );
} 