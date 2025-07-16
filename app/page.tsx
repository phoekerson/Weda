"use client";

import React, { useState } from 'react';
import { Send, PiggyBank, Users, Mail, Phone, CheckCircle, Star } from 'lucide-react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

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

  const carouselImages = [
    // Images libres de droits, liens Unsplash/Pexels (à remplacer par des images locales si besoin)
    {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      alt: "Jeune femme africaine souriante"
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      alt: "Homme africain heureux"
    },
    {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      alt: "Groupe d'amis africains"
    },
    {
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
      alt: "Jeune femme africaine avec smartphone"
    },
    {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      alt: "Homme africain souriant en extérieur"
    }
  ];

  const moreTestimonials = [
    ...testimonials,
    {
      quote: "J'ai pu économiser sans même m'en rendre compte. L'application est super intuitive !",
      name: "Fatou D.",
      tag: "Comptable, Abidjan",
      initials: "FD",
      color: "#00C896"
    },
    {
      quote: "Enfin une solution simple pour envoyer de l'argent à ma famille. Merci Weda !",
      name: "Jean-Marc T.",
      tag: "Chauffeur, Cotonou",
      initials: "JT",
      color: "#3A86FF"
    },
    {
      quote: "J'adore l'arrondi automatique, ça m'aide à mettre de côté sans effort.",
      name: "Awa B.",
      tag: "Étudiante, Bamako",
      initials: "AB",
      color: "#00C896"
    },
    {
      quote: "Simple, rapide, efficace. Je recommande à tous mes amis !",
      name: "Koffi E.",
      tag: "Artisan, Lomé",
      initials: "KE",
      color: "#3A86FF"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  // Ajout pour l'effet typewriter sous le header
  const rotatingTexts = [
    "Envoyez de l'argent en un instant.",
    "Épargnez sans effort, chaque jour.",
    "Accessible à tous, sans jargon crypto.",
    "Simple. Rapide. Sécurisé."
  ];
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let deletingTimeout: NodeJS.Timeout;
    const fullText = rotatingTexts[currentTextIdx];
    if (!isDeleting && displayedText.length < fullText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
    } else if (isDeleting && displayedText.length > 0) {
      deletingTimeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 30);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIdx((prev) => (prev + 1) % rotatingTexts.length);
    }
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [displayedText, isDeleting, currentTextIdx, rotatingTexts]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Header */}
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
              <a href="#features" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Fonctionnalités</a>
              <a href="#testimonials" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Témoignages</a>
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

      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#111827' }}>
              <span style={{ background: 'linear-gradient(135deg, #3A86FF 0%, #00C896 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Weda
              </span>
              {' – L\'argent intelligent pour tous'}
            </h1>
            <div className="max-w-2xl mx-auto mb-8 min-h-[48px] flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-semibold text-gray-800">
                {displayedText}
                <span className="blinking-cursor">|</span>
              </span>
            </div>
            
            {/* Waitlist Form */}
            <div className="max-w-lg mx-auto">
              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-3 bg-white/95 rounded-2xl shadow-lg p-4 border border-blue-100">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Entrez votre email ou téléphone pour rejoindre Weda"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-gray-900 placeholder-gray-400 bg-white"
                      style={{ background: 'white', color: '#111827', fontWeight: 500, fontSize: '1rem' }}
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
      </motion.section>

      {/* Carousel Section - Images de personnes africaines */}
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#111827' }}>
            Une communauté vivante et connectée
          </h2>
          <Slider {...sliderSettings}>
            {carouselImages.map((img, idx) => (
              <div key={idx} className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="rounded-3xl shadow-xl object-cover w-full h-72 md:h-96 transition-transform duration-500 hover:scale-105"
                  style={{ maxWidth: 600 }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        id="features"
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-24"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#111827' }}>
              Ce que disent les gens de Weda
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retours réels de testeurs précoces et membres de la communauté
            </p>
          </div>
          <Slider {...testimonialSliderSettings}>
            {moreTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-2 flex flex-col h-full"
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(58,134,255,0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#00C896' }} />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  « {testimonial.quote} »
                </blockquote>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4" style={{ backgroundColor: testimonial.color }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#111827' }}>{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.tag}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Section Partenaires */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#111827' }}>
            Nos partenaires
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {/* Logos partenaires (placeholders SVG/PNG, à remplacer par les vrais logos si besoin) */}
            <div className="flex flex-col items-center">
              <Image src="/mixbyyas.svg" alt="Mix by Yas" className="h-14 w-auto mb-2" style={{ filter: 'drop-shadow(0 2px 8px #3A86FF22)' }} />
              <span className="text-gray-700 text-sm font-medium">Mix by Yas</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/moovmoney.svg" alt="Moov Money" className="h-14 w-auto mb-2" style={{ filter: 'drop-shadow(0 2px 8px #00C89622)' }} />
              <span className="text-gray-700 text-sm font-medium">Moov Money</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/paypal.svg" alt="Paypal" className="h-14 w-auto mb-2" style={{ filter: 'drop-shadow(0 2px 8px #11182722)' }} />
              <span className="text-gray-700 text-sm font-medium">Paypal</span>
            </div>
          </div>
        </div>
      </motion.section>

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
                © 2025 Weda. Tous droits réservés. Rendre l'argent plus intelligent pour tous.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}