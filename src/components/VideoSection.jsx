import React from 'react';

export default function VideoSection() {
  return (
    <section id="video" className="w-full bg-[#000B66] text-white py-24 px-6 lg:px-12 shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="!text-[#FFFFFF] uppercase font-bold tracking-widest text-sm mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#FFFFFF]"></span> Transparência e Compromisso <span className="w-8 h-[2px] bg-[#FFFFFF]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Resistência <span className="!text-blue-300">Comprovada</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Mais do que promessas, nós entregamos resultados visíveis. Nossas redes passam por rigorosos testes de impacto para garantir que o seu projeto — seja residencial ou esportivo — tenha a máxima durabilidade contra qualquer adversidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center bg-[#0014B4] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="w-full lg:w-1/2 bg-black/20 relative flex justify-center items-center py-12 lg:py-0 min-h-[400px] lg:min-h-[600px]">
            <video 
              src="/IMG_3278.MOV" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-[400px] lg:h-[550px] w-auto object-contain rounded-2xl shadow-2xl border-2 border-white/10"
            />
          </div>

          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#FFFFFF] shadow-inner shrink-0">
                <i className="fas fa-play text-base"></i>
              </div>
              <span className="text-white font-bold text-xl uppercase tracking-wider">Na Prática</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Garantia Guarani</h3>
            <p className="text-blue-200 font-medium text-lg md:text-xl mb-10">Cada detalhe pensado para sua paz de espírito</p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:text-[#000B66] transition-all shadow-lg shrink-0 transform group-hover:-translate-y-1">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1 group-hover:text-blue-200 transition-colors">Proteção Extrema</h4>
                  <p className="text-gray-300 text-base">Malhas que suportam altíssimo impacto e peso, testadas sob rigorosos padrões.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:text-[#000B66] transition-all shadow-lg shrink-0 transform group-hover:-translate-y-1">
                  <i className="fas fa-tools"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1 group-hover:text-blue-200 transition-colors">Acabamento Impecável</h4>
                  <p className="text-gray-300 text-base">Tensionamento exato e alinhamento estético, para segurança sem perder a beleza.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl text-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:text-[#000B66] transition-all shadow-lg shrink-0 transform group-hover:-translate-y-1">
                  <i className="fas fa-heart"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1 group-hover:text-blue-200 transition-colors">Sua Segurança em 1º Lugar</h4>
                  <p className="text-gray-300 text-base">Nossa maior prioridade é cuidar de quem você ama, entregando paz de espírito.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
