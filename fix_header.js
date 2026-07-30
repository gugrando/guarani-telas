import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// We'll append this CSS to fix the header colors and logo specifically
const css = `
<style>
/* CORREÇÃO DO HEADER: Fundo Branco e Textos Azuis */
header.elementor-location-header, 
header.elementor-location-header .elementor-section,
header.elementor-location-header .elementor-container,
header.elementor-location-header .e-con,
.elementor-sticky--active,
.elementor-sticky--effects {
    background-color: #FFFFFF !important;
}

header.elementor-location-header a, 
header.elementor-location-header .elementor-nav-menu a,
header.elementor-location-header .elementor-item,
header.elementor-location-header span {
    color: #0014B4 !important;
    font-weight: 700 !important;
}

header.elementor-location-header a:hover, 
header.elementor-location-header .elementor-item:hover {
    color: #FFD100 !important;
}

/* Devolver o tamanho normal para a Logo mas segurar o padding do Header */
header.elementor-location-header .elementor-widget-image img {
    max-height: 90px !important; /* Tamanho bem maior para o logo */
    height: auto !important;
    width: auto !important;
    object-fit: contain !important;
}

header.elementor-location-header .e-con,
header.elementor-location-header .elementor-container,
header.elementor-location-header .elementor-section {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    min-height: 90px !important;
    align-items: center !important;
}

/* O botao de orcamentos no header precisa manter suas cores */
header.elementor-location-header .elementor-button, 
header.elementor-location-header .elementor-button span,
header.elementor-location-header .elementor-button-text {
    background-color: #FFD100 !important;
    color: #0014B4 !important;
}
</style>
`;

html = html.replace('</head>', css + '</head>');
fs.writeFileSync('index.html', html);
console.log('Header styles injected.');
