const express = require('express');
const app = express();
// const currencies = require('./json/currency.json'); // Use require to read JSON file

const currencies = {
    "ADA": {
    "code": "ADA",
    "value": 2.614494909
    },
    "AED": {
    "code": "AED",
    "value": 3.671910657
    },
    "AFN": {
    "code": "AFN",
    "value": 69.4706987462
    },
    "ALL": {
    "code": "ALL",
    "value": 93.1486896061
    },
    "AMD": {
    "code": "AMD",
    "value": 402.1349571957
    },
    "ANG": {
    "code": "ANG",
    "value": 1.7861301999
    },
    "AOA": {
    "code": "AOA",
    "value": 828.2562222045
    },
    "ARB": {
    "code": "ARB",
    "value": 0.9912871491
    },
    "ARS": {
    "code": "ARS",
    "value": 360.0194196398
    },
    "AUD": {
    "code": "AUD",
    "value": 1.5109702642
    },
    "AVAX": {
    "code": "AVAX",
    "value": 0.0473345031
    },
    "AWG": {
    "code": "AWG",
    "value": 1.79
    },
    "AZN": {
    "code": "AZN",
    "value": 1.7
    },
    "BAM": {
    "code": "BAM",
    "value": 1.7854702668
    },
    "BBD": {
    "code": "BBD",
    "value": 2
    },
    "BDT": {
    "code": "BDT",
    "value": 110.0859631605
    },
    "BGN": {
    "code": "BGN",
    "value": 1.7744402601
    },
    "BHD": {
    "code": "BHD",
    "value": 0.376
    },
    "BIF": {
    "code": "BIF",
    "value": 2843.9806503577
    },
    "BMD": {
    "code": "BMD",
    "value": 1
    },
    "BNB": {
    "code": "BNB",
    "value": 0.0042362234
    },
    "BND": {
    "code": "BND",
    "value": 1.3315702231
    },
    "BOB": {
    "code": "BOB",
    "value": 6.9239107309
    },
    "BRL": {
    "code": "BRL",
    "value": 4.901850764
    },
    "BSD": {
    "code": "BSD",
    "value": 1
    },
    "BTC": {
    "code": "BTC",
    "value": 0.0000263625
    },
    "BTN": {
    "code": "BTN",
    "value": 83.3550165767
    },
    "BUSD": {
    "code": "BUSD",
    "value": 0.9983571328
    },
    "BWP": {
    "code": "BWP",
    "value": 13.4682814849
    },
    "BYN": {
    "code": "BYN",
    "value": 3.2949386312
    },
    "BYR": {
    "code": "BYR",
    "value": 32949.37973169
    },
    "BZD": {
    "code": "BZD",
    "value": 2
    },
    "CAD": {
    "code": "CAD",
    "value": 1.3590802136
    },
    "CDF": {
    "code": "CDF",
    "value": 2481.4756524694
    },
    "CHF": {
    "code": "CHF",
    "value": 0.8734101279
    },
    "CLF": {
    "code": "CLF",
    "value": 0.023360004
    },
    "CLP": {
    "code": "CLP",
    "value": 868.527513559
    },
    "CNY": {
    "code": "CNY",
    "value": 7.1285610476
    },
    "COP": {
    "code": "COP",
    "value": 3999.3939517534
    },
    "CRC": {
    "code": "CRC",
    "value": 530.3695844869
    },
    "CUC": {
    "code": "CUC",
    "value": 1
    },
    "CUP": {
    "code": "CUP",
    "value": 24
    },
    "CVE": {
    "code": "CVE",
    "value": 100.478984593
    },
    "CZK": {
    "code": "CZK",
    "value": 22.0812440998
    },
    "DAI": {
    "code": "DAI",
    "value": 0.9993088973
    },
    "DJF": {
    "code": "DJF",
    "value": 177.721
    },
    "DKK": {
    "code": "DKK",
    "value": 6.7948208409
    },
    "DOP": {
    "code": "DOP",
    "value": 56.9083689329
    },
    "DOT": {
    "code": "DOT",
    "value": 0.1933823831
    },
    "DZD": {
    "code": "DZD",
    "value": 134.5063635451
    },
    "EGP": {
    "code": "EGP",
    "value": 30.9978851115
    },
    "ERN": {
    "code": "ERN",
    "value": 15
    },
    "ETB": {
    "code": "ETB",
    "value": 55.6507579029
    },
    "ETH": {
    "code": "ETH",
    "value": 0.0004916956
    },
    "EUR": {
    "code": "EUR",
    "value": 0.9112200962
    },
    "FJD": {
    "code": "FJD",
    "value": 2.2296903211
    },
    "FKP": {
    "code": "FKP",
    "value": 0.787711587
    },
    "GBP": {
    "code": "GBP",
    "value": 0.7877801483
    },
    "GEL": {
    "code": "GEL",
    "value": 2.7152105342
    },
    "GGP": {
    "code": "GGP",
    "value": 0.7877113392
    },
    "GHS": {
    "code": "GHS",
    "value": 11.8983921654
    },
    "GIP": {
    "code": "GIP",
    "value": 0.7877115391
    },
    "GMD": {
    "code": "GMD",
    "value": 58.3540989231
    },
    "GNF": {
    "code": "GNF",
    "value": 8552.376888044
    },
    "GTQ": {
    "code": "GTQ",
    "value": 7.8197308225
    },
    "GYD": {
    "code": "GYD",
    "value": 208.8294670902
    },
    "HKD": {
    "code": "HKD",
    "value": 7.8018711693
    },
    "HNL": {
    "code": "HNL",
    "value": 24.6690938815
    },
    "HRK": {
    "code": "HRK",
    "value": 7.0427512512
    },
    "HTG": {
    "code": "HTG",
    "value": 132.4376469189
    },
    "HUF": {
    "code": "HUF",
    "value": 343.7651777411
    },
    "IDR": {
    "code": "IDR",
    "value": 15371.479451073
    },
    "ILS": {
    "code": "ILS",
    "value": 3.6873904712
    },
    "IMP": {
    "code": "IMP",
    "value": 0.7877114893
    },
    "INR": {
    "code": "INR",
    "value": 83.3030156002
    },
    "IQD": {
    "code": "IQD",
    "value": 1306.9270927408
    },
    "IRR": {
    "code": "IRR",
    "value": 41990.096162254
    },
    "ISK": {
    "code": "ISK",
    "value": 136.738136617
    },
    "JEP": {
    "code": "JEP",
    "value": 0.7877116023
    },
    "JMD": {
    "code": "JMD",
    "value": 157.317315192
    },
    "JOD": {
    "code": "JOD",
    "value": 0.71
    },
    "JPY": {
    "code": "JPY",
    "value": 147.0454511071
    },
    "KES": {
    "code": "KES",
    "value": 153.1013964054
    },
    "KGS": {
    "code": "KGS",
    "value": 88.9285490453
    },
    "KHR": {
    "code": "KHR",
    "value": 4108.1865110629
    },
    "KMF": {
    "code": "KMF",
    "value": 448.0554319196
    },
    "KPW": {
    "code": "KPW",
    "value": 900.0087989818
    },
    "KRW": {
    "code": "KRW",
    "value": 1287.3744390723
    },
    "KWD": {
    "code": "KWD",
    "value": 0.3083600317
    },
    "KYD": {
    "code": "KYD",
    "value": 0.83333
    },
    "KZT": {
    "code": "KZT",
    "value": 457.1164786233
    },
    "LAK": {
    "code": "LAK",
    "value": 20696.084885095
    },
    "LBP": {
    "code": "LBP",
    "value": 15006.737363132
    },
    "LKR": {
    "code": "LKR",
    "value": 327.8126315827
    },
    "LRD": {
    "code": "LRD",
    "value": 188.1258245685
    },
    "LSL": {
    "code": "LSL",
    "value": 18.6027134964
    },
    "LTC": {
    "code": "LTC",
    "value": 0.0142638947
    },
    "LTL": {
    "code": "LTL",
    "value": 3.1464740341
    },
    "LVL": {
    "code": "LVL",
    "value": 0.6404488149
    },
    "LYD": {
    "code": "LYD",
    "value": 4.7917106697
    },
    "MAD": {
    "code": "MAD",
    "value": 10.0310417653
    },
    "MATIC": {
    "code": "MATIC",
    "value": 1.3179896208
    },
    "MDL": {
    "code": "MDL",
    "value": 17.6959028741
    },
    "MGA": {
    "code": "MGA",
    "value": 4497.7434824518
    },
    "MKD": {
    "code": "MKD",
    "value": 56.1527287991
    },
    "MMK": {
    "code": "MMK",
    "value": 2094.2818528189
    },
    "MNT": {
    "code": "MNT",
    "value": 3458.2271581449
    },
    "MOP": {
    "code": "MOP",
    "value": 8.0177914364
    },
    "MRO": {
    "code": "MRO",
    "value": 356.999828
    },
    "MUR": {
    "code": "MUR",
    "value": 44.0868453011
    },
    "MVR": {
    "code": "MVR",
    "value": 15.4463228769
    },
    "MWK": {
    "code": "MWK",
    "value": 1683.2023827294
    },
    "MXN": {
    "code": "MXN",
    "value": 17.2929532005
    },
    "MYR": {
    "code": "MYR",
    "value": 4.6509708196
    },
    "MZN": {
    "code": "MZN",
    "value": 63.6740572419
    },
    "NAD": {
    "code": "NAD",
    "value": 18.6985136958
    },
    "NGN": {
    "code": "NGN",
    "value": 793.3653995249
    },
    "NIO": {
    "code": "NIO",
    "value": 36.7207272901
    },
    "NOK": {
    "code": "NOK",
    "value": 10.65055145
    },
    "NPR": {
    "code": "NPR",
    "value": 133.1088408733
    },
    "NZD": {
    "code": "NZD",
    "value": 1.6246101822
    },
    "OMR": {
    "code": "OMR",
    "value": 0.3840300618
    },
    "OP": {
    "code": "OP",
    "value": 0.5916297841
    },
    "PAB": {
    "code": "PAB",
    "value": 0.9991501843
    },
    "PEN": {
    "code": "PEN",
    "value": 3.7337706424
    },
    "PGK": {
    "code": "PGK",
    "value": 3.733630485
    },
    "PHP": {
    "code": "PHP",
    "value": 55.4129970418
    },
    "PKR": {
    "code": "PKR",
    "value": 285.2323201092
    },
    "PLN": {
    "code": "PLN",
    "value": 3.9524104597
    },
    "PYG": {
    "code": "PYG",
    "value": 7453.6203893359
    },
    "QAR": {
    "code": "QAR",
    "value": 3.6384503986
    },
    "RON": {
    "code": "RON",
    "value": 4.5300005967
    },
    "RSD": {
    "code": "RSD",
    "value": 106.2983176716
    },
    "RUB": {
    "code": "RUB",
    "value": 88.5740530904
    },
    "RWF": {
    "code": "RWF",
    "value": 1241.1474916648
    },
    "SAR": {
    "code": "SAR",
    "value": 3.7463404075
    },
    "SBD": {
    "code": "SBD",
    "value": 8.4496506316
    },
    "SCR": {
    "code": "SCR",
    "value": 14.4862521098
    },
    "SDG": {
    "code": "SDG",
    "value": 601.5
    },
    "SEK": {
    "code": "SEK",
    "value": 10.3563116163
    },
    "SGD": {
    "code": "SGD",
    "value": 1.3325102268
    },
    "SHP": {
    "code": "SHP",
    "value": 0.7877801572
    },
    "SLL": {
    "code": "SLL",
    "value": 22556.663544187
    },
    "SOL": {
    "code": "SOL",
    "value": 0.0168394943
    },
    "SOS": {
    "code": "SOS",
    "value": 571.5840627685
    },
    "SRD": {
    "code": "SRD",
    "value": 37.6933054879
    },
    "STD": {
    "code": "STD",
    "value": 22512.582246079
    },
    "SVC": {
    "code": "SVC",
    "value": 8.75
    },
    "SYP": {
    "code": "SYP",
    "value": 13001.876798876
    },
    "SZL": {
    "code": "SZL",
    "value": 18.7416825438
    },
    "THB": {
    "code": "THB",
    "value": 34.7992355651
    },
    "TJS": {
    "code": "TJS",
    "value": 10.9713317643
    },
    "TMT": {
    "code": "TMT",
    "value": 3.5
    },
    "TND": {
    "code": "TND",
    "value": 3.0929305229
    },
    "TOP": {
    "code": "TOP",
    "value": 2.335440383
    },
    "TRY": {
    "code": "TRY",
    "value": 28.9437432755
    },
    "TTD": {
    "code": "TTD",
    "value": 6.7629211216
    },
    "TWD": {
    "code": "TWD",
    "value": 31.3408847972
    },
    "TZS": {
    "code": "TZS",
    "value": 2501.7689364779
    },
    "UAH": {
    "code": "UAH",
    "value": 36.68935536
    },
    "UGX": {
    "code": "UGX",
    "value": 3804.5523897626
    },
    "USD": {
    "code": "USD",
    "value": 1
    },
    "USDC": {
    "code": "USDC",
    "value": 0.9982112431
    },
    "USDT": {
    "code": "USDT",
    "value": 0.9980416071
    },
    "UYU": {
    "code": "UYU",
    "value": 39.1219439504
    },
    "UZS": {
    "code": "UZS",
    "value": 12295.98616333
    },
    "VEF": {
    "code": "VEF",
    "value": 3543680.0307997
    },
    "VND": {
    "code": "VND",
    "value": 24249.997364879
    },
    "VUV": {
    "code": "VUV",
    "value": 119.5239457043
    },
    "WST": {
    "code": "WST",
    "value": 2.7329276964
    },
    "XAF": {
    "code": "XAF",
    "value": 597.7959057679
    },
    "XAG": {
    "code": "XAG",
    "value": 0.0400568591
    },
    "XAU": {
    "code": "XAU",
    "value": 0.0004890291
    },
    "XCD": {
    "code": "XCD",
    "value": 2.7
    },
    "XDR": {
    "code": "XDR",
    "value": 0.747860112
    },
    "XOF": {
    "code": "XOF",
    "value": 597.7958730907
    },
    "XPD": {
    "code": "XPD",
    "value": 0.0009582644
    },
    "XPF": {
    "code": "XPF",
    "value": 108.6419662339
    },
    "XPT": {
    "code": "XPT",
    "value": 0.0010691006
    },
    "XRP": {
    "code": "XRP",
    "value": 1.6334979932
    },
    "YER": {
    "code": "YER",
    "value": 249.7570174276
    },
    "ZAR": {
    "code": "ZAR",
    "value": 18.737032602
    },
    "ZMK": {
    "code": "ZMK",
    "value": 9001.2
    },
    "ZMW": {
    "code": "ZMW",
    "value": 23.6868131473
    },
    "ZWL": {
    "code": "ZWL",
    "value": 5765.9553196846
    }
    }

app.get('/api/currency', (req, res) => {
    res.json({'data':currencies});
});

app.listen(5000, () => {
    console.log('Listening at port 5000');
});