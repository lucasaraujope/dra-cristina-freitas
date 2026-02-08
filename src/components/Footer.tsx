import { MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Dra. Cristina Freitas
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Dentista em Sorocaba com mais de 35 anos de experiência. 
              Especialista em Dentística Restauradora e Odontologia Estética.
            </p>
            <p className="text-xs text-primary-foreground/50">
              CRO-SP: XXXXX
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Tratamentos', 'Sobre', 'Apneia', 'Depoimentos', 'Localização'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  R. Cap. Nascimento Filho, 369<br />
                  Jardim Vergueiro, Sorocaba/SP
                </span>
              </li>
              <li>
                <a 
                  href="https://wa.me/5515991083831?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary-foreground/70 hover:text-primary">(15) 99108-3831</span>
                </a>
              </li>
            </ul>
            
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/crisfreitasodontologia/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} Dra. Cristina Freitas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Desenvolvido com ❤️ para sua saúde bucal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
