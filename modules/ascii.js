const chalk = require('chalk');

function printBanner() {
    console.clear();
    console.log(chalk.green(`
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║  ███████╗ █████╗ ███████╗████████╗    ███████╗███╗   ███╗███████╗   ║
║  ██╔════╝██╔══██╗██╔════╝╚══██╔══╝    ██╔════╝████╗ ████║██╔════╝   ║
║  █████╗  ███████║███████╗   ██║       ███████╗██╔████╔██║███████╗   ║
║  ██╔══╝  ██╔══██║╚════██║   ██║       ╚════██║██║╚██╔╝██║╚════██║   ║
║  ██║     ██║  ██║███████║   ██║       ███████║██║ ╚═╝ ██║███████║   ║
║  ╚═╝     ╚═╝  ╚═╝╚══════╝   ╚═╝       ╚══════╝╚═╝     ╚═╝╚══════╝   ║
║                                                                      ║
║                    ██████╗  ██████╗ ███╗   ███╗██████╗ ███████╗██████╗║
║                    ██╔══██╗██╔═══██╗████╗ ████║██╔══██╗██╔════╝██╔══██╗║
║                    ██████╔╝██║   ██║██╔████╔██║██████╔╝█████╗  ██████╔╝║
║                    ██╔══██╗██║   ██║██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗║
║                    ██████╔╝╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗██║  ██║║
║                    ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
    `));
    
    flickerText('                           [>] ADVANCED SMS BOMBER V5.0 [<]', 'cyan');
    console.log(chalk.yellow('                            [>] CODED BY FASTUPTIME [<]'));
    console.log(chalk.gray('                          [>] github.com/fastuptime [<]'));
    console.log('');
    
    simulateHacking();
    
    console.log(chalk.red.bold('    ⚠️  WARNING: UNAUTHORIZED USE IS STRICTLY PROHIBITED ⚠️'));
    console.log(chalk.yellow('    🔥 THIS IS A CYBER SECURITY RESEARCH TOOL - USE AT OWN RISK'));
    console.log('');
}

function simulateHacking() {
    const steps = [
        "Initializing kernel modules...",
        "Bypassing security protocols...",
        "Establishing encrypted tunnel...",
        "Loading payload vectors...",
        "Configuring attack parameters...",
        "Obfuscating network signature...",
        "Disabling trace routes...",
        "Activating anonymous proxies...",
        "System primed and ready..."
    ];
    
    steps.forEach(step => {
        const rand = Math.random();
        if (rand > 0.7) {
            console.log(chalk.green(`    [${getRandomHexCode()}] ${step}`));
        } else if (rand > 0.4) {
            console.log(chalk.cyan(`    [${getRandomHexCode()}] ${step}`));
        } else {
            console.log(chalk.blue(`    [${getRandomHexCode()}] ${step}`));
        }
    });
    
    console.log('');
    simulateProgressBar();
}

function getRandomHexCode() {
    return "0x" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function flickerText(text, color) {
    console.log(chalk[color].bold(text));
}

function simulateProgressBar() {
    console.log(chalk.green("    [SYSTEM] Loading cyber arsenal: ") + 
        chalk.white("[") + 
        chalk.green("████████████████████████████") + 
        chalk.white("] 100%"));
    console.log('');
}

function printHackerLine() {
    const chars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▪', '◢', '◣', '◤', '◥', '0', '1'];
    let line = '';
    for(let i = 0; i < 70; i++) {
        if (Math.random() > 0.8) {
            line += chalk.green(chars[Math.floor(Math.random() * chars.length)]);
        } else if (Math.random() > 0.5) {
            line += chalk.cyan(chars[Math.floor(Math.random() * chars.length)]);
        } else {
            line += chalk.white(chars[Math.floor(Math.random() * chars.length)]);
        }
    }
    console.log(line);
}

function printStats(phone, amount) {
    console.log(chalk.cyan('╔════════════════════════════════════════════════════════════════════╗'));
    console.log(chalk.cyan('║') + chalk.green.bold('                      OPERATION PARAMETERS                        ') + chalk.cyan('║'));
    console.log(chalk.cyan('╠════════════════════════════════════════════════════════════════════╣'));
    console.log(chalk.cyan('║') + chalk.white(`  TARGET IDENTIFIER: +90${phone}                                `) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.white(`  PAYLOAD QUANTITY: ${amount} DIGITAL WARHEADS                      `) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.green(`  PROTOCOL: SMS BOMBARDMENT                                     `) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.red.bold(`  STATUS: PRIMED AND READY FOR DEPLOYMENT                        `) + chalk.cyan('║'));
    console.log(chalk.cyan('╚════════════════════════════════════════════════════════════════════╝'));
    
    for (let i = 0; i < 3; i++) {
        printHackerLine();
    }
    console.log('');
}

module.exports = { printBanner, printHackerLine, printStats };
