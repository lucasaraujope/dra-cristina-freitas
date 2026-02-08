import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        
      />
      
      {/* Gradient Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className={`max-w-4xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground mb-4">
            <span className="text-gradient-gold">Dra. Cristina Freitas</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground font-medium tracking-wide mb-8 ${isInView ? 'animate-fade-in-up-delay-1' : 'opacity-0'}`}>
            Dentista em Sorocaba
          </p>
          
          {/* Main headline */}
          <p className={`text-xl md:text-2xl lg:text-3xl text-foreground/90 font-serif leading-relaxed mb-10 max-w-3xl mx-auto ${isInView ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            Dor, Desconforto ou Estética? Agende com a Dra. Cristina e resolva de vez o seu problema.
          </p>
          
          {/* CTA Button */}
          <div className={`${isInView ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}>
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg md:text-xl"
            >
              Agende Sua Avaliação
            </button>
          </div>
          
          {/* Address */}
          <div className={`mt-12 flex items-center justify-center gap-2 text-muted-foreground ${isInView ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}>
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base">
              R. Cap. Nascimento Filho, 369, Jardim Vergueiro, Sorocaba/SP
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
