import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true); // scrolling down
      } else {
        setIsHidden(false); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Garantia', href: '#video' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center bg-white ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'shadow-md h-[70px]' : 'h-[90px]'}`}>
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className={`relative flex items-center justify-center overflow-hidden transition-all duration-300 ${isScrolled ? 'w-[180px] h-[70px]' : 'w-[220px] lg:w-[260px] h-[90px]'}`}>
            <img src="/NomeLogo-V1.png" alt="Guarani Telas" className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ${isScrolled ? 'h-[75px]' : 'h-[95px] lg:h-[110px]'} w-auto max-w-none`} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-[#000B66] font-bold text-base hover:text-[#0014B4] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#0014B4] text-white px-8 py-3.5 rounded-xl font-extrabold text-base hover:bg-[#000B66] transition-colors shadow-[0_8px_20px_-6px_rgba(0,20,180,0.5)] hover:shadow-xl transform hover:-translate-y-0.5 gap-2">
              <i className="fab fa-whatsapp text-lg"></i> Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#000B66] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="text-[#000B66] font-bold text-lg border-b border-gray-100 pb-3">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5547999999999" target="_blank" rel="noopener noreferrer" className="bg-[#0014B4] text-white px-6 py-4 rounded-lg font-bold text-center mt-2 shadow-md">
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
