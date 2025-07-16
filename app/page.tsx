"use client";

import React, { useState } from 'react';
import { Send, PiggyBank, Users, Mail, Phone, CheckCircle, Star } from 'lucide-react';

export default function WedaLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: <Send className="w-8 h-8" style={{ color: '#3A86FF' }} />,
      title: "Envoyez de l'argent instantanément",
      description: "Transférez des fonds en utilisant simplement un numéro de téléphone ou une adresse e-mail. Aucune adresse de portefeuille complexe nécessaire."
    },
    {
      icon: <PiggyBank className="w-8 h-8" style={{ color: '#00C896' }} />,
      title: "Transformez votre monnaie en épargne intelligente",
      description: "Chaque transaction s'arrondit automatiquement, transformant vos centimes restants en économies significatives."
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: '#3A86FF' }} />,
      title: "Accessible même sans connaissance crypto",
      description: "Conçu pour tous. Pas besoin de comprendre la blockchain ou les cryptomonnaies — juste une gestion d'argent simple et intuitive."
    }
  ];

  const testimonials = [
    {
      quote: "J'ai toujours eu du mal à économiser de l'argent. Weda le rend automatique et invisible — idée brillante !",
      name: "Amara K.",
      tag: "Entrepreneure, Lomé",
      initials: "AK",
      color: "#3A86FF"
    },
    {
      quote: "Envoyer de l'argent à mon petit frère au Togo avec juste son numéro de téléphone ? Révolutionnaire.",
      name: "Ibrahim S.",
      tag: "Étudiant, Dakar",
      initials: "IS",
      color: "#00C896"
    },
    {
      quote: "Aucune expérience crypto nécessaire. Ça marche tout simplement. Je suis conquis.",
      name: "Marie L.",
      tag: "Enseignante, Accra",
      initials: "ML",
      color: "#3A86FF"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)' }}>
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold" style={{ color: '#111827' }}>Weda</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Fonctionnalités</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Témoignages</a>
              <button 
                className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
                style={{ backgroundColor: '#3A86FF' }}
              >
                Rejoindre la liste
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#111827' }}>
              <span style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Weda
              </span>
              {' – L\'argent intelligent pour tous'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Envoyez. Épargnez. Dépensez. Sans friction.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg leading-relaxed" style={{ color: '#111827' }}>
                Weda est une application de paiement numérique de nouvelle génération conçue pour les communautés 
                sous-bancarisées. Elle permet aux utilisateurs d'envoyer des fonds via un numéro de téléphone ou 
                un e-mail, d'économiser automatiquement la monnaie restante et d'accéder à des fonctionnalités 
                financières intelligentes – le tout sans avoir besoin d'expérience crypto. Rapide, transparent 
                et alimenté par Stellar.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-lg mx-auto">
              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Entrez votre email ou téléphone pour rejoindre Weda"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none"
                      style={{ focusRingColor: '#3A86FF' }}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email.trim()}
                    className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    style={{ backgroundColor: '#3A86FF' }}
                  >
                    {isLoading ? 'Inscription...' : 'Rejoindre la liste'}
                  </button>
                </div>
              ) : (
                <div className="border rounded-lg p-4 flex items-center justify-center" style={{ backgroundColor: '#00C896', color: 'white', borderColor: '#00C896' }}>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">
                    Bienvenue chez Weda ! Nous vous préviendrons lors du lancement.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ backgroundColor: '#3A86FF' }}></div>
          <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ backgroundColor: '#00C896', animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111827' }}>
              Pourquoi choisir Weda ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conçu pour l'avenir des paiements numériques en Afrique et au-delà
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#111827' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111827' }}>
              Ce que disent les gens de Weda
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retours réels de testeurs précoces et membres de la communauté
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#00C896' }} />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  « {testimonial.quote} »
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4" style={{ backgroundColor: testimonial.color }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#111827' }}>{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: '#111827', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)' }}>
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">Weda</span>
            </div>
            
            <div className="flex justify-center items-center mb-8">
              <span className="text-gray-400 mr-3">Propulsé par</span>
              <div className="px-4 py-2 rounded-lg flex items-center" style={{ backgroundColor: '#374151' }}>
                <div className="w-6 h-6 rounded-full mr-2" style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)' }}></div>
                <span className="font-medium">Stellar</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2025 Weda. Tous droits réservés. Rendre l'argent plus intelligent pour tous.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}