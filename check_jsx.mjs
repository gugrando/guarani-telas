import fs from 'fs';
import { parse } from '@babel/parser';

const code = fs.readFileSync('src/App.jsx', 'utf-8');

try {
  parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  console.log('JSX is valid!');
} catch (e) {
  console.error('Error at line ' + e.loc.line + ' column ' + e.loc.column);
  console.error(e.message);
  
  const lines = code.split('\n');
  console.log('Line ' + e.loc.line + ': ' + lines[e.loc.line - 1]);
}
