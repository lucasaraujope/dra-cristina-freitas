import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { MapPin, Phone, Clock } from 'lucide-react';

const MapSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const contactInfo = [
    { 
      icon: MapPin, 
      title: 'Endereço',
      content: 'R. Cap. Nascimento Filho, 369',
      subcontent: 'Jardim Vergueiro, Sorocaba/SP',
      link: null
    },
    { 
      icon: Phone, 
      title: 'Telefone',
      content: '(15) 99108-3831',
      subcontent: 'WhatsApp disponível',
      link: 'https://wa.me/5515991083831?text=Olá! Gostaria de agendar uma consulta.'
    },
    { 
      icon: Clock, 
      title: 'Horário',
      content: 'Seg - Sex: 8h às 18h',
      subcontent: '',
      link: null
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="localizacao"
      className="section-padding bg-background"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Localização
          </h2>
          <div className="divider-gold" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className={`space-y-4 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const CardWrapper = info.link ? 'a' : 'div';
              const cardProps = info.link ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <CardWrapper
                  key={info.title}
                  {...cardProps}
                  className={`glass-card p-5 flex items-start gap-4 ${info.link ? 'cursor-pointer hover:border-primary/50 transition-colors' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                    {info.subcontent && (
                      <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
          
          {/* Map */}
          <div className={`lg:col-span-2 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass-card p-2 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0659977374137!2d-47.46093672467469!3d-23.48882637885267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f9a1c1e1e1e1%3A0x1c1c1c1c1c1c1c1c!2sR.%20Cap.%20Nascimento%20Filho%2C%20369%20-%20Jardim%20Vergueiro%2C%20Sorocaba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem', minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
