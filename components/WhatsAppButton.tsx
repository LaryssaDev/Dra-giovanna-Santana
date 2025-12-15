import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  fullWidth?: boolean;
  variant?: 'primary' | 'outline' | 'sticky';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  subtext,
  className = "",
  fullWidth = false,
  variant = 'primary'
}) => {
  // Placeholder link - normally would use https://wa.me/number
  const handleClick = () => {
    console.log("WhatsApp Clicked");
  };

  const baseStyles = "transition-all duration-300 font-semibold flex flex-col items-center justify-center gap-1 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0";
  
  const variants = {
    primary: "bg-whatsapp hover:bg-green-500 text-white py-4 px-8 border border-transparent",
    outline: "bg-transparent border-2 border-whatsapp text-whatsapp hover:bg-green-50 py-3 px-6",
    sticky: "bg-whatsapp text-white py-3 px-4 rounded-full shadow-2xl flex-row gap-2"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  if (variant === 'sticky') {
    return (
      <button 
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none ${variants.sticky} ${className}`}
        aria-label="Agendar no WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="font-bold hidden md:inline">Agendar Agora</span>
      </button>
    );
  }

  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <button 
        onClick={handleClick}
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        <div className="flex items-center gap-2">
          <MessageCircle size={20} fill="currentColor" />
          <span className="text-lg uppercase tracking-wide">{text}</span>
        </div>
      </button>
      {subtext && (
        <span className="text-xs text-slate-500 mt-2 font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          {subtext}
        </span>
      )}
    </div>
  );
};