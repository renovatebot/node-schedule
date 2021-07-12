const ns = require('node-schedule');

if (!ns.isEOL('v0.10.48')) {
  throw new Error('Expected v10 to be EOL');
}

console.log('CommonJS e2e successful');
