const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `            {[
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
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col h-full hover:border-[#FFD24A]/50 transition-colors">
                <PlaceholderAsset src={item.img} alt={item.title} title={item.title} className="w-full rounded-lg mb-6" />
                <h3 className="text-xl font-black uppercase mb-3 text-[#020B18] tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow leading-relaxed">{item.desc}</p>
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
              <div key={i} className="bg-gray-50 text-[#020B18] rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#FFD24A]/50 relative flex flex-col h-full mt-8 md:mt-0 hover:border-[#FFD24A] transition-colors">
                <div className="absolute -top-4 left-6 bg-[#00C853] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">BONUS</div>
                <PlaceholderAsset src={item.img} alt={item.title} title={item.title} className="w-full rounded-lg mb-6 mt-2" />
                <h3 className="text-xl font-black uppercase mb-3 text-[#00C853] tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow leading-relaxed">{item.desc}</p>
              </div>
            ))}`;

const replacement = `            {[
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
              <div key={i} className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col hover:border-[#FFD24A]/50 transition-colors">
                <PlaceholderAsset src={item.img} alt={item.title} title={item.title} className="w-full rounded-lg" />
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
              <div key={i} className="bg-gray-50 text-[#020B18] rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#FFD24A]/50 relative flex flex-col mt-8 md:mt-0 hover:border-[#FFD24A] transition-colors">
                <div className="absolute -top-4 left-6 bg-[#00C853] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">BONUS</div>
                <PlaceholderAsset src={item.img} alt={item.title} title={item.title} className="w-full rounded-lg mt-2" />
              </div>
            ))}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Replaced successfully');
} else {
  console.log('Target not found');
}
