import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// List of English words present in the remaining Tigers Floors sections
const englishWords = [
    'Flooring', 'Florida', 'Showroom', 'Testimonials', 'FAQ', 'Waterproof', 
    'Installation', 'Vinyl', 'Laminate', 'homeowners', 'samples', 'rooms', 
    'living', 'spills', 'traffic', 'budget', 'Bedrooms', 'Offices', 'Dining',
    'Timeless', 'high-end', 'care', 'finished', 'looks', 'great', 'everyday',
    'households', 'pets', 'humidity', 'practical', 'modern', 'Built', 'Brought',
    'Directly', 'Choosing', 'Instead', 'relying', 'compare', 'textures', 'finishes',
    'lighting', 'walls', 'furniture', 'cabinets', 'overall', 'design', 'decide',
    'Premium', 'timeless', 'Measurements', 'Estimates', 'Questions', 'Answers',
    'Rights', 'Reserved'
];

function containsEnglish(text) {
    const lower = text.toLowerCase();
    return englishWords.some(w => lower.includes(w.toLowerCase()));
}

// Traverse all text nodes
function traverse(node) {
    if (node.type === 'text') {
        let t = node.data.trim();
        if (t.length > 2 && containsEnglish(t)) {
            // Mock with Guarani Text
            if (t.length < 20) {
                node.data = 'Segurança e Qualidade';
            } else if (t.length < 50) {
                node.data = 'Instalação técnica especializada para o seu projeto.';
            } else {
                node.data = 'Garantimos a melhor execução para sua proteção e lazer. Especialistas em instalação de redes e construção de quadras com acabamento técnico e seguro em toda a região.';
            }
        }
    } else if (node.children) {
        node.children.forEach(traverse);
    }
}

$('body').each((i, el) => {
    traverse(el);
});

// Also forcibly clear any images that we missed if they don't look like our banners
$('img').each((i, el) => {
    let src = $(el).attr('src') || '';
    if(src.includes('tigersfloors')) {
        $(el).attr('src', '/Banners-V1.png');
    }
});

// Re-force the footer copyright just in case
$('.th-footer, footer, .elementor-location-footer').find('.elementor-heading-title, .elementor-text-editor, span, p').each((i,el) => {
    let t = $(el).text();
    if (t.includes('All rights reserved') || t.includes('Reserved')) {
        $(el).text('© 2026 Guarani Telas. Todos os direitos reservados.');
    }
});

fs.writeFileSync('index.html', $.html());
console.log('Mocked remaining sections.');
