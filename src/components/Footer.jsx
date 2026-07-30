import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#000B66] text-white pt-20 pb-8 px-6 lg:px-12 border-t-4 border-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Col */}
        <div className="flex flex-col gap-6">
          <img src="/NomeLogo-V1.png" alt="Guarani Telas Logo" className="w-64 max-w-full brightness-0 invert" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Especialistas em instalação de redes e construção de quadras com acabamento técnico e seguro em toda a região. Sua segurança é nossa maior prioridade.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Links Col */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold uppercase tracking-wide border-b-2 border-blue-500 pb-2 inline-block self-start">Serviços</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Redes de Proteção</a></li>
            <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Quadras Esportivas</a></li>
            <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Cercamentos e Alambrados</a></li>
            <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Instalação de Grama Sintética</a></li>
          </ul>
        </div>

        {/* Quick Links Col */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold uppercase tracking-wide border-b-2 border-blue-500 pb-2 inline-block self-start">Acesso Rápido</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Início</a></li>
            <li><a href="#video" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Garantia</a></li>
            <li><a href="#diferenciais" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-blue-500"></i> Por que nos escolher?</a></li>
          </ul>
        </div>

        {/* Contact Col */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-bold uppercase tracking-wide border-b-2 border-blue-500 pb-2 inline-block self-start">Contato</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt mt-1 text-blue-400 text-xl"></i>
              <span className="text-gray-300">Guabiruba, Santa Catarina<br />Atendemos toda a região</span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fas fa-phone text-blue-400 text-xl"></i>
              <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-bold">(47) 99999-9999</a>
            </li>
            <li className="flex items-center gap-4">
              <i className="fas fa-clock text-blue-400 text-xl"></i>
              <span className="text-gray-300">Seg - Sáb: 7am - 7pm</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Guarani Telas. Todos os direitos reservados.</p>
        <p className="flex items-center gap-2">
          Powered by <a href="https://nivix.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 font-bold">Nivix</a>
        </p>
      </div>
    </footer>
  );
}
