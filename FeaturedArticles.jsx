import React from 'react';
import ArticleCard from './ArticleCard';
import { TrendingUp, Sparkles, Star, Zap } from 'lucide-react';

const FeaturedArticles = () => {
  // Sample articles data
  const featuredArticles = [
    {
      id: 1,
      title: "كيفية تقليل البصمة الكربونية في حياتك اليومية",
      excerpt: "اكتشف الطرق البسيطة والفعالة لتقليل انبعاثات الكربون من خلال تغييرات صغيرة في نمط حياتك اليومي. من اختيار وسائل النقل المستدامة إلى توفير الطاقة في المنزل.",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=300&fit=crop",
      author: "أحمد محمد",
      date: "15 يناير 2024",
      readTime: "5",
      category: "البيئة"
    },
    {
      id: 2,
      title: "الطاقة المتجددة: مستقبل أكثر إشراقاً للكوكب",
      excerpt: "تعرف على أحدث التطورات في مجال الطاقة المتجددة وكيف تساهم الطاقة الشمسية وطاقة الرياح في بناء مستقبل مستدام للأجيال القادمة.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      author: "فاطمة علي",
      date: "12 يناير 2024",
      readTime: "7",
      category: "الطاقة"
    },
    {
      id: 3,
      title: "إعادة التدوير: دليلك الشامل للبداية الصحيحة",
      excerpt: "دليل مفصل حول كيفية البدء في إعادة التدوير بطريقة صحيحة وفعالة. تعلم كيفية فرز النفايات واختيار المواد القابلة لإعادة التدوير.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      author: "محمد حسن",
      date: "10 يناير 2024",
      readTime: "6",
      category: "إعادة التدوير"
    },
    {
      id: 4,
      title: "الزراعة المستدامة: تقنيات حديثة لمستقبل أخضر",
      excerpt: "استكشف أحدث تقنيات الزراعة المستدامة التي تحافظ على البيئة وتزيد من الإنتاجية. من الزراعة العضوية إلى الزراعة المائية.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      author: "سارة أحمد",
      date: "8 يناير 2024",
      readTime: "8",
      category: "الزراعة"
    },
    {
      id: 5,
      title: "حماية المحيطات: دورنا في الحفاظ على الحياة البحرية",
      excerpt: "تعرف على التحديات التي تواجه محيطاتنا وكيف يمكن لكل فرد منا المساهمة في حماية الحياة البحرية والنظم البيئية المائية.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      author: "عمر خالد",
      date: "5 يناير 2024",
      readTime: "6",
      category: "المحيطات"
    },
    {
      id: 6,
      title: "المدن الذكية والاستدامة البيئية",
      excerpt: "كيف تساهم تقنيات المدن الذكية في تحسين جودة البيئة وتقليل استهلاك الطاقة. نظرة على أفضل الممارسات العالمية في التخطيط الحضري المستدام.",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop",
      author: "ليلى محمود",
      date: "3 يناير 2024",
      readTime: "9",
      category: "التقنية"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/10 morphing-shape float-animation"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/10 morphing-shape float-animation" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 morphing-shape float-animation" style={{animationDelay: '1.5s'}}></div>
        
        {/* Glowing particles */}
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-secondary/20 rounded-full glow-effect"></div>
        <div className="absolute bottom-1/4 left-1/5 w-6 h-6 bg-accent/20 rounded-full glow-effect" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          {/* Decorative elements */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-accent animate-pulse" />
              <Sparkles className="h-8 w-8 text-secondary animate-pulse" style={{animationDelay: '0.5s'}} />
              <Zap className="h-6 w-6 text-primary animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>

          {/* Main title with enhanced styling */}
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text text-shadow-glow">
              المقالات المميزة
            </h2>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Subtitle with glass effect */}
          <div className="glass-effect rounded-2xl p-6 mx-auto max-w-3xl">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              اكتشف أحدث المقالات والأخبار في عالم البيئة والاستدامة
              <br />
              <span className="text-lg text-primary font-semibold">محتوى متميز من خبراء البيئة</span>
            </p>
          </div>

          {/* Trending indicator */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            <TrendingUp className="h-6 w-6 text-primary animate-bounce" />
            <span className="text-lg font-semibold text-primary">الأكثر قراءة هذا الأسبوع</span>
            <TrendingUp className="h-6 w-6 text-primary animate-bounce" style={{animationDelay: '0.5s'}} />
          </div>
        </div>

        {/* Enhanced articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="animate-in slide-in-from-bottom duration-700"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Enhanced view all button */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <button className="group relative overflow-hidden gradient-bg-2 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:scale-105 transition-all duration-300 glow-effect">
              <span className="relative z-10 flex items-center space-x-3">
                <Sparkles className="h-6 w-6 group-hover:animate-spin" />
                <span>عرض جميع المقالات</span>
                <Star className="h-6 w-6 group-hover:animate-pulse" />
              </span>
              <div className="absolute inset-0 shimmer-effect"></div>
            </button>
            
            {/* Floating decorations around button */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-accent/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-secondary/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Statistics section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "500+", label: "مقال متخصص", icon: "📚" },
            { number: "50K+", label: "قارئ نشط", icon: "👥" },
            { number: "25+", label: "خبير بيئي", icon: "🌱" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass-effect rounded-2xl p-8 hover-lift"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;

