import React, { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Clock, 
  Award, 
  CheckCircle2, 
  Calendar,
  Stethoscope,
  Smile,
  ChevronDown
} from 'lucide-react';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Gallery } from './components/Gallery';
import { ImageItem } from './types';

// Data Constants
const EXPERT_NAME = "Dra. Giovanna Santana";
const CRO = "CROSP 170892";
const LOCATION = "Cirurgiã-Dentista no ABC";

// Images
const HERO_IMAGE = "https://i.imgur.com/GQejIh9.png";
const ABOUT_IMAGE = "https://i.imgur.com/146y1y3.png"; // Using the extra photo for About section

const RESULT_IMAGES: ImageItem[] = [
  { src: "https://i.imgur.com/zJGhoMz.png", alt: "Antes e Depois 1", category: "Restauração" },
  { src: "https://i.imgur.com/W0xxFdW.png", alt: "Antes e Depois 2", category: "Estética" },
  { src: "https://i.imgur.com/XFeDr6b.png", alt: "Antes e Depois 3", category: "Sorriso" },
  { src: "https://i.imgur.com/rjQeSeV.png", alt: "Antes e Depois 4", category: "Harmonização" },
  { src: "https://i.imgur.com/7McxCad.png", alt: "Antes e Depois 5", category: "Clareamento" },
  { src: "https://i.imgur.com/NapBDcs.png", alt: "Antes e Depois 6", category: "Prótese" },
];

const FAQ_ITEMS = [
  {
    question: "A primeira consulta é realmente gratuita?",
    answer: "Sim! Acredito que o primeiro passo para um sorriso novo é uma conversa sem barreiras. Você não paga nada para vir ao consultório e realizar sua avaliação inicial."
  },
  {
    question: "Quais tratamentos você realiza?",
    answer: "Trabalho com Odontologia Estética (lentes, facetas), Clareamento, Harmonização Orofacial, Próteses e Clínica Geral. Tudo para devolver sua função e autoestima."
  },
  {
    question: "Onde é o atendimento?",
    answer: "Atendo na região do ABC Paulista. Ao entrar em contato pelo WhatsApp, minha equipe enviará a localização exata e as opções de horários disponíveis."
  },
  {
    question: "Tenho medo de dentista, como funciona?",
    answer: "Meu atendimento é focado em humanização. Respeitamos seu tempo e seus limites, com técnicas modernas para garantir o máximo conforto e segurança durante todo o processo."
  }
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-accent/30 text-slate-800">
      
      {/* SECTION 1: HERO */}
      <header className="relative w-full bg-white overflow-hidden pb-8 lg:pb-0 lg:min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 pt-4 lg:pt-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Image (Mobile Top / Desktop Right) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden z-10 h-32 bottom-0 top-auto w-full"></div>
               <div className="relative z-0 rounded-b-[3rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={HERO_IMAGE} 
                    alt={EXPERT_NAME} 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
               </div>
               
               {/* Floating Badge */}
               <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100 max-w-[180px]">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Registro Profissional</p>
                 <p className="text-sm font-bold text-primary">{CRO}</p>
               </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left z-20 mt-[-2rem] lg:mt-0">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 border border-slate-200">
                {LOCATION}
              </span>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
                Eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">{EXPERT_NAME}</span>.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transforme sua autoestima com um tratamento humanizado, seguro e de alta tecnologia. O sorriso que você merece começa com uma conversa.
              </p>
              
              <div className="flex flex-col items-center lg:items-start w-full max-w-md mx-auto lg:mx-0">
                <WhatsAppButton 
                  text="Agendar Primeira Consulta Gratuita" 
                  subtext="Resposta rápida • Sem compromisso"
                  fullWidth={true}
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* SECTION 2: QUEM SOU EU (Authority) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                <img src={ABOUT_IMAGE} alt="Dra. Giovanna no consultório" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Mais que dentes, eu cuido de pessoas.</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Olá! Minha missão é proporcionar uma odontologia leve e sem traumas. Sei que sentar na cadeira do dentista nem sempre é fácil, por isso, dedico meu tempo para ouvir você, entender seus medos e seus desejos antes de qualquer procedimento.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">Atendimento 100% personalizado e individual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">Explicação clara de cada etapa do tratamento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">Ambiente acolhedor e equipamentos modernos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RESULTADOS REAIS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Resultados que transformam vidas</h2>
            <p className="text-slate-600">Veja algumas transformações realizadas no consultório.</p>
          </div>
          
          <Gallery 
            images={RESULT_IMAGES} 
            title="" 
            disclaimer="*As imagens acima ilustram casos clínicos específicos. Os resultados podem variar de acordo com as particularidades de cada paciente." 
          />
        </div>
      </section>

      {/* SECTION 4: POR QUE CONFIAR */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Por que agendar comigo?</h2>
            <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<ShieldCheck size={32} />}
              title="Avaliação Honesta"
              desc="Sem empurrar tratamentos desnecessários. Transparência total."
            />
            <FeatureCard 
              icon={<HeartHandshake size={32} />}
              title="Mão Leve"
              desc="Técnicas cuidadosas para o máximo conforto durante o atendimento."
            />
            <FeatureCard 
              icon={<Award size={32} />}
              title="Materiais Premium"
              desc="Utilizo apenas os melhores materiais do mercado para durabilidade."
            />
            <FeatureCard 
              icon={<Clock size={32} />}
              title="Respeito ao Tempo"
              desc="Atendimento com hora marcada, sem longas esperas na recepção."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: MID CTA */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">Ainda com dúvida?</h3>
          <p className="text-slate-600 mb-8">Não deixe a dor ou a insegurança aumentarem. Converse comigo diretamente.</p>
          <WhatsAppButton 
            text="Falar com a Dra. Giovanna" 
            fullWidth={true}
          />
        </div>
      </section>

      {/* SECTION 6: COMO FUNCIONA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Sua 1ª consulta é simples</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

            <StepCard 
              number="1"
              icon={<MessageCircleIcon />}
              title="Toque no Botão"
              desc="Clique no botão do WhatsApp nesta página para iniciar a conversa."
            />
            <StepCard 
              number="2"
              icon={<Calendar size={28} />}
              title="Agendamento Fácil"
              desc="Minha equipe encontrará o melhor horário para sua rotina."
            />
            <StepCard 
              number="3"
              icon={<Stethoscope size={28} />}
              title="Avaliação Gratuita"
              desc="Venha ao consultório, tomamos um café e avaliamos seu sorriso sem custo."
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ (Substituted "Mais Provas") */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary">Dúvidas Frequentes</h2>
            <p className="text-slate-500 mt-2">Tire suas dúvidas antes de agendar</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 md:p-6">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Smile className="mx-auto mb-6 text-white/80" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Cuide de você hoje.
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            A primeira consulta é gratuita, sem compromisso e pode mudar a forma como você sorri para o mundo. Estou te esperando.
          </p>
          <div className="max-w-md mx-auto">
            <WhatsAppButton 
              text="QUERO AGENDAR AGORA" 
              subtext="Vagas limitadas para esta semana"
              fullWidth={true}
              className="animate-pulse hover:animate-none"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-slate-950 text-slate-500 text-sm border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-slate-300 text-lg mb-2">{EXPERT_NAME}</p>
          <p className="mb-1">{LOCATION}</p>
          <p className="mb-6">{CRO}</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/dra.giovannacossta/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <InstagramIcon />
              Instagram
            </a>
          </div>

          <p>© {new Date().getFullYear()} Dra. Giovanna Santana. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Sticky Mobile Button */}
      {scrolled && <WhatsAppButton variant="sticky" />}
    </div>
  );
};

// Helper Components for Cleaner Main File

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-primary text-lg group-hover:text-accent transition-colors pr-4">{question}</span>
        <div className={`transform transition-transform duration-300 text-slate-400 group-hover:text-accent ${isOpen ? 'rotate-180' : ''}`}>
           <ChevronDown size={20} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
    <div className="text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StepCard: React.FC<{ number: string, icon: React.ReactNode, title: string, desc: string }> = ({ number, icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 flex flex-col items-center text-center">
    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold absolute -top-5 shadow-lg border-4 border-slate-50">
      {number}
    </div>
    <div className="text-green-600 mb-4 mt-2 p-3 bg-green-50 rounded-full">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-primary mb-2">{title}</h4>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

// Icon Wrappers
const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default App;