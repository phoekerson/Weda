"use client"
import React, { useState } from 'react';
import { Send, PiggyBank, Users, Mail, Phone, CheckCircle, Star } from 'lucide-react';

export default function WedaLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const benefits = [
    {
      icon: <Send className="w-8 h-8 text-blue-600" />,
      title: "Send money instantly",
      description: "Transfer funds using just a phone number or email address. No complex wallet addresses needed."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-green-600" />,
      title: "Turn spare change into smart savings",
      description: "Every transaction rounds up automatically, turning your leftover cents into meaningful savings."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Accessible even without crypto knowledge",
      description: "Built for everyone. No need to understand blockchain or crypto — just simple, intuitive money management."
    }
  ];

  const testimonials = [
    {
      quote: "I've always struggled to save money. Weda makes it automatic and invisible — brilliant idea!",
      name: "Amara K.",
      tag: "Entrepreneur, Lomé",
      initials: "AK",
      color: "bg-blue-500"
    },
    {
      quote: "Sending money to my little brother in Togo with just his phone number? Game-changer.",
      name: "Ibrahim S.",
      tag: "Student, Dakar",
      initials: "IS",
      color: "bg-green-500"
    },
    {
      quote: "No crypto experience needed. Just works. I'm on board.",
      name: "Marie L.",
      tag: "Teacher, Accra",
      initials: "ML",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Weda</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Join Waitlist
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Weda
              </span>
              {' – Smarter Money for Everyone'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Send. Save. Spend. Without friction.
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Weda is a next-generation digital payment app designed for underbanked communities. 
                It allows users to send funds via phone number or email, automatically save leftover change, 
                and access smart money features – all without needing crypto experience. Fast, transparent, 
                and powered by Stellar.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email or phone to join Weda early"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isLoading ? 'Joining...' : 'Join the Waitlist'}
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">
                    Welcome to Weda! We'll notify you when we launch.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose Weda?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for the future of digital payments in Africa and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
      <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What people are saying about Weda
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from early testers and community members
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.tag}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">Weda</span>
            </div>
            
            <div className="flex justify-center items-center mb-8">
              <span className="text-gray-400 mr-3">Built on</span>
              <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
                <span className="font-medium">Stellar</span>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Weda. All rights reserved. Making money smarter for everyone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}