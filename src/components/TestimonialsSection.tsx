import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Daniela Lupette',
    text: 'Minha filha fez resina nos dentes e clareamento com a doutora, e meu marido fez clareamento. Amamos o resultado! Moramos na Itália e, mesmo só passando por Sorocaba, fomos atendidos com muito cuidado e profissionalismo. A assistente Lilian também foi extremamente atenciosa.',
    rating: 5,
    initial: 'D',
    color: 'bg-amber-500',
  },
  {
    name: 'Karla Libois Franco',
    text: 'Ser atendida pela Dra. Cristina Freitas é sempre muito bom! Além de competente, o seu consultório é localizado em um lugar central da cidade, facilitando o acesso e sua equipe muito acolhedora! Super indico!',
    rating: 5,
    initial: 'K',
    color: 'bg-pink-500',
  },
  {
    name: 'Daniela SG',
    text: 'Dra. Cristina eu recomendo de olhos fechados! Profissional comprometida, competente, atenciosa e muito honesta. Além disso, um ser humano maravilhoso. Super indico.',
    rating: 5,
    initial: 'D',
    color: 'bg-purple-500',
  },
  {
    name: 'Carlos Ascari',
    text: 'Excelente profissional. Consultório bem equipado e consultas com valores justos. Sua assistente Lilian é muito atenciosa. Recomendo!!!!',
    rating: 5,
    initial: 'C',
    color: 'bg-orange-500',
  },
  {
    name: 'Maria Luiza Apostolo',
    text: 'Atendimento excelente, a Dra. Cristina tem técnicas modernas, é muito atenciosa e competente!! Transformar sorriso é com ela!!!',
    rating: 5,
    initial: 'M',
    color: 'bg-orange-400',
  },
  {
    name: 'Lilian Pimenta',
    text: 'A Dra. Cris Freitas é uma profissional incrível, seu atendimento é impecável. O ambiente é muito confortável e sua assistente é nota 1000.',
    rating: 5,
    initial: 'L',
    color: 'bg-blue-500',
  },
  {
    name: 'Regiane Leite',
    text: 'A Dra. Cristina é maravilhosa, super atenciosa! Minhas noites melhoraram muito após o uso da placa!',
    rating: 5,
    initial: 'R',
    color: 'bg-teal-500',
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="depoimentos"
      className="section-padding bg-background"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Highlighted badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-xl md:text-2xl font-bold text-primary">
              +60 avaliações positivas no Google
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            O Que Dizem Nossos{' '}
            <span className="text-gradient-gold">Pacientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de quem confiou na Dra. Cristina para transformar sorrisos e melhorar a qualidade de vida
          </p>
          <div className="divider-gold mt-6" />
        </div>
        
        {/* Testimonial Carousel */}
        <div className={`max-w-3xl mx-auto ${isInView ? 'animate-fade-in-up-delay-1' : 'opacity-0'}`}>
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-gold">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            
            {/* Card */}
            <div className="testimonial-card pt-10 text-center">
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full ${testimonials[currentIndex].color} flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg`}>
                {testimonials[currentIndex].initial}
              </div>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-serif italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              {/* Author */}
              <p className="text-primary font-semibold text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Via Google
              </p>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
