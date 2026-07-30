import fs from 'fs';
import * as cheerio from 'cheerio';
import axios from 'axios';
import path from 'path';

(async () => {
    console.log('Reading content.md...');
    const mdContent = fs.readFileSync('/home/gustavo/.gemini/antigravity-cli/brain/150845b0-5ced-4323-ab5c-a2e2e3aaad73/.system_generated/steps/5/content.md', 'utf8');
    const htmlStartIndex = mdContent.indexOf('<!doctype html>');
    if (htmlStartIndex === -1) {
        console.error("HTML not found in content.md");
        process.exit(1);
    }
    const rawHtml = mdContent.substring(htmlStartIndex);
    const $ = cheerio.load(rawHtml);

    // 1. Download and process CSS
    console.log('Downloading and patching CSS...');
    fs.mkdirSync('public/css', { recursive: true });
    
    const cssLinks = $('link[rel="stylesheet"]');
    for (let i = 0; i < cssLinks.length; i++) {
        const el = cssLinks[i];
        let href = $(el).attr('href');
        if (href && href.startsWith('http')) {
            try {
                const response = await axios.get(href, { responseType: 'text' });
                let css = response.data;
                
                // Replace colors
                css = css.replace(/#e17128/gi, '#FFD100'); // Tigers Orange to Yellow
                css = css.replace(/#1A1410/gi, '#0014B4'); // Dark blob to Bic Blue
                css = css.replace(/#171310/gi, '#000B66'); // Another dark to Dark Bic Blue
                css = css.replace(/#0B0807/gi, '#000A44'); // Very dark to Very Dark Bic Blue
                // We'll leave #2a2320 alone in external CSS just in case, but replace in our global override
                css = css.replace(/rgba\(225,\s*113,\s*40/gi, 'rgba(255, 209, 0');
                css = css.replace(/rgba\(20,\s*17,\s*13/gi, 'rgba(0, 11, 102');
                
                const fileName = `style_${i}.css`;
                fs.writeFileSync(`public/css/${fileName}`, css);
                $(el).attr('href', `/css/${fileName}`);
            } catch (e) {
                console.error(`Failed to fetch CSS: ${href}`, e.message);
                $(el).remove(); // Remove it if we can't fetch it, maybe it's unnecessary
            }
        }
    }

    // Process inline styles
    $('style').each((i, el) => {
        let css = $(el).html();
        if (css) {
            css = css.replace(/#e17128/gi, '#FFD100');
            css = css.replace(/#1A1410/gi, '#0014B4');
            css = css.replace(/#171310/gi, '#000B66');
            css = css.replace(/#0B0807/gi, '#000A44');
            css = css.replace(/rgba\(225,\s*113,\s*40/gi, 'rgba(255, 209, 0');
            css = css.replace(/rgba\(20,\s*17,\s*13/gi, 'rgba(0, 11, 102');
            $(el).html(css);
        }
    });

    // 2. Process Images and Videos
    console.log('Replacing images and videos...');
    const banners = ['/Banners-V1.png', '/Banners-V2.png', '/Banners-V3.png'];
    let bannerIdx = 0;

    $('img').each((i, el) => {
        const src = $(el).attr('src') || '';
        $(el).removeAttr('srcset');
        $(el).removeAttr('sizes');
        $(el).removeAttr('loading');
        
        if (src.toLowerCase().includes('logo')) {
            $(el).attr('src', '/NomeLogo-V1.png');
        } else if (src.includes('tigersfloors') || src.startsWith('/')) {
            $(el).attr('src', banners[bannerIdx % banners.length]);
            bannerIdx++;
        }
    });

    $('video').each((i, el) => {
        $(el).attr('src', '/video.MOV');
        $(el).find('source').each((j, sel) => {
            $(sel).attr('src', '/video.MOV');
        });
    });

    // Also replace elements that might have background images in style
    $('[style]').each((i, el) => {
        let style = $(el).attr('style');
        if (style && style.includes('url(')) {
            // Replace any URL in style with our banner to mock it
            style = style.replace(/url\([^)]+\)/gi, `url('${banners[0]}')`);
            $(el).attr('style', style);
        }
    });

    // 3. Process Texts using a text node traversal
    console.log('Replacing text nodes...');
    function replaceTextInNode(node) {
        if (node.type === 'text') {
            let data = node.data;
            // Precise replacements based on user prompt
            data = data.replace(/Tiger Flooring Solutions helps homeowners choose and install beautiful new flooring\. We install hardwood, laminate, and luxury vinyl plank flooring\. We bring the flooring showroom to you\./gi, 'Especialistas em instalação completa de redes de proteção para crianças e animais, garantindo qualidade e proteção, prédios, sacadas, apartamentos. Também especialistas em construção e execução de quadras esportivas.');
            
            data = data.replace(/Waterproof, kid-proof, pet-proof, and budget-friendly\. LVP mimics real wood or stone but can be installed anywhere\./gi, 'Trabalho exclusivo com redes de poliester de alta resistencia, disponivel em preto ou branco, malha 5 para animais e malha 7 para crianças.');
            
            data = data.replace(/The timeless choice\. Hardwood floors add value to your home and last for generations\. Available in pre-finished or site-finished styles\./gi, 'Construção e execução de quadras esportivas, realizando o projeto do inicio ao fim incluindo, estrutura metalica, instalação completa das redes e acabamento tecnico seguro.');
            
            data = data.replace(/The ultimate mimic\. Get the look of premium hardwood or stone without the price tag\. Highly durable and scratch-resistant\./gi, 'Unimos experiencia tecnica, materiais de qualidade e execução responsável, seja para proteger quem você ama, ou para construir espaços esportivos seguros e duraveis.');

            data = data.replace(/Tigers Flooring/g, 'Guarani Telas');
            data = data.replace(/Tiger Flooring Solutions/g, 'Guarani Telas');
            data = data.replace(/Tiger Flooring/g, 'Guarani Telas');
            
            data = data.replace(/Hardwood, Laminate & Vinyl Flooring/gi, 'Redes de Proteção, Quadras Esportivas e Grama Sintética');
            data = data.replace(/Hardwood, Laminate & Vinyl/gi, 'Mais segurança pra você');
            data = data.replace(/Flooring/g, 'e sua família!');
            
            data = data.replace(/Premium Flooring Solutions/gi, 'Garantia de Qualidade Guarani Telas');
            data = data.replace(/Schedule FREE At-Home Showroom/gi, 'ORÇAMENTOS: 📲(47)99610-5585');
            data = data.replace(/View Recent Projects/gi, 'Ver Nossos Serviços');
            data = data.replace(/High Quality Flooring Services/gi, 'Sua segurança começa com uma escolha certa');
            
            data = data.replace(/1-Year Installation Warranty/gi, 'Redes de Proteção');
            data = data.replace(/Licensed & Insured/gi, 'Quadras Esportivas');
            data = data.replace(/5-Star Rated/gi, 'Grama Sintética');
            
            data = data.replace(/Luxury Vinyl Plank \(LVP\)/gi, 'Redes de Proteção');
            data = data.replace(/Hardwood Flooring/gi, 'Quadras Esportivas');
            data = data.replace(/Laminate Flooring/gi, 'Grama Sintética');
            
            data = data.replace(/100% Waterproof/gi, 'Resistência Total');
            data = data.replace(/Scratch-Resistant/gi, 'Durabilidade');
            data = data.replace(/Easy to Clean/gi, 'Acabamento Seguro');
            data = data.replace(/Kid & Pet Friendly/gi, 'Malha 5 e Malha 7');
            
            data = data.replace(/352-329-6500/g, '47 3354-1338');
            data = data.replace(/352-875-2735/g, '47 99610-5585');
            
            data = data.replace(/Home/g, 'Início');
            data = data.replace(/About Us/g, 'Sobre Nós');
            data = data.replace(/Services/g, 'Serviços');
            data = data.replace(/Contact Us/g, 'Contato');
            
            node.data = data;
        } else if (node.children) {
            node.children.forEach(replaceTextInNode);
        }
    }

    $('body').each((i, el) => {
        replaceTextInNode(el);
    });

    // 4. Muck with links
    $('a').each((i, el) => {
        $(el).attr('href', '#');
    });

    // Inject strong CSS override for texts just in case
    $('head').append(`
        <style>
            /* Force Elementor texts to be white */
            body, .elementor-heading-title, .elementor-text-editor, .elementor-icon-list-text, p, span, a, h1, h2, h3, h4, h5, h6 {
                color: #FFFFFF !important;
            }
            .th-eyebrow .elementor-heading-title, .th-accent, .th-accent-underline, .elementor-icon-list-icon i {
                color: #FFD100 !important;
            }
            .th-accent-underline::after {
                background: linear-gradient(to right, #FFD100 0%, #FFD100 40%, rgba(255,209,0,0) 100%) !important;
            }
            /* Reset button colors */
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
            /* Dark sections background */
            .elementor-section-wrap, .elementor-section {
                background-color: #000B66 !important;
            }
            .dark-blob-bg {
                background-color: #000B66 !important;
            }
        </style>
    `);

    fs.writeFileSync('index.html', $.html());
    console.log('Update Complete with Cheerio and Axios');
})();
