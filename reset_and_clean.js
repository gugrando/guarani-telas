import fs from 'fs';
import * as cheerio from 'cheerio';

// 1. Read the pristine original HTML
const mdContent = fs.readFileSync('/home/gustavo/.gemini/antigravity-cli/brain/150845b0-5ced-4323-ab5c-a2e2e3aaad73/.system_generated/steps/5/content.md', 'utf8');
const htmlStartIndex = mdContent.indexOf('<!doctype html>');
let rawHtml = mdContent.substring(htmlStartIndex);

// Replace some core base things first
rawHtml = rawHtml.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.mp4/gi, '/video.MOV');
rawHtml = rawHtml.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.svg/gi, '/NomeLogo-V1.png');

const $ = cheerio.load(rawHtml);

// 2. Head and Title
$('title').text('Guarani Telas - Início');
$('meta[property="og:title"]').attr('content', 'Guarani Telas');
$('meta[property="og:description"]').attr('content', 'Especialistas em instalação completa de redes de proteção e quadras esportivas.');

// 3. Images mapping
$('img').removeAttr('srcset').removeAttr('sizes').removeAttr('loading');
const banners = ['/Banners-V1.png', '/Banners-V2.png', '/Banners-V3.png'];
let bIdx = 0;
$('img').each((i, el) => {
    let src = $(el).attr('src') || '';
    if(src.includes('NomeLogo-V1.png')) return; 
    if(src.includes('tigersfloors') || src.startsWith('/')) {
        $(el).attr('src', banners[bIdx % 3]);
        bIdx++;
    }
});

// 4. Texts
const textReplacements = {
    'Home': 'Início',
    'About Us': 'Sobre Nós',
    'Services': 'Serviços',
    'Contact Us': 'Contato',
    'High Quality Flooring Services': 'Garantia de Qualidade Guarani',
    '5-Star Rated': 'Execução Responsável',
    'Licensed & Insured': 'Equipe Especializada',
    '1-Year Installation Warranty': 'Garantia Guarani Telas',
    'Luxury Vinyl Plank (LVP)': 'Redes de Proteção',
    'Hardwood Flooring': 'Quadras Esportivas',
    'Laminate Flooring': 'Grama Sintética',
    '100% Waterproof': 'Resistência Total',
    'Scratch-Resistant': 'Alta Durabilidade',
    'Easy to Clean': 'Acabamento Seguro',
    'Kid & Pet Friendly': 'Proteção para Crianças e Animais',
    '352-329-6500': '(47) 3354-1338',
    '352-875-2735': '(47) 99610-5585'
};

const englishWordsToMock = ['Flooring', 'Florida', 'Showroom', 'Testimonials', 'FAQ', 'Waterproof', 'Installation', 'Vinyl', 'Laminate', 'homeowners', 'samples', 'rooms', 'living', 'spills', 'traffic', 'budget', 'Bedrooms', 'Offices', 'Dining', 'Timeless', 'high-end', 'care', 'finished', 'looks', 'great', 'everyday', 'households', 'pets', 'humidity', 'practical', 'modern', 'Built', 'Brought', 'Directly', 'Choosing', 'Instead', 'relying', 'compare', 'textures', 'finishes', 'lighting', 'walls', 'furniture', 'cabinets', 'overall', 'design', 'decide', 'Premium', 'timeless', 'Measurements', 'Estimates', 'Questions', 'Answers', 'Rights', 'Reserved'];

function containsEnglish(text) {
    const lower = text.toLowerCase();
    return englishWordsToMock.some(w => lower.includes(w.toLowerCase()));
}

function traverse(node) {
    if (node.type === 'text') {
        let t = node.data.trim();
        // Exact replacements
        let exactMatch = Object.keys(textReplacements).find(k => t === k);
        if(exactMatch) {
            node.data = textReplacements[exactMatch];
            return;
        }
        
        // Custom logic
        if(t.includes('Tiger Flooring Solutions helps homeowners')) {
            node.data = 'Mais segurança pra você e sua família! Especialistas em instalação completa de redes de proteção e quadras esportivas.';
            return;
        }

        // Mock remaining english
        if (t.length > 2 && containsEnglish(t)) {
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
$('body').each((i, el) => traverse(el));

// 5. Specific hero and footer replacements
$('h1.elementor-heading-title').html('Mais segurança pra você e <span class="th-accent-underline">sua família!</span>');
$('.th-eyebrow .elementor-heading-title').text('Sua segurança começa com uma escolha certa');
$('.elementor-section').first().find('.elementor-text-editor').first().html('<p>Especialistas em instalação completa de redes de proteção para crianças e animais, garantindo qualidade e proteção, prédios, sacadas, apartamentos. Também especialistas em construção e execução de quadras esportivas.</p>');
$('.elementor-section').first().find('.elementor-button-text').each((i, el) => {
    let t = $(el).text().trim().toLowerCase();
    if(t.includes('schedule') || t.includes('whatsapp')) $(el).text('Orçamento via WhatsApp');
    if(t.includes('view') || t.includes('servi')) $(el).text('Ver Nossos Serviços');
});
$('.th-hdr-right .elementor-button-text').text('ORÇAMENTOS: 📲(47)99610-5585');
$('.th-video-textcol h4, .th-video-textcol .elementor-heading-title').text('Guarani Telas');
$('.th-video-textcol p, .th-video-textcol .elementor-text-editor').text('Sua segurança começa com uma escolha certa');

// Remove links
$('a').attr('href', '#');

// 6. CAREFUL CSS INJECTION
// We will only override colors softly so we don't break Elementor's layout mechanics.
$('head').append(`
<style>
/* Fundo global e textos para o corpo do site */
body, html {
    background-color: #000B66 !important;
}

/* Deixa o cabecalho intacto em termos de estrutura, mas com fundo branco e diminui o padding de forma segura */
header.elementor-location-header {
    background-color: #FFFFFF !important;
}
/* Reduzir o padding gentilmente nas seções do header */
header.elementor-location-header .elementor-section {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}
header.elementor-location-header .elementor-container {
    min-height: 80px !important; 
}
/* O logo original tem mto espaco vazio em branco, deixamos ele preencher melhor */
header.elementor-location-header .elementor-widget-image img {
    height: 60px !important;
    width: auto !important;
    max-width: none !important;
}
/* Links do menu com as cores Guarani (azul bic natural e amarelo hover) sem quebrar o layout */
header.elementor-location-header .elementor-nav-menu a {
    color: #0014B4 !important;
    font-weight: 600 !important;
}
header.elementor-location-header .elementor-nav-menu a:hover {
    color: #FFD100 !important;
}
/* Botao do header mantido como no Elementor, apenas trocando cor de fundo e texto */
header.elementor-location-header .elementor-button {
    background-color: #FFD100 !important;
    color: #0014B4 !important;
    font-weight: bold !important;
}

/* O corpo principal do site (fora do header) precisa ter textos brancos */
main .elementor-heading-title, 
main .elementor-text-editor, 
main .elementor-icon-list-text, 
main h1, main h2, main h3, main p, main span,
footer .elementor-heading-title,
footer .elementor-text-editor,
footer p, footer span, footer a {
    color: #FFFFFF !important;
}

/* Os "accents" amarelos pelo site */
.th-eyebrow .elementor-heading-title, 
.th-accent, 
.th-accent-underline, 
.elementor-icon-list-icon i {
    color: #FFD100 !important;
}
.th-accent-underline::after {
    background: linear-gradient(to right, #FFD100 0%, #FFD100 40%, rgba(255,209,0,0) 100%) !important;
}

/* Botoes no corpo do site (Hero, LVP, etc) */
main .elementor-button {
    background-color: #FFD100 !important;
    color: #0014B4 !important;
    font-weight: bold !important;
    border: none !important;
}

/* Fundos azuis para limpar os tons marrons/pretos da TigersFlooring */
.elementor-section-wrap, .elementor-section, .elementor-column {
    background-color: transparent !important;
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
.th-project-tile {
    border-color: #0014B4 !important;
}
</style>
`);

fs.writeFileSync('index.html', $.html());
console.log('Reset complete.');
