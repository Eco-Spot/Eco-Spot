import React, { useState } from 'react';
import { Menu, Search, Leaf, X, Sparkles } from 'lucide-react';
import ecospotLogo from '../assets/ecospot-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white/95 backdrop-blur-lg shadow-xl border-b-2 border-secondary/20 sticky top-0 z-50">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-2 left-10 w-4 h-4 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-20 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-2 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src={ecospotLogo} 
                alt="ECOSPOT Logo" 
                className="h-14 w-auto group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-3xl font-bold gradient-text">ECOSPOT</h1>
              <p className="text-sm text-muted-foreground font-medium">مدونة البيئة والاستدامة</p>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'الرئيسية', href: '#home' },
              { name: 'المقالات', href: '#articles' },
              { name: 'البيئة', href: '#environment' },
              { name: 'الاستدامة', href: '#sustainability' },
              { name: 'نصائح خضراء', href: '#tips' },
              { name: 'من نحن', href: '#about' }
            ].map((item, index) => (
              <a 
                key={item.name}
                href={item.href} 
                className="relative group text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-secondary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Enhanced Action buttons */}
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button className="group relative p-3 rounded-full glass-effect hover:bg-secondary/10 transition-all duration-300 hover-lift">
              <Search className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-secondary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>

            {/* Sparkle decoration */}
            <div className="hidden sm:block">
              <Sparkles className="h-5 w-5 text-accent animate-pulse" />
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden group relative p-3 rounded-full glass-effect hover:bg-primary/10 transition-all duration-300 hover-lift"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              ) : (
                <Menu className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              )}
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 glass-effect rounded-2xl p-6 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'الرئيسية', href: '#home', icon: '🏠' },
                { name: 'المقالات', href: '#articles', icon: '📚' },
                { name: 'البيئة', href: '#environment', icon: '🌱' },
                { name: 'الاستدامة', href: '#sustainability', icon: '♻️' },
                { name: 'نصائح خضراء', href: '#tips', icon: '💡' },
                { name: 'من نحن', href: '#about', icon: '👥' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors font-semibold text-lg p-3 rounded-lg hover:bg-secondary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </header>
  );
};

export default Header;

