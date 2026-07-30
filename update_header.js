import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const newCSS = `
/* HEADER PADDING E TAMANHO OVERRIDES */
header.elementor-location-header .e-con,
header.elementor-location-header .elementor-container,
header.elementor-location-header .elementor-section {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    min-height: 70px !important;
}
header.elementor-location-header {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
/* Limita o tamanho do logo para nao estourar a altura do header */
header.elementor-location-header .elementor-widget-image img {
    max-height: 65px !important;
    width: auto !important;
    object-fit: contain !important;
}
`;

html = html.replace('</style>', newCSS + '</style>');
fs.writeFileSync('index.html', html);
console.log('Header padding reduced.');
