import fs from 'fs/promises';

await fs.writeFile('./esm/package.json', '{"type": "module"}');
