import React from 'react';
import { Calendar, User, ArrowLeft, Heart, Share2, Eye, Clock, Sparkles } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <article className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift">
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0.5 bg-white rounded-3xl"></div>
      
      <div className="relative z-10">
        {/* Enhanced article image */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category badge with glow */}
          <div className="absolute top-4 right-4">
            <span className="glass-effect text-white px-4 py-2 rounded-full text-sm font-bold glow-effect">
              {article.category}
            </span>
          </div>
          
          {/* Floating action buttons */}
          <div className="absolute bottom-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button className="glass-effect p-3 rounded-full hover:bg-red-500/20 transition-colors hover-lift">
              <Heart className="h-5 w-5 text-red-500" />
            </button>
            <button className="glass-effect p-3 rounded-full hover:bg-primary/20 transition-colors hover-lift">
              <Share2 className="h-5 w-5 text-primary" />
            </button>
            <button className="glass-effect p-3 rounded-full hover:bg-secondary/20 transition-colors hover-lift">
              <Eye className="h-5 w-5 text-secondary" />
            </button>
          </div>

          {/* Sparkle decoration */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles className="h-6 w-6 text-accent animate-pulse" />
          </div>
        </div>

        {/* Enhanced article content */}
        <div className="p-8">
          {/* Title with gradient effect */}
          <h3 className="text-2xl font-bold text-foreground mb-4 line-clamp-2 group-hover:gradient-text transition-all duration-300 leading-tight">
            {article.title}
          </h3>
          
          {/* Excerpt with better typography */}
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed text-lg">
            {article.excerpt}
          </p>

          {/* Enhanced meta information */}
          <div className="flex items-center justify-between text-sm mb-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 glass-effect px-3 py-1 rounded-full">
                <User className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{article.author}</span>
              </div>
              <div className="flex items-center space-x-2 glass-effect px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4 text-secondary" />
                <span className="text-muted-foreground">{article.date}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-3 py-2 rounded-full">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-accent font-bold">{article.readTime} دقائق</span>
            </div>
          </div>

          {/* Enhanced read more button */}
          <button className="group/btn relative overflow-hidden w-full gradient-bg-1 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 glow-effect">
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>اقرأ المزيد</span>
              <ArrowLeft className="h-5 w-5 group-hover/btn:-translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 shimmer-effect"></div>
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </article>
  );
};

export default ArticleCard;

