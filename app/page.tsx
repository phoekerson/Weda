"use client";

import React, { useState, useMemo } from 'react';
import { Send, PiggyBank, Users, CheckCircle, Star, Menu } from 'lucide-react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WedaLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    try {
      const formData = {
        access_key: "820d801d-8068-46bd-8075-f714f5673be9", // Remplacez par votre clé d'accès Web3Forms
        email: email,
        subject: "Nouvelle inscription à la liste d'attente Weda",
        message: `Nouvel utilisateur inscrit à la liste d'attente: ${email}`
      };
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log(result);
        setIsSubmitted(true);
      } else {
        console.error("Erreur lors de l'envoi:", result);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
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
    
    {
      url: "/image1.jpg",
      alt: "Jeune femme africaine souriante"
    },
    {
      url: "/image2.jpg",
      alt: "Homme africain heureux"
    },
    {
      url: "/image3.jpg",
      alt: "Groupe d'amis africains"
    },
    {
      url: "/image4.jpg",
      alt: "Jeune femme africaine avec smartphone"
    },
    {
      url: "/image5.jpg",
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

  // Correction: Utilisation de useMemo pour éviter la re-création du tableau à chaque render
  const rotatingTexts = useMemo(() => [
    "Envoyez de l'argent en un instant.",
    "Épargnez sans effort, chaque jour.",
    "Accessible à tous, sans jargon crypto.",
    "Simple. Rapide. Sécurisé."
  ], []);

  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    let typingTimeout: string | number | NodeJS.Timeout | undefined;
    let deletingTimeout: string | number | NodeJS.Timeout | undefined;
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
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 shadow-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: '#fff',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/weda-logo.png"
                  alt="Weda Logo"
                  width={180}
                  height={64}
                  className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 xl:h-28"
                  style={{ maxWidth: '70vw', height: 'auto' }}
                />
              </div>
            </div>
            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-4 items-center">
              <a href="/dashboard" className="text-white/80 hover:text-white font-medium transition-colors text-lg " style={{ color: '#0097b2' }}>Tableau de bord</a>
              <a href="/send" className="text-white/80 hover:text-white font-medium transition-colors text-lg" style={{ color: '#0097b2' }}>Envoyer</a>
              <a href="/savings" className="text-white/80 hover:text-white font-medium transition-colors text-lg" style={{ color: '#0097b2' }}>Épargne</a>
              <a href="#features" className="text-white/80 hover:text-white font-medium transition-colors text-lg" style={{ color: '#0097b2' }}>Fonctionnalités</a>
              <a href="#testimonials" className="text-white/80 hover:text-white font-medium transition-colors text-lg" style={{ color: '#0097b2' }}>Témoignages</a>
              <button
                className="flex items-center gap-2 text-white px-7 py-3 rounded-xl font-semibold shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Send className="w-5 h-5 mr-1" />
                Rejoindre la liste
              </button>
            </nav>
            {/* Burger menu button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Ouvrir le menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-8 h-8 text-[#0097b2]" />
            </button>
          </div>
        </div>
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
            <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
              <button
                className="self-end mb-8 text-2xl text-[#0097b2]"
                aria-label="Fermer le menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                ×
              </button>
              <a href="/dashboard" className="mb-4 text-[#0097b2] text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Tableau de bord</a>
              <a href="/send" className="mb-4 text-[#0097b2] text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Envoyer</a>
              <a href="/savings" className="mb-4 text-[#0097b2] text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Épargne</a>
              <a href="#features" className="mb-4 text-[#0097b2] text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</a>
              <a href="#testimonials" className="mb-8 text-[#0097b2] text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>Témoignages</a>
              <button
                className="flex items-center gap-2 text-white px-7 py-3 rounded-xl font-semibold shadow-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Send className="w-5 h-5 mr-1" />
                Rejoindre la liste
              </button>
            </div>
          </div>
        )}
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
            
            {/* Waitlist Form avec Web3Forms */}
            <div className="max-w-lg mx-auto">
              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-3 bg-white/95 rounded-2xl shadow-lg p-4 border border-blue-100">
                  <div className="flex-1 relative">
                    <input
                      type="email"
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
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={600}
                  height={400}
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
              Conçu pour l&apos;avenir des paiements numériques en Afrique et au-delà
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
            <div className="flex flex-col items-center">
              <Image src="/abc-logo.png" alt="ABC" width={120} height={80} className="h-20 w-auto mb-2" />
              <span className="text-gray-700 text-sm font-medium">ABC</span>
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
              <Image src="/weda-logo.png" alt="Weda Logo" width={100} height={40} style={{ marginRight: 12 }} />

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