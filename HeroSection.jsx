import React from 'react';
import { ArrowRight, Leaf, Droplets, Recycle, Sparkles, Wind, Sun } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden particle-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 morphing-shape float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 morphing-shape float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/20 morphing-shape float-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-secondary/20 morphing-shape float-animation" style={{animationDelay: '1s'}}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-secondary/30 rounded-full glow-effect"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-accent/30 rounded-full glow-effect" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-primary/30 rounded-full glow-effect" style={{animationDelay: '3s'}}></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 right-1/3 text-secondary/20 float-animation wave-animation">
          <Leaf className="h-12 w-12" />
        </div>
        <div className="absolute bottom-40 left-1/5 text-primary/20 float-animation wave-animation" style={{animationDelay: '2s'}}>
          <Droplets className="h-10 w-10" />
        </div>
        <div className="absolute top-2/3 right-1/5 text-accent/20 float-animation wave-animation" style={{animationDelay: '4s'}}>
          <Wind className="h-14 w-14" />
        </div>
        <div className="absolute top-1/3 left-2/3 text-secondary/20 float-animation wave-animation" style={{animationDelay: '1s'}}>
          <Sun className="h-8 w-8" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center py-20">
          {/* Sparkle decoration */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-accent animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/30 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main heading with enhanced styling */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-foreground mb-4">مرحباً بك في</span>
            <span className="block gradient-text text-shadow-glow shimmer-effect text-7xl md:text-9xl">
              ECOSPOT
            </span>
          </h1>
          
          {/* Subtitle with glass effect */}
          <div className="glass-effect rounded-2xl p-8 mb-12 mx-auto max-w-4xl">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium">
              وجهتك الأولى لاكتشاف عالم البيئة والاستدامة
              <br />
              <span className="text-xl md:text-2xl text-muted-foreground mt-2 block">
                نشارك معك أحدث الأخبار والنصائح لحياة أكثر خضرة وإشراقاً
              </span>
            </p>
          </div>

          {/* Enhanced feature icons */}
          <div className="flex justify-center items-center space-x-12 mb-16">
            <div className="flex flex-col items-center hover-lift">
              <div className="w-24 h-24 gradient-bg-1 rounded-full flex items-center justify-center mb-4 glow-effect">
                <Leaf className="h-12 w-12 text-white wave-animation" />
              </div>
              <span className="text-lg font-bold text-foreground">البيئة</span>
              <span className="text-sm text-muted-foreground">حماية كوكبنا</span>
            </div>
            <div className="flex flex-col items-center hover-lift" style={{animationDelay: '0.5s'}}>
              <div className="w-24 h-24 gradient-bg-2 rounded-full flex items-center justify-center mb-4 glow-effect">
                <Droplets className="h-12 w-12 text-white wave-animation" />
              </div>
              <span className="text-lg font-bold text-foreground">المياه</span>
              <span className="text-sm text-muted-foreground">مصدر الحياة</span>
            </div>
            <div className="flex flex-col items-center hover-lift" style={{animationDelay: '1s'}}>
              <div className="w-24 h-24 gradient-bg-1 rounded-full flex items-center justify-center mb-4 glow-effect">
                <Recycle className="h-12 w-12 text-white wave-animation" />
              </div>
              <span className="text-lg font-bold text-foreground">إعادة التدوير</span>
              <span className="text-sm text-muted-foreground">مستقبل مستدام</span>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden gradient-bg-1 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 glow-effect">
              <span className="relative z-10 flex items-center space-x-3">
                <span>استكشف المقالات</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 shimmer-effect"></div>
            </button>
            
            <button className="group relative overflow-hidden glass-effect border-2 border-secondary text-secondary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:bg-secondary hover:text-white">
              <span className="relative z-10 flex items-center space-x-3">
                <Sparkles className="h-5 w-5 group-hover:animate-spin" />
                <span>اشترك في النشرة</span>
              </span>
            </button>
          </div>

          {/* Floating call-to-action */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <div className="w-12 h-12 gradient-bg-2 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

