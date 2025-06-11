const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');
const { printBanner, printHackerLine, printStats } = require('./modules/ascii.js');
const { loadingAnimation, typeWriter } = require('./modules/animations.js');

global.request = require('request');
global.axios = require('axios');
global.faker = require('faker');
global.dayjs = require('dayjs');
global.fs = require('fs');
global.chalk = require('chalk');

async function main() {
    printBanner();
    
    await loadingAnimation('Initializing hacker modules', 2000);
    await loadingAnimation('Loading target acquisition systems', 1500);
    await loadingAnimation('Connecting to anonymous networks', 2000);
    
    console.log(chalk.red('\n[SYSTEM] All systems operational. Ready for mission.\n'));
    
    console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let telefon = rl.question(chalk.red.bold('[TARGET] ') + chalk.white('Enter phone number (+90): '));
    
    if (telefon.length != 10) {
        console.log(chalk.red('❌ [ERROR] Phone number must be 10 digits. Ex: 5401234521'));
        process.exit(1);
    }
    
    title('Target Acquired: ' + telefon);
    
    console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let miktar = rl.question(chalk.red.bold('[PAYLOAD] ') + chalk.white('How many SMS bombs to deploy: '));
    
    if(isNaN(miktar)) {
        console.log(chalk.red('❌ [ERROR] Please enter a valid number'));
        process.exit(1);
    }
    
    if (miktar.length == 0) {
        console.log(chalk.red('❌ [ERROR] Payload count required'));
        process.exit(1);
    }
    
    title(`Target: ${telefon} - Payload: ${miktar}`);
    
    printStats(telefon, miktar);
    
    console.log(chalk.red.bold('🚀 MISSION COUNTDOWN INITIATED...'));
    for(let i = 5; i > 0; i--) {
        console.log(chalk.red.bold(`[${i}] Launching in ${i} seconds...`));
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(chalk.green.bold('🔥 MISSION STARTED - SMS BOMBING IN PROGRESS 🔥\n'));
    
    await fastBomber(telefon, miktar);
}

main().catch(console.error);
