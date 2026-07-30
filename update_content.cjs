const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// --- 1. LOGOS ---
// Replace the main SVG logo
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/]+\/Tigers-Flooring-Solutions-Logo-Wide-1\.svg/g, '/NomeLogo-V1.png');

// --- 2. HERO VIDEO & IMAGES ---
// Replace the hero video if any, or general mp4
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.mp4/g, '/video.MOV');

// Find project tile images and replace them in sequence
const bannerImages = ['/Banners-V1.png', '/Banners-V2.png', '/Banners-V3.png'];
let bannerIndex = 0;
// We look for typical Tigers Floors images in those blocks. The URL is usually something like https://tigersfloors.com/wp-content/uploads/2024/06/LVP-Flooring-1024x1024.jpg
html = html.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.(jpg|jpeg|png|webp)/g, (match) => {
    // Exclude the logo if it was matched (though we already did the SVG)
    if (match.includes('Logo')) return '/NomeLogo-V1.png';
    
    // Cycle through banners
    let replacement = bannerImages[bannerIndex % bannerImages.length];
    bannerIndex++;
    return replacement;
});

// Also replace the srcset to prevent it from loading original images via responsive sizes
html = html.replace(/srcset="[^"]+"/g, 'srcset=""');

// --- 3. COPY REPLACEMENTS ---

// Service 1
html = html.replace(/Luxury Vinyl Plank \(LVP\)/g, 'Redes de Proteção');
html = html.replace(/Waterproof, kid-proof, pet-proof, and budget-friendly\. LVP mimics real wood or stone but can be installed anywhere\./g, 'Instalação completa para prédios, sacadas e apartamentos. Redes de poliéster de alta resistência nas malhas 5 (animais) e 7 (crianças).');

// Service 2
html = html.replace(/Hardwood Flooring/g, 'Quadras Esportivas');
html = html.replace(/The timeless choice\. Hardwood floors add value to your home and last for generations\. Available in pre-finished or site-finished styles\./g, 'Projeto completo do início ao fim. Estrutura metálica, instalação técnica das redes e acabamento seguro e de alto padrão.');

// Service 3
html = html.replace(/Laminate Flooring/g, 'Grama Sintética');
html = html.replace(/The ultimate mimic\. Get the look of premium hardwood or stone without the price tag\. Highly durable and scratch-resistant\./g, 'Solução ideal para campos esportivos e paisagismo. Visual natural incrível, alta durabilidade e baixíssima manutenção para qualquer ambiente.');

// Misc Copy
html = html.replace(/Tiger Telas e Quadras Solutions/g, 'Guarani Telas');
html = html.replace(/Tiger Telas e Quadras/g, 'Guarani Telas');
html = html.replace(/View Recent Projects/g, 'Nossos Serviços');
html = html.replace(/High Quality Telas e Quadras Services/g, 'Sua segurança começa com uma escolha certa');

// The timeline or guarantee text
html = html.replace(/1-Year Installation Warranty/g, 'Garantia de Qualidade Guarani');
html = html.replace(/Licensed &amp; Insured/g, 'Equipe Altamente Treinada');
html = html.replace(/Top-Rated Installers/g, 'Materiais de 1ª Linha');

// Replace standard texts in the checklists if they exist
html = html.replace(/100% Waterproof/g, 'Segurança Extrema');
html = html.replace(/Scratch-Resistant/g, 'Alta Durabilidade');
html = html.replace(/Easy to Clean/g, 'Atendimento Rápido');

// Let's refine the CSS injection for colors in case it was missed
// We inject directly into the existing <style> tag we made
const extraCSS = `
/* Additional Overrides for Guarani */
.elementor-heading-title, h1, h2, h3, h4, h5, h6 {
    color: #FFFFFF !important;
}
.th-accent, .th-accent-underline, .th-eyebrow .elementor-heading-title {
    color: #FFD100 !important;
}
.th-eyebrow .elementor-heading-title::before, .th-eyebrow .elementor-heading-title::after {
    background: #FFD100 !important;
}
.elementor-icon-list-text {
    color: #FFFFFF !important;
}
.elementor-icon-list-icon i {
    color: #FFD100 !important;
}
.elementor-button {
    background-color: #FFD100 !important;
    color: #0014B4 !important;
    font-weight: bold !important;
}
.elementor-button:hover {
    background-color: #FFFFFF !important;
    color: #0014B4 !important;
}
.dark-blob-bg, body, .elementor-section {
    background-color: #000B66 !important; /* Force deep bic blue on sections */
}
`;
html = html.replace('</style>', extraCSS + '\n</style>');

fs.writeFileSync('index.html', html);
console.log('Update Complete');
