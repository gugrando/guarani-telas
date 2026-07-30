import fs from 'fs';
import * as cheerio from 'cheerio';

const mdContent = fs.readFileSync('/home/gustavo/.gemini/antigravity-cli/brain/150845b0-5ced-4323-ab5c-a2e2e3aaad73/.system_generated/steps/5/content.md', 'utf8');
const htmlStartIndex = mdContent.indexOf('<!doctype html>');
let rawHtml = mdContent.substring(htmlStartIndex);

rawHtml = rawHtml.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.mp4/gi, '/video.MOV');
rawHtml = rawHtml.replace(/https:\/\/tigersfloors\.com\/wp-content\/uploads\/[0-9\/a-zA-Z-]+\.svg/gi, '/NomeLogo-V1.png');

const $ = cheerio.load(rawHtml);

const textReplacements = {
    'Home': 'Início', 'About Us': 'Sobre Nós', 'Services': 'Serviços', 'Contact Us': 'Contato',
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
    'Kid & Pet Friendly': 'Proteção para Crianças e Animais'
};

const englishWordsToMock = ['Flooring', 'Florida', 'Showroom', 'Testimonials', 'FAQ', 'Waterproof', 'Installation', 'Vinyl', 'Laminate', 'homeowners', 'samples', 'rooms', 'living', 'spills', 'traffic', 'budget', 'Bedrooms', 'Offices', 'Dining', 'Timeless', 'high-end', 'care', 'finished', 'looks', 'great', 'everyday', 'households', 'pets', 'humidity', 'practical', 'modern', 'Built', 'Brought', 'Directly', 'Choosing', 'Instead', 'relying', 'compare', 'textures', 'finishes', 'lighting', 'walls', 'furniture', 'cabinets', 'overall', 'design', 'decide', 'Premium', 'timeless', 'Measurements', 'Estimates', 'Questions', 'Answers', 'Rights', 'Reserved'];

function containsEnglish(text) { return englishWordsToMock.some(w => text.toLowerCase().includes(w.toLowerCase())); }

function traverse(node) {
    if (node.type === 'text') {
        let t = node.data.trim();
        let exactMatch = Object.keys(textReplacements).find(k => t === k);
        if(exactMatch) { node.data = textReplacements[exactMatch]; return; }
        if(t.includes('Tiger Flooring Solutions helps homeowners')) { node.data = 'Mais segurança pra você e sua família! Especialistas em instalação completa de redes de proteção e quadras esportivas.'; return; }
        if (t.length > 2 && containsEnglish(t)) {
            if (t.length < 20) node.data = 'Segurança e Qualidade';
            else if (t.length < 50) node.data = 'Instalação técnica especializada para o seu projeto.';
            else node.data = 'Garantimos a melhor execução para sua proteção e lazer. Especialistas em instalação de redes e construção de quadras com acabamento técnico e seguro em toda a região.';
        }
    } else if (node.children) node.children.forEach(traverse);
}
$('body').each((i, el) => traverse(el));

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
$('a').attr('href', '#');
$('img').removeAttr('srcset').removeAttr('sizes').removeAttr('loading');
const banners = ['/Banners-V1.png', '/Banners-V2.png', '/Banners-V3.png'];
let bIdx = 0;
$('img').each((i, el) => {
    let src = $(el).attr('src') || '';
    if(src.includes('NomeLogo-V1.png')) return; 
    if(src.includes('tigersfloors') || src.startsWith('/')) { $(el).attr('src', banners[bIdx % 3]); bIdx++; }
});

function htmlToJsx(html) {
    let jsx = html;
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); 
    jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
    jsx = jsx.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
    jsx = jsx.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
    jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
    jsx = jsx.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
    jsx = jsx.replace(/xlink:href=/g, 'xlinkHref=');
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
    jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
    jsx = jsx.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
    jsx = jsx.replace(/style="([^"]+)"/g, (m, styles) => {
        const obj = styles.split(';').filter(s => s.trim()).map(s => {
            const [k, v] = s.split(':');
            if(!k || !v) return '';
            const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelK}: '${v.trim().replace(/'/g, "\\'")}'`;
        }).filter(Boolean).join(', ');
        return `style={{${obj}}}`;
    });
    return jsx;
}

let $header = $('header.elementor-location-header');
let $cols = $header.find('.elementor-container > .elementor-column');
if ($cols.length >= 3) {
    let $logoCol = $($cols[0]); let $menuCol = $($cols[1]); let $btnCol = $($cols[2]);
    let $logoImg = $logoCol.find('img');
    $logoImg.attr('class', ($logoImg.attr('class') || '') + ' scale-[2.2] origin-left z-50 relative');
    let $container = $header.find('.elementor-container');
    $container.addClass('flex justify-between items-center w-full');
    $container.empty().append($logoCol).append($menuCol).append($btnCol);
}
const headerJsx = htmlToJsx($('<div>').append($header).html());
fs.writeFileSync('src/components/Header.jsx', `import React from 'react';\n\nexport default function Header() {\n  return (\n    <>\n      ${headerJsx}\n    </>\n  );\n}\n`);

let $main = $('div[data-elementor-type="wp-page"]');
let $footer = $('footer');

const mainJsx = htmlToJsx($('<div>').append($main).append($footer).html());

// Write overrides.css
const cssOverrides = `
header.elementor-location-header { background-color: #FFFFFF !important; }
header.elementor-location-header .elementor-nav-menu a { color: #0014B4 !important; font-weight: 600 !important; }
header.elementor-location-header .elementor-nav-menu a:hover { color: #FFD100 !important; }
header.elementor-location-header .elementor-button { background-color: #FFD100 !important; color: #0014B4 !important; font-weight: bold !important; border: none !important;}
.elementor-section-wrap, .elementor-section, .elementor-column { background-color: transparent !important; }
body, html { background-color: #000B66 !important; }
.dark-blob-bg { background-color: #000B66 !important; background-image: radial-gradient(ellipse 55% 45% at 12% 18%, rgba(0, 20, 180, 0.45), transparent 65%), radial-gradient(ellipse 50% 40% at 88% 30%, rgba(255, 209, 0, 0.12), transparent 65%), radial-gradient(ellipse 70% 55% at 50% 95%, rgba(0, 20, 180, 0.20), transparent 60%) !important; }
.elementor-section-wrap > section { background-color: #000B66 !important; }
.elementor-heading-title, .elementor-text-editor, p, span, h1, h2, h3, a { color: #FFFFFF !important; }
.th-eyebrow .elementor-heading-title, .th-accent, .th-accent-underline, .elementor-icon-list-icon i { color: #FFD100 !important; }
.elementor-button { background-color: #FFD100 !important; color: #0014B4 !important; font-weight: bold !important; }
`;
fs.writeFileSync('src/overrides.css', cssOverrides);

fs.writeFileSync('src/App.jsx', `import React from 'react';\nimport Header from './components/Header';\n\nexport default function App() {\n  return (\n    <div className="bg-[#000B66] min-h-screen">\n      <Header />\n      <main>\n        ${mainJsx}\n      </main>\n    </div>\n  );\n}\n`);

// Restore index.html to have the Elementor <head> but a React <body>
$('body').empty();
$('body').append('<div id="root"></div>');
$('body').append('<script type="module" src="/src/main.jsx"></script>');

fs.writeFileSync('index.html', $.html());
console.log('React Migration with Elementor Head Complete');
