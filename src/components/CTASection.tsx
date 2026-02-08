import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Sparkles } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const openWhatsApp = () => {
    window.open('https://wa.me/5515991083831?text=Olá! Gostaria de agendar uma consulta.', '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      id="contato"
      className="section-padding bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className={`mb-8 ${isInView ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="inline-flex w-20 h-20 rounded-2xl bg-primary/10 items-center justify-center">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          {/* Title */}
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Pronto Para Sorrir Com Segurança —{' '}
            <span className="text-gradient-gold">Ou Dormir Melhor?</span>
          </h2>
          
          {/* Description */}
          <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 ${isInView ? 'animate-fade-in-up-delay-1' : 'opacity-0'}`}>
            Agende sua consulta e descubra soluções eficazes para estética, reabilitação oral e distúrbios do sono. 
            Atendimento personalizado com foco em saúde, conforto e bem-estar.
          </p>
          
          {/* CTA Button with enhanced animation */}
          <div className={`${isInView ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            <button 
              onClick={openWhatsApp}
              className="relative group btn-primary text-lg md:text-xl px-10 py-5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agende Sua Consulta
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
