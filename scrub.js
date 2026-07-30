import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Scrub lingering words
html = html.replace(/Hardwood e sua família!/g, 'Quadras Esportivas');
html = html.replace(/Timeless, high-end warmth\. It requires more care than LVP or laminate, but for many homeowners the finished look is worth it\./g, 'Construção e execução de quadras esportivas, realizando o projeto do inicio ao fim incluindo, estrutura metalica, instalação completa das redes e acabamento tecnico seguro.');
html = html.replace(/Home - Tigers Flooring/g, 'Guarani Telas - Início');
html = html.replace(/Tigers Flooring Solutions/g, 'Guarani Telas');
html = html.replace(/Tigers Flooring/g, 'Guarani Telas');
html = html.replace(/Hardwood Flooring Installation/g, 'Instalação de Quadras Esportivas');
html = html.replace(/LVP Flooring Installation/g, 'Instalação de Redes de Proteção');
html = html.replace(/Laminate Flooring Installation/g, 'Instalação de Grama Sintética');

// Force colors aggressively on all tags
html = html.replace(/<head>/g, '<head><style>*{color:#FFFFFF!important;} h1,h2,h3,h4,h5,h6,a,.elementor-heading-title,.th-accent,.th-accent-underline{color:#FFD100!important;} .elementor-button{background:#FFD100!important;color:#0014B4!important;} body,html,.elementor-section,.elementor-section-wrap,.elementor-widget-wrap{background-color:transparent!important;} body{background:#000B66!important;}</style>');

fs.writeFileSync('index.html', html);
console.log('Scrubbed.');
