import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Award, Heart, Clock, Star } from 'lucide-react';
import draCristinaImage from '@/assets/dra-cristina-portrait.jpg';

const highlights = [
  { icon: Clock, text: '+35 anos de experiência' },
  { icon: Award, text: 'Especialista em Dentística' },
  { icon: Star, text: 'Odontologia Estética' },
  { icon: Heart, text: 'Atendimento Humanizado' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section 
      ref={sectionRef}
      id="sobre"
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className={`relative ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Google Rating Badge */}
              <div className="absolute -top-3 -right-3 z-20 glass-card px-4 py-2 shadow-gold flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">5.0</span>
                  <span className="text-[10px] text-muted-foreground leading-none">Google</span>
                </div>
              </div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-medium">
                <img 
                  src={draCristinaImage} 
                  alt="Dra. Cristina Freitas - Dentista em Sorocaba" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-light/20 rounded-full blur-xl" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-4 right-4 md:left-8 md:right-8 glass-card p-4 md:p-6">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-xs md:text-sm text-foreground font-medium">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className={`lg:pl-8 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Sobre a{' '}
              <span className="text-gradient-gold">Dra. Cristina Freitas</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Cirurgiã-dentista em Sorocaba, com mais de <strong className="text-foreground">35 anos de experiência</strong> na área. 
                Reconhecida pela atuação cuidadosa, olhar estético e foco em reabilitação oral com naturalidade e segurança.
              </p>
              
              <p>
                Especialista em <strong className="text-foreground">Dentística Restauradora</strong>, aperfeiçoada em 
                <strong className="text-foreground"> Odontologia Estética</strong> e no tratamento de ronco e apneia do sono.
              </p>
              
              <p>
                Atua com soluções funcionais como aparelho intraoral para melhora da qualidade de vida do paciente.
              </p>
              
              <p>
                Atendimento humanizado, com foco no bem-estar integral, autoestima e resultados naturais.
              </p>
            </div>
            
            {/* Signature element */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif text-xl text-primary italic">
                "Seu sorriso merece cuidado especial"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
