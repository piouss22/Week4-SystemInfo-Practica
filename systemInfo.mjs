import os from 'node:os'; // or 'os'
import { bytesToSize } from './FreeMemory.mjs';

console.log('System Information:');
console.log(`Operating System: ${os.platform()} (${os.release()})`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);
