import fs from 'fs/promises';

const json = await fs.readFile('./schedule.json', { encoding: 'utf8' });

await fs.writeFile('./src/schedule.js', `export default ${json}`);
