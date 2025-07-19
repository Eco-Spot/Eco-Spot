import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Leaf, Heart, Sparkles, Send } from 'lucide-react';
import ecospotLogo from '../assets/ecospot-logo.png';

const Footer = () => {
  return (
    <footer className="relative gradient-bg-1 text-primary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 morphing-shape float-animation"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 morphing-shape float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 morphing-shape float-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Glowing particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/20 rounded-full glow-effect"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-white/20 rounded-full glow-effect" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/20 rounded-full glow-effect" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Enhanced Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <img 
                  src={ecospotLogo} 
                  alt="ECOSPOT Logo" 
                  className="h-12 w-auto filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold">ECOSPOT</h3>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed text-lg">
              وجهتك الأولى لاكتشاف عالم البيئة والاستدامة. نسعى لنشر الوعي البيئي وتقديم حلول مبتكرة لمستقبل أكثر خضرة.
            </p>
            
            {/* Enhanced social media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:bg-blue-500' },
                { icon: Twitter, color: 'hover:bg-sky-500' },
                { icon: Instagram, color: 'hover:bg-pink-500' },
                { icon: Linkedin, color: 'hover:bg-blue-600' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`group relative p-3 rounded-full glass-effect text-primary-foreground/80 hover:text-white transition-all duration-300 hover-lift ${social.color}`}
                >
                  <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Quick links */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-accent animate-pulse" />
              <h4 className="text-xl font-bold">روابط سريعة</h4>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'الرئيسية', emoji: '🏠' },
                { name: 'المقالات', emoji: '📚' },
                { name: 'البيئة', emoji: '🌱' },
                { name: 'الاستدامة', emoji: '♻️' },
                { name: 'نصائح خضراء', emoji: '💡' },
                { name: 'من نحن', emoji: '👥' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href="#" 
                    className="group flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{link.emoji}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Categories */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-accent animate-pulse wave-animation" />
              <h4 className="text-xl font-bold">التصنيفات</h4>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'الطاقة المتجددة', emoji: '⚡' },
                { name: 'إعادة التدوير', emoji: '♻️' },
                { name: 'الزراعة المستدامة', emoji: '🌾' },
                { name: 'حماية المحيطات', emoji: '🌊' },
                { name: 'المدن الذكية', emoji: '🏙️' },
                { name: 'التغير المناخي', emoji: '🌡️' }
              ].map((category) => (
                <li key={category.name}>
                  <a 
                    href="#" 
                    className="group flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{category.emoji}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{category.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-red-400 animate-pulse" />
              <h4 className="text-xl font-bold">تواصل معنا</h4>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, text: 'info@ecospot.com', color: 'text-blue-300' },
                { icon: Phone, text: '+966 50 123 4567', color: 'text-green-300' },
                { icon: MapPin, text: 'الرياض، المملكة العربية السعودية', color: 'text-red-300' }
              ].map((contact, index) => (
                <div key={index} className="group flex items-center space-x-3 p-3 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300">
                  <contact.icon className={`h-6 w-6 ${contact.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-primary-foreground/90 group-hover:text-white transition-colors">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced Newsletter signup */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Send className="h-5 w-5 text-accent animate-pulse" />
                <h5 className="font-bold text-lg">اشترك في النشرة البريدية</h5>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">احصل على أحدث المقالات والنصائح البيئية</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-r-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent bg-white/90"
                />
                <button className="gradient-bg-2 text-white px-6 py-3 rounded-l-xl hover:scale-105 transition-all duration-300 glow-effect">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-primary-foreground/80 text-lg">
                © 2024 ECOSPOT. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span className="text-primary-foreground/60 text-sm">صنع بحب للبيئة</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-lg hover:underline">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-lg hover:underline">
                شروط الاستخدام
              </a>
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <Leaf className="h-5 w-5 text-accent wave-animation" />
                <span className="text-primary-foreground/90 font-semibold">صديق للبيئة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-primary"></div>
    </footer>
  );
};

export default Footer;

