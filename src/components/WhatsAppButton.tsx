import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5515991083831?text=Olá! Gostaria de agendar uma consulta com a Dra. Cristina Freitas.', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </button>
  );
};

export default WhatsAppButton;
