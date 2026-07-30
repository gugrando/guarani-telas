import React from 'react';

export default function Features() {
  const features = [
    { icon: 'fa-dollar-sign', title: 'Orçamento Gratuito' },
    { icon: 'fa-users', title: 'Equipe Qualificada' },
    { icon: 'fa-shield-alt', title: 'Alta Resistência' },
    { icon: 'fa-th', title: 'Malha 5 e 7 Exclusivas' },
    { icon: 'fa-hammer', title: 'Acabamento Técnico Seguro' },
    { icon: 'fa-hand-holding-usd', title: 'Preço Justo' },
    { icon: 'fa-thumbs-up', title: 'Satisfação Garantida' },
  ];

  return (
    <section id="diferenciais" className="w-full bg-[#000B66] py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="!text-white uppercase font-bold tracking-widest text-sm mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-white/50"></span> Sua segurança começa com uma escolha certa <span className="w-8 h-[2px] bg-white/50"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold !text-white leading-tight">
            Por que escolher a <span className="!text-blue-300">Guarani Telas?</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl py-4 px-6 flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-default">
              <div className="w-10 h-10 rounded-full bg-[#0014B4] flex items-center justify-center shrink-0">
                <i className={`fas ${feature.icon} text-white`}></i>
              </div>
              <span className="!text-white font-bold text-sm md:text-base uppercase tracking-wide">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
