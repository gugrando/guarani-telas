const fs = require('fs');
let content = fs.readFileSync('/home/gustavo/.gemini/antigravity-cli/brain/150845b0-5ced-4323-ab5c-a2e2e3aaad73/.system_generated/steps/5/content.md', 'utf8');

// Find where HTML starts
const htmlStartIndex = content.indexOf('<!doctype html>');
if (htmlStartIndex !== -1) {
    let html = content.substring(htmlStartIndex);
    
    // String replacements for Guarani Telas
    html = html.replace(/Tigers Flooring/g, 'Guarani Telas');
    html = html.replace(/Tiger Flooring/g, 'Guarani Telas');
    html = html.replace(/Hardwood, Laminate & Vinyl/g, 'Redes de Proteção & Quadras Esportivas');
    html = html.replace(/Flooring/g, 'Telas e Quadras');
    html = html.replace(/Premium Flooring Solutions/g, 'Especialistas em Instalação');
    html = html.replace(/Schedule FREE At-Home Showroom/g, 'Orçamento via WhatsApp');
    html = html.replace(/352-329-6500/g, '47 3354-1338');
    html = html.replace(/352-875-2735/g, '47 99610-5585');
    
    // Inject Custom Colors
    const cssOverride = `
    <style>
        :root {
            --e-global-color-primary: #0014B4 !important;
            --e-global-color-secondary: #0014B4 !important;
            --e-global-color-text: #FFFFFF !important;
            --e-global-color-accent: #FFD100 !important;
        }
        /* Override Tigers Orange to Yellow */
        .th-accent-underline, .th-accent, .th-eyebrow .elementor-heading-title, .elementor-heading-title, a, h1, h2, h3, h4, h5, h6 {
            /* We will force color replacements via CSS rules if needed */
        }
        .th-eyebrow .elementor-heading-title::before, .th-eyebrow .elementor-heading-title::after { background: #FFD100 !important; }
        .th-accent-underline::after { background: linear-gradient(to right, #FFD100 0%, #FFD100 40%, rgba(255,209,0,0) 100%) !important; }
        .dark-blob-bg {
            background-color: #000B66 !important;
            background-image:
                radial-gradient(ellipse 55% 45% at 12% 18%, rgba(0, 51, 204, 0.45), transparent 65%),
                radial-gradient(ellipse 50% 40% at 88% 30%, rgba(255, 209, 0, 0.12), transparent 65%),
                radial-gradient(ellipse 70% 55% at 50% 95%, rgba(0, 51, 204, 0.10), transparent 60%),
                radial-gradient(ellipse 45% 40% at 78% 75%, rgba(0, 11, 102, 0.40), transparent 60%),
                radial-gradient(ellipse 55% 50% at 22% 78%, rgba(0, 11, 102, 0.25), transparent 60%) !important;
        }
        .elementor-button { background-color: #FFD100 !important; color: #000B66 !important; border: none !important; }
        
        body, html, .elementor-section-wrap { background-color: #05070A !important; }
    </style>
    `;
    
    html = html.replace('</head>', cssOverride + '</head>');
    
    // Convert absolute image src to use our images
    // For now let's just point all large images to Banners-V1, V2, etc
    // Or just let original tigers floors images load so the layout is EXACT, then we swap. 
    // The user said "não tem NADA igual ao site de referencia! Eu quero um CLONE".
    // If I swap images, it might break layout or look completely different.
    // Let's keep original images FIRST to prove it's a clone, but wait, they want Guarani logos.
    
    fs.writeFileSync('index.html', html);
    console.log("Clone OK");
}
