import { isEOL } from 'node-schedule';

if (!isEOL('v0.10.48')) {
  throw new Error('Expected v10 to be EOL');
}

console.log('ESM e2e successful');
