import fs from 'fs';
import * as cheerio from 'cheerio';

const mdContent = fs.readFileSync('/home/gustavo/.gemini/antigravity-cli/brain/150845b0-5ced-4323-ab5c-a2e2e3aaad73/.system_generated/steps/5/content.md', 'utf8');
const htmlStartIndex = mdContent.indexOf('<!doctype html>');
let rawHtml = mdContent.substring(htmlStartIndex);

// 1. First, quickly patch any inline colors and specific asset URLs from the raw text BEFORE Cheerio parses it
rawHtml = rawHtml.replace(/#1A1410/gi, '#0014B4');
rawHtml = rawHtml.replace(/#0B0807/gi, '#000A44');
rawHtml = rawHtml.replace(/#171310/gi, '#000B66');
rawHtml = rawHtml.replace(/#e17128/gi, '#FFD100');
rawHtml = rawHtml.replace(/#F0883C/gi, '#FFD100');
rawHtml = rawHtml.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.mp4/gi, '/video.MOV');
rawHtml = rawHtml.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.svg/gi, '/NomeLogo-V1.png');

const $ = cheerio.load(rawHtml);

// 2. Head and Title
$('title').text('Guarani Telas - Início');
$('meta[property="og:title"]').attr('content', 'Guarani Telas');
$('meta[property="og:description"]').attr('content', 'Especialistas em instalação completa de redes de proteção e quadras esportivas.');

// 3. Remove all responsive images so our local ones work
$('img').removeAttr('srcset').removeAttr('sizes').removeAttr('loading');
// Replace all images that are not logos with banners
const banners = ['/Banners-V1.png', '/Banners-V2.png', '/Banners-V3.png'];
let bIdx = 0;
$('img').each((i, el) => {
    let src = $(el).attr('src') || '';
    if(src.includes('NomeLogo-V1.png')) return; // already replaced by regex
    if(src.includes('tigersfloors') || src.startsWith('/')) {
        $(el).attr('src', banners[bIdx % 3]);
        bIdx++;
    }
});

// 4. HEADER
// Find the nav menu and rename items
$('.elementor-nav-menu a').each((i, el) => {
    let t = $(el).text().trim().toLowerCase();
    if(t.includes('home')) $(el).text('Início');
    if(t.includes('about')) $(el).text('Sobre Nós');
    if(t.includes('services')) $(el).text('Serviços');
    if(t.includes('contact')) $(el).text('Contato');
});
// Right header CTA
$('.th-hdr-right .elementor-button-text').text('ORÇAMENTOS: 📲(47)99610-5585');

// 5. HERO
$('h1.elementor-heading-title').html('Mais segurança pra você e <span class="th-accent-underline">sua família!</span>');
$('.th-eyebrow .elementor-heading-title').text('Sua segurança começa com uma escolha certa');
$('.elementor-section').first().find('.elementor-text-editor').first().html('<p>Especialistas em instalação completa de redes de proteção para crianças e animais, garantindo qualidade e proteção, prédios, sacadas, apartamentos. Também especialistas em construção e execução de quadras esportivas.</p>');
$('.elementor-section').first().find('.elementor-button-text').each((i, el) => {
    let t = $(el).text().trim().toLowerCase();
    if(t.includes('schedule')) $(el).text('Orçamento via WhatsApp');
    if(t.includes('view')) $(el).text('Ver Nossos Serviços');
});
$('.th-video-textcol h4, .th-video-textcol .elementor-heading-title').text('Guarani Telas');
$('.th-video-textcol p, .th-video-textcol .elementor-text-editor').text('Sua segurança começa com uma escolha certa');

// 6. TRUST BAR & GENERAL TEXTS
// We'll iterate all headings and text editors to safely replace
$('.elementor-heading-title, .elementor-text-editor, .elementor-icon-list-text').each((i, el) => {
    let t = $(el).text().trim();
    if(t === 'High Quality Flooring Services') $(el).text('Garantia de Qualidade Guarani');
    if(t === '5-Star Rated') $(el).text('Execução Responsável');
    if(t === 'Licensed & Insured') $(el).text('Equipe Especializada');
    if(t === '1-Year Installation Warranty') $(el).text('Garantia Guarani Telas');
    
    // Services
    if(t === 'Luxury Vinyl Plank (LVP)') {
        $(el).text('Redes de Proteção');
        $(el).closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').find('.elementor-text-editor').text('Trabalho exclusivo com redes de poliester de alta resistencia, disponivel em preto ou branco, malha 5 para animais e malha 7 para crianças.');
    }
    if(t === 'Hardwood Flooring') {
        $(el).text('Quadras Esportivas');
        $(el).closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').find('.elementor-text-editor').text('Construção e execução de quadras esportivas, realizando o projeto do inicio ao fim incluindo, estrutura metalica, instalação completa das redes e acabamento tecnico seguro.');
    }
    if(t === 'Laminate Flooring') {
        $(el).text('Grama Sintética');
        $(el).closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').find('.elementor-text-editor').text('Unimos experiencia tecnica, materiais de qualidade e execução responsável, seja para proteger quem você ama, ou para construir espaços esportivos seguros e duraveis.');
    }
    
    // Checklists
    if(t === '100% Waterproof') $(el).text('Resistência Total');
    if(t === 'Scratch-Resistant') $(el).text('Alta Durabilidade');
    if(t === 'Easy to Clean') $(el).text('Acabamento Seguro');
    if(t === 'Kid & Pet Friendly') $(el).text('Proteção para Crianças e Animais');
    
    // Subtexts
    if(t.includes('Timeless, high-end warmth')) $(el).text('Construção e execução de quadras esportivas, realizando o projeto do inicio ao fim incluindo, estrutura metalica, instalação completa das redes e acabamento tecnico seguro.');
    
    // Footer description
    if(t.includes('Tiger Flooring Solutions helps homeowners')) $(el).text('Mais segurança pra você e sua família! Especialistas em instalação completa de redes de proteção e quadras esportivas.');
    
    // Phone numbers
    if(t.includes('352-329-6500')) $(el).text('(47) 3354-1338');
    if(t.includes('352-875-2735')) $(el).text('(47) 99610-5585');
});

// Remove external links
$('a').attr('href', '#');

// 7. INJECT GLOBAL CSS OVERRIDE (CRITICAL FOR COLORS)
// Elementor relies heavily on external CSS. We force colors via !important.
$('head').append(`
<style>
/* Force text colors */
body, .elementor-heading-title, .elementor-text-editor, .elementor-icon-list-text, h1, h2, h3, h4, h5, h6, p, span, a {
    color: #FFFFFF !important;
}
.th-eyebrow .elementor-heading-title, .th-accent, .th-accent-underline, .elementor-icon-list-icon i {
    color: #FFD100 !important;
}
.th-accent-underline::after {
    background: linear-gradient(to right, #FFD100 0%, #FFD100 40%, rgba(255,209,0,0) 100%) !important;
}
.elementor-button, .elementor-widget-button .elementor-button {
    background-color: #FFD100 !important;
    color: #0014B4 !important;
    font-weight: bold !important;
    border: none !important;
}
.elementor-button:hover, .elementor-widget-button .elementor-button:hover {
    background-color: #FFFFFF !important;
    color: #0014B4 !important;
}

/* Force backgrounds */
body, html, .elementor-section-wrap {
    background-color: #000B66 !important;
}
.dark-blob-bg {
    background-color: #000B66 !important;
    background-image:
        radial-gradient(ellipse 55% 45% at 12% 18%, rgba(0, 20, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 50% 40% at 88% 30%, rgba(255, 209, 0, 0.12), transparent 65%),
        radial-gradient(ellipse 70% 55% at 50% 95%, rgba(0, 20, 180, 0.20), transparent 60%) !important;
}
.dark-corner-bg {
    background-color: #000433 !important;
}
.th-lvp-grid {
    background-color: #000B66 !important;
}
.elementor-section, .elementor-column {
    background-color: transparent !important;
}

/* Project tiles */
.th-project-tile {
    border-color: #0014B4 !important;
}
</style>
`);

// 8. Re-link to local css if previously processed, but actually we can just let Elementor fetch original and override it.
// The external CSS will load from tigersfloors, but our !important <style> block at the END of <head> will crush their colors.
// Since we used rawHtml from content.md, it points to the remote Tigers CSS again. That's fine, our override handles it.

fs.writeFileSync('index.html', $.html());
console.log('Perfect clone applied.');
