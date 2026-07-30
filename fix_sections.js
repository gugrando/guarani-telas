import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// ----- 1. HEADER -----
$('title').text('Guarani Telas');
$('.elementor-nav-menu a').each((i, el) => {
    const text = $(el).text().trim().toLowerCase();
    if(text.includes('home')) $(el).text('Início');
    if(text.includes('about')) $(el).text('Sobre Nós');
    if(text.includes('services')) $(el).text('Serviços');
    if(text.includes('contact')) $(el).text('Contato');
});
$('.th-hdr-right .elementor-button-text').text('ORÇAMENTOS: 📲(47)99610-5585');

// ----- 2. HERO SECTION -----
// The main H1 heading is split by Elementor, let's find the H1.
$('h1.elementor-heading-title').html('Mais segurança pra você e <span class="th-accent-underline">sua família!</span>');
// Eyebrow
$('.th-eyebrow .elementor-heading-title').text('Sua segurança começa com uma escolha certa');
// Subtext: First text-editor in the first section
$('.elementor-section').first().find('.elementor-text-editor').first().html('<p>Especialistas em instalação completa de redes de proteção para crianças e animais, garantindo qualidade e proteção, prédios, sacadas, apartamentos. Também especialistas em construção e execução de quadras esportivas.</p>');
// Buttons
$('.elementor-section').first().find('.elementor-button-text').each((i, el) => {
    const t = $(el).text().trim().toLowerCase();
    if(t.includes('schedule') || t.includes('free')) $(el).text('Orçamentos WhatsApp');
    if(t.includes('view') || t.includes('projects')) $(el).text('Ver Serviços');
});
// Video Card Overlay
$('.th-video-textcol h4, .th-video-textcol .elementor-heading-title').text('Guarani Telas');
$('.th-video-textcol p, .th-video-textcol .elementor-text-editor').text('Sua segurança começa com uma escolha certa');

// ----- 3. TRUST BAR -----
// Let's replace any text containing "High Quality" or "5-Star"
$('*').each((i, el) => {
    // Only text nodes
    if(el.children && el.children.length > 0) {
        el.children.forEach(child => {
            if(child.type === 'text') {
                let text = child.data;
                if(text.includes('High Quality Flooring Services')) child.data = 'Garantia de Qualidade Guarani';
                if(text.includes('5-Star Rated')) child.data = 'Execução Responsável';
                if(text.includes('Licensed & Insured') || text.includes('Licensed &amp; Insured')) child.data = 'Equipe Especializada';
                if(text.includes('1-Year Installation Warranty')) child.data = 'Garantia Guarani Telas';
                if(text.includes('352-329-6500')) child.data = '(47) 3354-1338';
                if(text.includes('352-875-2735')) child.data = '(47) 99610-5585';
            }
        });
    }
});

// ----- 4. SERVICES SECTIONS -----
// Elementor uses sections for each service, but they have h2 tags usually.
$('h2.elementor-heading-title').each((i, el) => {
    const t = $(el).text().trim().toLowerCase();
    if(t.includes('luxury vinyl') || t.includes('lvp')) {
        $(el).text('Redes de Proteção');
        // Next text editor
        $(el).closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').find('.elementor-text-editor').text('Trabalho exclusivo com redes de poliester de alta resistencia, disponivel em preto ou branco, malha 5 para animais e malha 7 para crianças.');
    }
    if(t.includes('hardwood flooring')) {
        $(el).text('Quadras Esportivas');
        $(el).closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').find('.elementor-text-editor').text('Construção e execução de quadras esportivas, realizando o projeto do inicio ao fim incluindo, estrutura metalica, instalação completa das redes e acabamento tecnico seguro.');
    }
    if(t.includes('laminate flooring')) {
        $(el).text('Grama Sintética');
        $(el).closest('.elementor-widget-heading').nextAll('.elementor-widget-text-editor').find('.elementor-text-editor').text('Unimos experiencia tecnica, materiais de qualidade e execução responsável, seja para proteger quem você ama, ou para construir espaços esportivos seguros e duraveis.');
    }
});

// Features list in services
$('.elementor-icon-list-text').each((i, el) => {
    let text = $(el).text().trim();
    if(text === '100% Waterproof') $(el).text('Resistência Total');
    if(text === 'Scratch-Resistant') $(el).text('Alta Durabilidade');
    if(text === 'Easy to Clean') $(el).text('Acabamento Seguro');
    if(text === 'Kid & Pet Friendly') $(el).text('Proteção Total');
});

// ----- 5. FOOTER -----
$('.th-footer, footer, .elementor-location-footer').find('.elementor-heading-title').each((i,el) => {
    let t = $(el).text().trim().toLowerCase();
    if(t.includes('tiger')) $(el).text('Guarani Telas');
    if(t.includes('premium')) $(el).text('Garantia de Qualidade');
});
$('.th-footer, footer, .elementor-location-footer').find('.elementor-text-editor').each((i,el) => {
    let t = $(el).text().trim().toLowerCase();
    if(t.includes('helps homeowners')) $(el).text('Mais segurança pra você e sua família! Especialistas em instalação completa de redes de proteção e quadras esportivas.');
});

// Override all orange and brown colors strictly through style blocks
$('head').append(`
<style>
/* Forcing all Elementor text to be white since background is now dark blue */
body, .elementor-heading-title, .elementor-text-editor, .elementor-icon-list-text, h1, h2, h3, h4, h5, h6, p, span, a {
    color: #FFFFFF !important;
}
.th-eyebrow .elementor-heading-title, .th-accent, .th-accent-underline, .elementor-icon-list-icon i {
    color: #FFD100 !important;
}
.th-accent-underline::after {
    background: linear-gradient(to right, #FFD100 0%, #FFD100 40%, rgba(255,209,0,0) 100%) !important;
}
/* Reset button colors */
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
/* Dark sections background */
.elementor-section-wrap, .elementor-section, .elementor-column {
    background-color: transparent !important; /* Let the blob bg show */
}
body, html {
    background-color: #000B66 !important;
}
.dark-blob-bg {
    background-color: #000B66 !important;
    background-image:
        radial-gradient(ellipse 55% 45% at 12% 18%, rgba(0, 20, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 50% 40% at 88% 30%, rgba(255, 209, 0, 0.12), transparent 65%),
        radial-gradient(ellipse 70% 55% at 50% 95%, rgba(0, 20, 180, 0.20), transparent 60%) !important;
}
/* Trust bar corner bg */
.dark-corner-bg {
    background-color: #000433 !important;
}
/* Project tiles backgrounds and borders */
.th-project-tile {
    border-color: #0014B4 !important;
}
.elementor-icon-list-icon i {
    color: #FFD100 !important;
}
</style>
`);

// MOCK EXTERNAL LINKS
$('a').attr('href', '#');

fs.writeFileSync('index.html', $.html());
console.log('Sections updated successfully.');
