import React from 'react';

export default function Services() {
  return (
    <section id="servicos" className="w-full bg-gray-50 py-24 px-6 lg:px-12 tailwind-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="!text-[#0014B4] uppercase font-bold tracking-widest text-sm mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] !bg-[#0014B4]"></span> Nossas Especialidades <span className="w-8 h-[2px] !bg-[#0014B4]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold !text-[#000B66] mb-6 leading-tight">
            Soluções Completas em <span className="!text-[#0014B4]">Proteção e Lazer</span>
          </h2>
          <p className="text-lg !text-gray-600">
            Da segurança da sua família à infraestrutura do seu esporte. Oferecemos o que há de melhor no mercado com instalação técnica certificada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,11,102,0.3)] transition-all duration-300 group border-2 border-[#000B66]/10 flex flex-col h-full">
            <div className="h-60 relative overflow-hidden flex items-center justify-center bg-black">
              <div className="absolute inset-0 bg-[#000B66]/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img src="/rede-protecao.jpg" alt="Redes de Proteção" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="w-14 h-14 bg-[#0014B4] text-white rounded-xl flex items-center justify-center text-2xl mb-6 -mt-16 relative z-20 shadow-xl font-black border-4 border-white">
                01
              </div>
              <h3 className="text-2xl font-black !text-[#0014B4] mb-4">Redes de Proteção</h3>
              <p className="!text-gray-900 font-medium mb-8 flex-grow leading-relaxed">
                Instalação de redes de alta resistência para janelas, sacadas, piscinas e escadas. Malhas com tratamento UV que não ressecam e protegem quem você mais ama.
              </p>
              <ul className="space-y-3 mb-8 text-[15px] text-[#000B66] font-bold">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Apartamentos e Casas</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Proteção para Pets</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> 100% Certificado</li>
              </ul>
              <a href="#" className="mt-auto flex items-center justify-center gap-3 text-[#0014B4] font-black transition-colors uppercase tracking-widest text-sm bg-gray-50 py-4 px-4 rounded-xl border border-gray-200 group-hover:border-[#0014B4] group-hover:bg-[#0014B4] group-hover:text-white">
                Fazer Orçamento <i className="fas fa-arrow-right text-[#0014B4] group-hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,11,102,0.3)] transition-all duration-300 group border-2 border-[#000B66]/10 flex flex-col h-full transform lg:-translate-y-4">
            <div className="h-60 relative overflow-hidden flex items-center justify-center bg-black">
              <div className="absolute inset-0 bg-[#000B66]/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img src="/campo-esportivo.jpg" alt="Quadras Esportivas" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="w-14 h-14 bg-[#0014B4] text-white rounded-xl flex items-center justify-center text-2xl mb-6 -mt-16 relative z-20 shadow-xl font-black border-4 border-white">
                02
              </div>
              <h3 className="text-2xl font-black !text-[#0014B4] mb-4">Quadras Esportivas</h3>
              <p className="!text-gray-900 font-medium mb-8 flex-grow leading-relaxed">
                Construção e fechamento completo de quadras e campos. Instalação de grama sintética de padrão FIFA e redes de contenção superior e lateral.
              </p>
              <ul className="space-y-3 mb-8 text-[15px] text-[#000B66] font-bold">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Grama Sintética</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Fechamento Metálico</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Redes de Cobertura</li>
              </ul>
              <a href="#" className="mt-auto flex items-center justify-center gap-3 text-[#0014B4] font-black transition-colors uppercase tracking-widest text-sm bg-gray-50 py-4 px-4 rounded-xl border border-gray-200 group-hover:border-[#0014B4] group-hover:bg-[#0014B4] group-hover:text-white">
                Fazer Orçamento <i className="fas fa-arrow-right text-[#0014B4] group-hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,11,102,0.3)] transition-all duration-300 group border-2 border-[#000B66]/10 flex flex-col h-full">
            <div className="h-60 relative overflow-hidden flex items-center justify-center bg-black">
              <div className="absolute inset-0 bg-[#000B66]/30 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img src="/alambrado.jpg" alt="Cercamentos e Alambrados" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="w-14 h-14 bg-[#0014B4] text-white rounded-xl flex items-center justify-center text-2xl mb-6 -mt-16 relative z-20 shadow-xl font-black border-4 border-white">
                03
              </div>
              <h3 className="text-2xl font-black !text-[#0014B4] mb-4">Cercamentos e Alambrados</h3>
              <p className="!text-gray-900 font-medium mb-8 flex-grow leading-relaxed">
                Soluções robustas para delimitação de áreas comerciais, industriais e rurais. Telas de alambrado galvanizadas, gradil e mourões de concreto ou metal.
              </p>
              <ul className="space-y-3 mb-8 text-[15px] text-[#000B66] font-bold">
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Lotes e Condomínios</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Telas Galvanizadas</li>
                <li className="flex items-center gap-3"><i className="fas fa-check-circle text-[#0014B4] text-lg"></i> Gradil de Alta Estética</li>
              </ul>
              <a href="#" className="mt-auto flex items-center justify-center gap-3 text-[#0014B4] font-black transition-colors uppercase tracking-widest text-sm bg-gray-50 py-4 px-4 rounded-xl border border-gray-200 group-hover:border-[#0014B4] group-hover:bg-[#0014B4] group-hover:text-white">
                Fazer Orçamento <i className="fas fa-arrow-right text-[#0014B4] group-hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
