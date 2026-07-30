import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen pt-32 pb-40 lg:pb-48 px-6 lg:px-12 flex items-center bg-[#000B66] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#000B66] via-[#000B66]/90 to-transparent"></div>
      
      {/* Background Blobs for aesthetics */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0014B4] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 lg:col-span-7 xl:col-span-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20">
            <i className="fas fa-star text-white text-xs"></i>
            <span className="text-white font-bold tracking-wider uppercase text-[10px] md:text-xs">Telas de Proteção de Qualidade</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-[900px]">
            Redes de Proteção e Esportivas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white border-b-4 border-blue-400 pb-1">Guabiruba e região</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Garantimos a tranquilidade da sua família com a instalação técnica de redes de proteção de alta resistência para janelas, sacadas e quadras esportivas. Projetos completos do início ao fim com malhas exclusivas e acabamento 100% seguro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start mt-2">
            <a href="#" className="flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-600 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1">
              <i className="fab fa-whatsapp text-xl sm:text-2xl"></i> Orçamento via WhatsApp
            </a>
            <a href="#" className="flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#000B66] transition-all transform hover:-translate-y-1">
              Ver Nossos Serviços
            </a>
          </div>
        </div>

        {/* Floating Stats/Features Box */}
        <div className="hidden lg:flex flex-col gap-8 w-full max-w-lg ml-auto lg:col-span-5 xl:col-span-4 items-start">
          {/* Badge 1 */}
          <div className="w-[90%] ml-8 animate-float-1">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 xl:p-8 flex items-center gap-6 transform transition-transform hover:scale-105 w-full shadow-lg">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-shield-alt text-3xl text-white"></i>
              </div>
              <div>
                <h3 className="text-white text-2xl font-black mb-1">+580</h3>
                <p className="text-blue-200 font-medium">Projetos Finalizados</p>
              </div>
            </div>
          </div>
          
          {/* Badge 2 */}
          <div className="w-[105%] md:w-[115%] -ml-4 animate-float-2 z-10 relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 xl:p-8 flex items-center gap-6 transform transition-transform hover:scale-105 w-full shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-medal text-3xl text-white"></i>
              </div>
              <div>
                <h3 className="text-white text-2xl font-black mb-1">+10 Anos</h3>
                <p className="text-blue-200 font-medium">De Experiência no Mercado</p>
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="w-[85%] ml-16 animate-float-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 xl:p-8 flex items-center gap-6 transform transition-transform hover:scale-105 w-full shadow-lg">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <i className="fas fa-heart text-3xl text-white"></i>
              </div>
              <div>
                <h3 className="text-white text-2xl font-black mb-1">100%</h3>
                <p className="text-blue-200 font-medium">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
