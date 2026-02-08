import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Moon, Volume2, Battery, Brain, Sun, Droplets } from 'lucide-react';

const symptoms = [
  { icon: Volume2, text: 'Ronco alto e frequente' },
  { icon: Moon, text: 'Pausas na respiração' },
  { icon: Battery, text: 'Cansaço ao acordar' },
  { icon: Sun, text: 'Sonolência durante o dia' },
  { icon: Brain, text: 'Dificuldade de foco e memória' },
  { icon: Droplets, text: 'Boca seca ou dor de cabeça pela manhã' },
];

const ApneaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="apneia"
      className="section-padding highlight-bg relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Destaque
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Tratamento para{' '}
              <span className="text-gradient-gold">Apneia e Ronco</span>
            </h2>
            <div className="divider-gold" />
          </div>
          
          {/* Content */}
          <div className={`glass-card p-8 md:p-12 ${isInView ? 'animate-fade-in-up-delay-1' : 'opacity-0'}`}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-center md:text-left">
              <p className="text-lg">
                Tratamento eficaz para ronco e apneia do sono com uso de <strong className="text-foreground">aparelho intraoral</strong>, 
                promovendo noites mais tranquilas e qualidade de vida.
              </p>
              
              <p>
                Se você ronca, acorda cansado ou tem sono agitado, pode estar sofrendo de apneia do sono.
              </p>
              
              <p>
                O aparelho intraoral é uma solução <strong className="text-foreground">simples, discreta e confortável</strong>. 
                Ele ajuda a manter as vias aéreas livres durante a noite, reduzindo o ronco e melhorando a respiração.
              </p>
              
              <p className="font-serif text-xl text-primary font-medium">
                Mais sono de verdade. Mais energia no dia seguinte.
              </p>
            </div>
            
            {/* Symptoms Grid */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-serif text-xl text-foreground font-medium mb-6 text-center">
                Você reconhece algum desses sintomas?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {symptoms.map((symptom, index) => {
                  const Icon = symptom.icon;
                  return (
                    <div
                      key={symptom.text}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground font-medium">
                        {symptom.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-10">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-lg"
              >
                Agendar Avaliação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApneaSection;
