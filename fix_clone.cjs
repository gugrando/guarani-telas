const fs = require('fs');

// Start from the original fetched HTML
let content = fs.readFileSync('/home/gustavo/.gemini/antigravity-cli/brain/150845b0-5ced-4323-ab5c-a2e2e3aaad73/.system_generated/steps/5/content.md', 'utf8');

const htmlStartIndex = content.indexOf('<!doctype html>');
if (htmlStartIndex === -1) {
    console.error("HTML not found");
    process.exit(1);
}
let html = content.substring(htmlStartIndex);

// 1. GLOBAL COLOR REPLACEMENTS (Regex ignoring case)
// Orange to Yellow (#FFD100)
html = html.replace(/#e17128/gi, '#FFD100');
html = html.replace(/#f0883c/gi, '#FFD100');
html = html.replace(/rgba\(225, 113, 40/gi, 'rgba(255, 209, 0');
html = html.replace(/rgba\(225,113,40/gi, 'rgba(255,209,0');

// Darks to Bic Blue (#0014B4 and #000B66)
// Tigers Floors uses #1A1410 as the main dark blob bg
html = html.replace(/#1A1410/gi, '#0014B4');
// Another dark is #171310
html = html.replace(/#171310/gi, '#000B66');
// Another dark is #0B0807
html = html.replace(/#0B0807/gi, '#000A44');
// And #14110D
html = html.replace(/rgba\(20,17,13/gi, 'rgba(0, 11, 102');
html = html.replace(/rgba\(20, 17, 13/gi, 'rgba(0, 11, 102');

// Text color overrides
// Let's force all text in Elementor to be white
html = html.replace(/color:#2a2320/gi, 'color:#FFFFFF');
html = html.replace(/color: #2a2320/gi, 'color: #FFFFFF');

// 2. IMAGE AND VIDEO REPLACEMENTS
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.mp4/g, '/video.MOV');
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/]+\/Tigers-Flooring-Solutions-Logo-Wide-1\.svg/g, '/NomeLogo-V1.png');
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/]+\/Tigers-Flooring-Solutions-Logo-Stacked-1\.svg/g, '/NomeLogo-V1.png');

const bannerImages = ['/Banners-V1.png', '/Banners-V2.png', '/Banners-V3.png'];
let bannerIndex = 0;
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.(jpg|jpeg|png|webp)/gi, (match) => {
    if (match.includes('Logo') || match.includes('logo')) return '/NomeLogo-V1.png';
    let replacement = bannerImages[bannerIndex % bannerImages.length];
    bannerIndex++;
    return replacement;
});
// Remove responsive srcset to avoid original images
html = html.replace(/srcset="[^"]+"/g, 'srcset=""');

// 3. COPY (TEXT) REPLACEMENTS
const textReplacements = [
    [/Tigers Flooring/g, 'Guarani Telas'],
    [/Tiger Flooring Solutions/g, 'Guarani Telas'],
    [/Tiger Flooring/g, 'Guarani Telas'],
    
    // Header/Menu
    [/Home/g, 'Início'],
    [/Services/g, 'Serviços'],
    [/About Us/g, 'Sobre Nós'],
    [/Contact Us/g, 'Contato'],
    [/Schedule FREE At-Home Showroom/g, 'ORÇAMENTOS: 📲(47)99610-5585'],
    [/352-329-6500/g, '47 3354-1338'],
    [/352-875-2735/g, '47 99610-5585'],
    
    // Hero Section
    [/Premium Flooring Solutions/g, 'Garantia de Qualidade'],
    [/Hardwood, Laminate &amp; Vinyl/g, 'Mais segurança pra você'],
    [/Hardwood, Laminate & Vinyl/g, 'Mais segurança pra você'],
    [/Flooring/g, 'e sua família!'],
    [/helps homeowners choose and install beautiful new flooring\. We install hardwood, laminate, and luxury vinyl plank flooring\. We bring the flooring showroom to you\./g, 'Especialistas em instalação completa de redes de proteção para crianças e animais, garantindo qualidade e proteção, prédios, sacadas, apartamentos. Também especialistas em construção e execução de quadras esportivas.'],
    [/View Recent Projects/g, 'Ver Nossos Serviços'],
    
    // Trust Bar
    [/High Quality Flooring Services/g, 'Sua segurança começa com uma escolha certa'],
    [/5-Star Rated/g, 'Execução Responsável'],
    [/Licensed &amp; Insured/g, 'Equipe Especializada'],
    [/Licensed & Insured/g, 'Equipe Especializada'],
    [/1-Year Installation Warranty/g, 'Garantia Guarani Telas'],
    
    // Services Titles
    [/Luxury Vinyl Plank \(LVP\)/g, 'Redes de Proteção'],
    [/Hardwood Flooring/g, 'Quadras Esportivas'],
    [/Laminate Flooring/g, 'Grama Sintética'],
    
    // Services Text
    [/Waterproof, kid-proof, pet-proof, and budget-friendly\. LVP mimics real wood or stone but can be installed anywhere\./g, 'Trabalho exclusivo com redes de poliester de alta resistencia, disponivel em preto ou branco, malha 5 para animais e malha 7 para crianças.'],
    [/The timeless choice\. Hardwood floors add value to your home and last for generations\. Available in pre-finished or site-finished styles\./g, 'Construção e execução de quadras esportivas, realizando o projeto do inicio ao fim incluindo, estrutura metalica, instalação completa das redes e acabamento tecnico seguro.'],
    [/The ultimate mimic\. Get the look of premium hardwood or stone without the price tag\. Highly durable and scratch-resistant\./g, 'Unimos experiencia tecnica, materiais de qualidade e execução responsável, seja para proteger quem você ama, ou para construir espaços esportivos seguros e duraveis.'],
    
    // Checklists (just translating common items)
    [/100% Waterproof/g, 'Resistência Total'],
    [/Scratch-Resistant/g, 'Durabilidade'],
    [/Easy to Clean/g, 'Instalação Rápida'],
    [/Kid &amp; Pet Friendly/g, 'Proteção para Crianças e Animais'],
    [/Kid & Pet Friendly/g, 'Proteção para Crianças e Animais']
];

for (const [regex, replacement] of textReplacements) {
    html = html.replace(regex, replacement);
}

// Ensure the texts in the elements are visible against the new Bic Blue backgrounds
const finalCSS = `
<style>
/* Forcing all Elementor text to be visible against Blue/Yellow */
body, .elementor-widget-text-editor, .elementor-heading-title, .elementor-icon-list-text, p, span, h1, h2, h3, h4, h5, h6 {
    color: #FFFFFF !important;
}
.th-accent, .th-eyebrow .elementor-heading-title, .elementor-heading-title .th-accent-underline {
    color: #FFD100 !important;
}
/* Any buttons */
.elementor-button {
    background-color: #FFD100 !important;
    color: #0014B4 !important;
    font-weight: bold !important;
    border: none !important;
}
.elementor-button:hover {
    background-color: #FFFFFF !important;
    color: #0014B4 !important;
}
/* Ensure the backgrounds are really blue */
.elementor-section-wrap, .elementor-section, body {
    background-color: #000B66 !important;
}
.dark-blob-bg {
    background-color: #000B66 !important;
}
</style>
`;

html = html.replace('</head>', finalCSS + '</head>');

fs.writeFileSync('index.html', html);
console.log('Update Complete');
