const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');
global.request = require('request');
global.axios = require('axios');
global.faker = require('faker');
global.dayjs = require('dayjs');
global.fs = require('fs');
global.chalk = require('chalk');

title('github.com/fastuptime - SMS Bomber v1.0');
console.log(`
Github'dan takip etmeyi unutmayin: github.com/fastuptime
`.yellow);

let telefon = rl.question('Telefon Numarasi Giriniz +90: ' .green);
if (telefon.length != 10) {
    console.log('Telefon Numarasi 10 Haneli Olmalidir. Ex: 5401234521'.red);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("Kac Adet SMS Gondermek Istiyorsunuz: ".green);
if(isNaN(miktar)) return console.log('Lutfen Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Gonderiliyor...'.rainbow);

fastBomber(telefon, miktar);
