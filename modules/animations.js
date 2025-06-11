const chalk = require('chalk');

function loadingAnimation(text, duration = 3000) {
    return new Promise((resolve) => {
        const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
        let i = 0;
        
        const interval = setInterval(() => {
            process.stdout.write(`\r${chalk.cyan(frames[i % frames.length])} ${chalk.white(text)}`);
            i++;
        }, 100);
        
        setTimeout(() => {
            clearInterval(interval);
            process.stdout.write(`\r${chalk.green('✓')} ${chalk.white(text)} ${chalk.green('COMPLETE')}\n`);
            resolve();
        }, duration);
    });
}

function typeWriter(text, delay = 50) {
    return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
            process.stdout.write(chalk.green(text[i]));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                console.log('');
                resolve();
            }
        }, delay);
    });
}

function matrixRain() {
    const matrix = "01";
    let line = "";
    for(let i = 0; i < 80; i++) {
        line += matrix[Math.floor(Math.random() * matrix.length)];
    }
    console.log(chalk.green(line));
}

module.exports = { loadingAnimation, typeWriter, matrixRain };
