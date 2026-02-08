import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { 
  Sparkles, 
  Sun, 
  Layers, 
  Syringe, 
  SprayCan, 
  Droplets, 
  Crown, 
  CircleDot 
} from 'lucide-react';

const treatments = [
  { 
    icon: CircleDot, 
    title: 'Aparelho Intraoral para Ronco e Apneia',
    description: 'Tratamento eficaz para distúrbios do sono'
  },
  { 
    icon: Sun, 
    title: 'Clareamento Dental',
    description: 'Dentes mais brancos e sorriso radiante'
  },
  { 
    icon: Layers, 
    title: 'Facetas de Porcelana',
    description: 'Transformação estética duradoura'
  },
  { 
    icon: Syringe, 
    title: 'Toxina Botulínica',
    description: 'Harmonização orofacial'
  },
  { 
    icon: SprayCan, 
    title: 'Limpeza Dental',
    description: 'Prevenção e saúde bucal'
  },
  { 
    icon: Droplets, 
    title: 'Preenchimento Labial',
    description: 'Volume e contorno natural'
  },
  { 
    icon: Crown, 
    title: 'Próteses',
    description: 'Reabilitação funcional e estética'
  },
  { 
    icon: Sparkles, 
    title: 'Próteses sobre Implantes',
    description: 'Soluções fixas e seguras'
  },
];

const TreatmentsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="tratamentos"
      className="section-padding bg-background"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Tratamentos
          </h2>
          <div className="divider-gold" />
        </div>
        
        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <div
                key={treatment.title}
                className={`treatment-card group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {treatment.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className={`text-center mt-14 ${isInView ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
          <button 
            onClick={scrollToContact}
            className="btn-outline-gold"
          >
            Agende Sua Avaliação
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
