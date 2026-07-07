'use client';

import { useState, useEffect } from 'react';
import { Shield, Lock, Check, ChevronDown, Clock, ShieldCheck, Heart, MessageCircle, AlertTriangle, BookOpen, X } from 'lucide-react';

const CHECKOUT_LINK = "https://SEU-LINK-DE-CHECKOUT.com";

// Helper component for fallback images as requested
const PlaceholderAsset = ({ src, alt, title, className = "" }: { src: string, alt: string, title: string, className?: string }) => {
  const [error, setError] = useState(false);
  
  return (
    <div className={`flex items-center justify-center overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto object-contain transition-opacity duration-300 ${error ? 'opacity-0' : 'opacity-100'}`}
        onError={() => setError(true)}
      />
    </div>
  );
};

const CTAButton = ({ text, className = "", showLock = true }: { text: string, className?: string, showLock?: boolean }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a href="#oferta" onClick={handleClick} className={`flex items-center justify-center gap-3 bg-[#00C853] hover:bg-[#00A844] text-white py-4 px-8 rounded-xl font-black text-lg md:text-xl w-full transition-colors shadow-[0_0_20px_rgba(0,200,83,0.3)] ${className}`}>
      <span>{text}</span>
      {showLock && (
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
      )}
    </a>
  );
};

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showUpsellPopup, setShowUpsellPopup] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Scroll listener for floating CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    { q: "¿Cómo recibo el material?", a: "Después de la confirmación del pago, recibirás los datos de acceso en tu correo electrónico." },
    { q: "¿El contenido es completamente digital?", a: "Sí. Todo el material se entrega en formato digital y puede visualizarse desde celular, tablet o computadora." },
    { q: "¿Para qué edades es recomendado?", a: "El método puede adaptarse a diferentes etapas de la infancia y adolescencia. Los padres eligen los recursos más adecuados para la edad de sus hijos." },
    { q: "¿Cuánto tiempo tendré acceso?", a: "El acceso al material es inmediato y por tiempo indefinido, salvo que la oferta final establezca una condición diferente." },
    { q: "¿Cómo funciona la garantía?", a: "Tendrás 14 días para conocer el contenido y solicitar un reembolso si decides que no es adecuado para ti." },
    { q: "¿Necesito tener conocimientos bíblicos avanzados?", a: "No. El contenido fue creado para ser claro, práctico y sencillo de aplicar." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#020B18] selection:bg-[#FFD24A] selection:text-[#020B18] pb-24 md:pb-0 overflow-x-hidden">
      
      {/* 1. BARRA FIXA DE URGÊNCIA */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#D32F2F] text-[#FFD24A] py-1 px-4 text-center text-xs font-bold uppercase tracking-widest shadow-lg">
        Oferta por tiempo limitado: Esta oferta expira en
        <span className="text-white font-mono ml-2">{formatTime(timeLeft)}</span>
      </div>

      {/* 2. HERO SECTION */}
      <section className="bg-white text-[#020B18] pt-24 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.2] text-[#020B18]">
            Protege la mente de tus hijos <span className="inline-block bg-[#FFD24A] text-[#020B18] px-2 py-0.5 rounded-sm">del algoritmo del mundo</span> en solo 15 minutos al día
          </h1>
          
          <div className="w-full max-w-xl mx-auto relative my-4">
            {/* Glow effect behind mockup */}
            <div className="absolute inset-0 bg-[#FFD24A]/30 blur-[80px] rounded-full"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://i.postimg.cc/xTvmvnJx/image-removebg-preview.png" 
              alt="Mockup Protocolo Raíces Intocables" 
              className="w-full h-auto relative z-10 object-contain drop-shadow-2xl"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
            El método práctico para padres ocupados que quieren <strong className="text-[#020B18] font-bold">blindar el corazón y la mente</strong> de sus hijos sin peleas, conversaciones incómodas ni oraciones vacías.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-left max-w-2xl w-full">
            {[
              "Oraciones con enfoque y propósito",
              "Conversaciones que acercan, no alejan",
              "Recursos prácticos para el día a día",
              "Menos tiempo de pantalla, más conexión",
              "Acciones simples para empezar hoy"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FFD24A] flex items-center justify-center flex-shrink-0 text-[#020B18] font-bold text-xs mt-0.5">✓</div>
                <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 w-full max-w-md mx-auto">
            <CTAButton text="QUIERO MI ACCESO AHORA" />
            <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-[0.2em] font-bold">
               Acceso inmediato • 100% digital • Garantía de 14 días
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE IDENTIFICAÇÃO */}
      <section className="bg-[#07172B] border-y border-[#FFD24A]/10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12 uppercase tracking-tight text-white">
            Este material es <span className="text-[#FFD24A]">para ti</span> si...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {[
              { icon: Clock, text: "Estás cansado y sientes que no tienes tiempo para nada." },
              { icon: AlertTriangle, text: "Te preocupa el impacto de internet, redes sociales y malas influencias." },
              { icon: ShieldCheck, text: "Sientes que oras, pero no ves cambios reales en casa." },
              { icon: MessageCircle, text: "Las conversaciones terminan en peleas o en silencio." },
              { icon: Heart, text: "Quieres protegerlos, pero no sabes por dónde empezar." }
            ].map((item, i) => (
              <div key={i} className="bg-[#10233D] p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-[#FFD24A]/10 shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-[#FFD24A] flex items-center justify-center shadow-lg">
                  <item.icon className="w-6 h-6 text-[#020B18]" />
                </div>
                <p className="text-sm md:text-base text-[#D4D9E2]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DOS ENTREGÁVEIS */}
      <section className="bg-white text-[#020B18] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-[#020B18]">
              Esto es <span className="text-[#00C853]">todo</span> lo que vas a recibir
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Un paquete completo y práctico para transformar tu hogar desde hoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produtos Principais */}
            {[
              {
                title: "Mapa de Cobertura Espiritual",
                desc: "Una guía de intercesión con objetivos específicos para proteger la mente, las amistades, el consumo digital, la escuela y el corazón de tus hijos.",
                img: "https://i.postimg.cc/85X4VDBF/image.png"
              },
              {
                title: "Guiones de Diálogo Táctico",
                desc: "Guías prácticas para abordar temas difíciles con preguntas inteligentes que generan apertura, conexión y confianza.",
                img: "https://i.postimg.cc/15sdcR7g/image.png"
              },
              {
                title: "Ataque Visual — Imprimibles",
                desc: "Tarjetas, notas y afirmaciones bíblicas listas para imprimir y colocar en la mochila, el dormitorio o la lonchera de tus hijos.",
                img: "https://i.postimg.cc/PJjw95PB/image.png"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col hover:border-[#FFD24A]/50 transition-colors">
                <PlaceholderAsset src={item.img} alt={item.title} title={item.title} className="w-full rounded-lg " />
                
                
              </div>
            ))}

            {/* Bônus */}
            {[
              {
                title: "Guía de Supervivencia Digital",
                desc: "Una selección de contenidos, juegos, videos y recursos seguros con valores cristianos para los días más agotadores.",
                img: "https://i.postimg.cc/j2xjywWR/image.png"
              },
              {
                title: "Rutina de 15 Minutos",
                desc: "Una guía rápida para integrar el método en una rutina real, incluso cuando tienes poco tiempo.",
                img: "https://i.postimg.cc/TPjGQ2v5/image.png"
              },
              {
                title: "Cartilla de Recompensas Virtuosas",
                desc: "Un sistema imprimible de puntos y recompensas para reforzar el buen comportamiento, la responsabilidad y el carácter.",
                img: "https://i.postimg.cc/QtB2wjR6/image.png"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 text-[#020B18] rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#FFD24A]/50 relative flex flex-col mt-8 md:mt-0 hover:border-[#FFD24A] transition-colors">
                <div className="absolute -top-4 left-6 bg-[#00C853] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">BONUS</div>
                <PlaceholderAsset src={item.img} alt={item.title} title={item.title} className="w-full rounded-lg mt-2" />
                
                
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. PLANOS */}
      <section className="py-24 px-4 max-w-5xl mx-auto" id="oferta">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#020B18]">
            Elige tu plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Plan Basico ($5) */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#020B18] mb-2">Básico</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-[#020B18] tracking-tighter">$5</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#00C853] shrink-0" />
                <span className="text-gray-700 font-medium">Mapa de Cobertura Espiritual</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#00C853] shrink-0" />
                <span className="text-gray-700 font-medium">Todos los Bônus</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#00C853] shrink-0" />
                <span className="text-gray-700 font-medium">Garantía de 14 Días</span>
              </li>
            </ul>

            <button 
              onClick={() => setShowUpsellPopup(true)}
              className="flex items-center justify-center gap-3 bg-white border-2 border-[#020B18] hover:bg-gray-50 text-[#020B18] py-4 px-8 rounded-xl font-black text-lg w-full transition-colors uppercase tracking-wider"
            >
              Comenzar con Básico
            </button>
          </div>

          {/* Plan Premium ($12) */}
          <div className="bg-[#10233D] rounded-2xl border-2 border-[#FFD24A] p-8 flex flex-col h-full shadow-2xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 left-0 right-0 bg-[#FFD24A] text-[#020B18] text-center text-xs font-black uppercase py-1.5 tracking-widest">
              Más Popular
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2 mt-4">Premium</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-[#FFD24A] tracking-tighter">$12</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#FFD24A] shrink-0" />
                <span className="text-[#D4D9E2] font-medium">Mapa de Cobertura Espiritual</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#FFD24A] shrink-0" />
                <span className="text-[#D4D9E2] font-medium">Guiones de Diálogos Tácticos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#FFD24A] shrink-0" />
                <span className="text-[#D4D9E2] font-medium">Ataque Visual — Imprimibles</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#FFD24A] shrink-0" />
                <span className="text-[#D4D9E2] font-medium">Todos los Bônus</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#FFD24A] shrink-0" />
                <span className="text-[#D4D9E2] font-medium">Garantía de 14 Días</span>
              </li>
              <li className="flex items-start gap-3 bg-[#FFD24A]/10 p-3 rounded-lg border border-[#FFD24A]/20">
                <MessageCircle className="w-5 h-5 text-[#FFD24A] shrink-0" />
                <span className="text-white font-bold">Soporte 24h vía WhatsApp</span>
              </li>
            </ul>

            <a 
              href={CHECKOUT_LINK}
              className="flex items-center justify-center gap-3 bg-[#FFD24A] hover:bg-[#F2C542] text-[#020B18] py-4 px-8 rounded-xl font-black text-lg w-full transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(255,210,74,0.3)]"
            >
              Comenzar con Premium
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 8. GARANTIA */}
      <section className="bg-[#07172B] py-16 px-4 border-y border-[#FFD24A]/10 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left relative z-10">
          <div className="w-48 shrink-0">
             <PlaceholderAsset 
                src="assets/selo-garantia.webp" 
                alt="Selo de Garantia 14 Dias" 
                title="GARANTÍA"
                className="w-full aspect-square rounded-full border-4 border-[#FFD24A] shadow-[0_0_30px_rgba(255,210,74,0.2)] bg-[#10233D]" 
             />
          </div>
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#FFD24A]">
              Garantía Total
            </h2>
            <p className="text-lg text-[#D4D9E2] leading-relaxed">
              Si durante los primeros 14 días sientes que este material no es para tu familia, podrás solicitar el reembolso completo. <strong className="text-white font-bold">Sin preguntas y sin burocracia.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto bg-white">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-tight text-[#020B18]">
          Preguntas Frecuentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-start space-y-3 cursor-pointer hover:border-[#FFD24A] transition-colors shadow-sm"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-start gap-4">
                <h4 className="text-[#020B18] font-bold text-xs uppercase leading-tight">{faq.q}</h4>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[11px] leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. DEPOIMENTO EM DESTAQUE */}
      <section className="bg-white border-y border-gray-100 py-20 px-4 relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full relative">
            {/* PLACEHOLDER - A foto e depoimento reais devem ser inseridos aqui */}
            <div className="absolute -inset-4 bg-[#FFD24A]/10 blur-2xl rounded-full"></div>
            <PlaceholderAsset 
              src="assets/depoimento-familia.webp" 
              alt="Familia participante del protocolo" 
              title="FOTO FAMILIA REAL"
              className="w-full aspect-[4/3] rounded-2xl shadow-xl border border-gray-100 relative z-10" 
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#020B18]">
              Transformación
            </h2>
            <div className="bg-white border border-gray-100 border-l-4 border-l-[#FFD24A] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-r-2xl">
               <p className="text-lg italic text-gray-700 leading-relaxed">
                 &quot;Aplicamos este método en casa y en pocas semanas vimos una comunicación más abierta, menos discusiones y más intención en nuestros momentos juntos. El material nos ayudó a dejar de improvisar y comenzar a actuar con un propósito claro.&quot;
               </p>
               <span className="block text-[#020B18] font-bold mt-4 uppercase text-xs tracking-widest">— Familia participante</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PARA QUEM É */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#020B18] mb-8">
              ¿Para quién es <span className="text-[#00C853]">este método?</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Padres y madres ocupados que quieren lo mejor para sus hijos",
                "Familias que desean más conexión y menos discusiones",
                "Hogares que quieren proteger a sus hijos de influencias negativas",
                "Padres que oran, pero también quieren acciones prácticas",
                "Familias cristianas que desean vivir su fe de forma intencional",
                "Padres que quieren construir un legado espiritual sólido"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FFD24A] flex items-center justify-center shrink-0 mt-0.5 text-[#020B18] font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-base text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="bg-[#10233D] border-t border-[#FFD24A]/20 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] text-white">
            No dejes que el mundo sea el único que eduque la <span className="text-[#FFD24A]">mente de tus hijos</span>
          </h2>
          <p className="text-xl text-[#D4D9E2]">
            Empieza hoy a construir raíces profundas, firmes e intocables.
          </p>
          <div className="pt-4 max-w-lg mx-auto">
            <CTAButton text="QUIERO PROTEGER A MI FAMILIA" className="py-5" />
          </div>
        </div>
      </section>

      {/* 13. RODAPÉ */}
      <footer className="bg-[#07172B] border-t border-white/5 px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FFD24A] flex items-center justify-center text-[#020B18] font-black text-sm">R</div>
          <span className="text-sm font-bold tracking-tight uppercase text-white">Protocolo Raíces Intocables</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] text-[#D4D9E2] opacity-50 uppercase tracking-widest font-medium">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
        
        <p className="text-[10px] text-[#D4D9E2] opacity-50 uppercase tracking-widest font-medium">
          © 2026 Todos los derechos reservados
        </p>
      </footer>

      {/* FLOATING CTA MOBILE */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-[#07172B]/95 backdrop-blur border-t border-white/10 z-50 md:hidden transition-transform duration-300 ${
          showFloatingCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <CTAButton text="QUIERO MI ACCESO AHORA" className="py-3" showLock={false} />
      </div>

      {/* UPSELL POPUP */}
      {showUpsellPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowUpsellPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#FFD24A]/20 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8 text-[#FFD24A]" />
              </div>
              
              <h3 className="text-2xl font-black uppercase text-[#020B18] tracking-tight">
                ¡Espera! Tenemos algo especial para ti
              </h3>
              
              <p className="text-gray-700 font-medium">
                Queremos mucho que entres en el plan premium, así que hemos preparado este descuento exclusivo para ti.
              </p>
              
              <div className="bg-[#10233D] rounded-xl p-6 border-2 border-[#FFD24A] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD24A] text-[#020B18] font-black text-xs uppercase px-3 py-1 rounded-full whitespace-nowrap">
                  Descuento Exclusivo
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-white text-lg font-bold">Premium por solo</span>
                  <span className="text-[#FFD24A] text-4xl font-black">$7.50</span>
                </div>
                <p className="text-[#D4D9E2] text-xs">Acceso total a todos los recursos y soporte.</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href={CHECKOUT_LINK}
                  className="bg-[#00C853] hover:bg-[#00A844] text-white py-4 px-6 rounded-xl font-black text-lg w-full transition-colors uppercase tracking-wider"
                >
                  Comprar Premium por $7.50
                </a>
                
                <a 
                  href={CHECKOUT_LINK}
                  className="text-gray-500 hover:text-gray-800 font-bold uppercase text-xs tracking-wider py-2"
                >
                  No gracias, continuar con el plan de $5
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
