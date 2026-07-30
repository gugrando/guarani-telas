import fs from 'fs';
import * as cheerio from 'cheerio';

let jsx = fs.readFileSync('src/App.jsx', 'utf8');

// Also process CSS overrides for backgrounds
let css = fs.readFileSync('src/overrides.css', 'utf8');

// We have mock-1 to mock-8
let mockIdx = 1;
function getMock() {
    let mock = `/mock-${mockIdx}.jpg`;
    mockIdx++;
    if (mockIdx > 8) mockIdx = 1;
    return mock;
}

// 1. Replace any remaining wp-content images in App.jsx (using simple string replace for URLs since it's JSX)
jsx = jsx.replace(/\/wp-content\/uploads\/[a-zA-Z0-9\/\-\_\.]+/g, () => getMock());
// Remove srcSet to force it to use the src
jsx = jsx.replace(/srcSet="[^"]*"/g, "");

fs.writeFileSync('src/App.jsx', jsx);

// 2. Add some random backgrounds to container elements that usually have images.
// Searching for elementor-element-xxxxxxx that are e-con-full or image widgets in the original Elementor structure
// Actually, let's just add a few generic CSS rules to overrides.css for the main sections.
// E.g., the section after Hero: 
const newBackgrounds = `
/* Mock Backgrounds */
.elementor-element-80b9f04, .elementor-element-ef241cd {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/mock-4.jpg') !important;
    background-size: cover !important;
}
.elementor-element-2531314, .elementor-element-d255d92 {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/mock-5.jpg') !important;
    background-size: cover !important;
}
.elementor-element-dbc5973 {
    background-image: linear-gradient(rgba(0,11,102,0.8), rgba(0,11,102,0.9)), url('/mock-6.jpg') !important;
    background-size: cover !important;
}
`;

if (!css.includes('/* Mock Backgrounds */')) {
    fs.writeFileSync('src/overrides.css', css + newBackgrounds);
}

console.log('Mocks applied.');
