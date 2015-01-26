'use strict';

function ExampleGenerator() {
}

ExampleGenerator.prototype.generateBonsai = function () {
    return {
        "buses": [
            {
                "id": "s0",
                "name": "not count",
                "max": 1
            },
            {
                "id": "s1",
                "name": "clrMPC",
                "max": 1,
                "color": "rgb(100, 100, 255)",
                "routes": [
                    {
                        "type": "topleft",
                        "top": "73px",
                        "left": "763px",
                        "width": "14px",
                        "height": "160px"
                    },
                    {
                        "type": "bottomright",
                        "top": "202px",
                        "left": "650px",
                        "width": "113px",
                        "height": "70px"
                    },
                    {
                        "type": "horizontal",
                        "top": "253px",
                        "left": "734px",
                        "width": "29px",
                        "height": "0"
                    }
                ]
            },
            {
                "id": "s2",
                "name": "readMPC",
                "max": 1,
                "color": "rgb(100, 255, 100)",
                "routes": [
                    {
                        "type": "topleft",
                        "top": "86px",
                        "left": "771px",
                        "width": "6px",
                        "height": "180px"
                    },
                    {
                        "type": "bottomright",
                        "top": "215px",
                        "left": "628px",
                        "width": "143px",
                        "height": "70px"
                    },
                    {
                        "type": "horizontal",
                        "top": "264px",
                        "left": "734px",
                        "width": "37px",
                        "height": "0"
                    }
                ]
            },
            {
                "id": "s3",
                "name": "writeMem",
                "max": 1,
                "color": "rgb(255, 100, 100)",
                "routes": [
                    {
                        "type": "horizontal",
                        "top": "98px",
                        "left": "210px",
                        "width": "568px",
                        "height": "0"
                    },
                    {
                        "type": "bottomright",
                        "top": "126px",
                        "left": "140px",
                        "width": "47px",
                        "height": "30px"
                    },
                    {
                        "type": "topleft",
                        "top": "98px",
                        "left": "187px",
                        "width": "31px",
                        "height": "28px"
                    }
                ]
            },
            {
                "id": "s4",
                "name": "readMem",
                "max": 1,
                "color": "rgb(100, 255, 100)",
                "routes": [
                    {
                        "type": "horizontal",
                        "top": "110px",
                        "left": "210px",
                        "width": "600px",
                        "height": "0"
                    },
                    {
                        "type": "bottomright",
                        "top": "129px",
                        "left": "140px",
                        "width": "39px",
                        "height": "20px"
                    },
                    {
                        "type": "topleft",
                        "top": "110px",
                        "left": "179px",
                        "width": "31px",
                        "height": "29px"
                    }
                ]
            },
            {
                "id": "s5",
                "name": "incAkku",
                "max": 1,
                "color": "rgb(200, 200, 0)",
                "routes": [
                    {
                        "type": "horizontal",
                        "top": "122px",
                        "left": "270px",
                        "width": "540px",
                        "height": "0"
                    },
                    {
                        "type": "bottomright",
                        "top": "158px",
                        "left": "79px",
                        "width": "158px",
                        "height": "100px"
                    },
                    {
                        "type": "topleft",
                        "top": "122px",
                        "left": "237px",
                        "width": "33px",
                        "height": "36px"
                    }
                ]
            },
            {
                "id": "s6",
                "name": "decAkku",
                "max": 1,
                "color": "rgb(200, 200, 0)",
                "routes": [
                    {
                        "type": "horizontal",
                        "top": "134px",
                        "left": "270px",
                        "width": "540px",
                        "height": "0"
                    },
                    {
                        "type": "bottomright",
                        "top": "164px",
                        "left": "79px",
                        "width": "166px",
                        "height": "100px"
                    },
                    {
                        "type": "topleft",
                        "top": "134px",
                        "left": "245px",
                        "width": "25px",
                        "height": "30px"
                    }
                ]
            },
            {
                "id": "s7",
                "name": "readAkku",
                "max": 1,
                "color": "rgb(10, 255, 10)",
                "routes": [
                    {
                        "type": "horizontal",
                        "top": "146px",
                        "left": "268px",
                        "width": "528px",
                        "height": "0"
                    },
                    {
                        "type": "bottomright",
                        "top": "160px",
                        "left": "55px",
                        "width": "198px",
                        "height": "85px"
                    },
                    {
                        "type": "topleft",
                        "top": "146px",
                        "left": "253px",
                        "width": "15px",
                        "height": "15px"
                    }
                ]
            },
            {
                "id": "s8",
                "name": "writeAkku",
                "max": 1,
                "color": "rgb(255, 100, 100)",
                "routes": [
                    {
                        "type": "horizontal",
                        "top": "158px",
                        "left": "280px",
                        "width": "520px",
                        "height": "0"
                    },
                    {
                        "type": "bottomright",
                        "top": "168px",
                        "left": "55px",
                        "width": "206px",
                        "height": "70px"
                    },
                    {
                        "type": "topleft",
                        "top": "158px",
                        "left": "261px",
                        "width": "20px",
                        "height": "15px"
                    }
                ]
            },
            {
                "id": "s9",
                "name": "readPC",
                "max": 1,
                "color": "rgb(100, 255, 100)",
                "routes": [
                    {
                        "type": "bottomleft",
                        "top": "100px",
                        "left": "279px",
                        "width": "550px",
                        "height": "70px"
                    },
                    {
                        "type": "topright",
                        "top": "45px",
                        "left": "236px",
                        "width": "43px",
                        "height": "70px"
                    }
                ]
            },
            {
                "id": "s10",
                "name": "writePC",
                "max": 1,
                "color": "rgb(255, 100, 100)",
                "routes": [
                    {
                        "type": "bottomleft",
                        "top": "112px",
                        "left": "285px",
                        "width": "550px",
                        "height": "70px"
                    },
                    {
                        "type": "topright",
                        "top": "38px",
                        "left": "235px",
                        "width": "50px",
                        "height": "82px"
                    }
                ]
            },
            {
                "id": "s11",
                "name": "loadIR",
                "max": 1,
                "color": "rgb(100, 255, 100)",
                "routes": [
                    {
                        "type": "topright",
                        "top": "85px",
                        "left": "390px",
                        "width": "24px",
                        "height": "70px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "155px",
                        "left": "414px",
                        "width": "363px",
                        "height": "39px"
                    }
                ]
            },
            {
                "id": "s12",
                "name": "writeIR",
                "max": 1,
                "color": "rgb(255, 100, 100)",
                "routes": [
                    {
                        "type": "topright",
                        "top": "38px",
                        "left": "390px",
                        "width": "32px",
                        "height": "128px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "167px",
                        "left": "422px",
                        "width": "355px",
                        "height": "39px"
                    }
                ]
            },
            {
                "id": "s13",
                "name": "incPC",
                "max": 1,
                "color": "rgb(200, 200, 0)",
                "routes": [
                    {
                        "type": "topright",
                        "top": "64px",
                        "left": "292px",
                        "width": "8px",
                        "height": "100px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "164px",
                        "left": "300px",
                        "width": "495px",
                        "height": "54px"
                    }
                ]
            },
            {
                "id": "s14",
                "name": "incPCz",
                "max": 1,
                "color": "rgb(200, 200, 0)",
                "routes": [
                    {
                        "type": "topright",
                        "top": "48px",
                        "left": "323px",
                        "width": "14px",
                        "height": "100px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "148px",
                        "left": "337px",
                        "width": "459px",
                        "height": "82px"
                    }
                ]
            },
            {
                "id": "dataBus",
                "name": "Datenbus",
                "max": 99999,
                "base": 10,
                "color": "rgb(255, 0, 0)",
                "top": 168,
                "left": 175,
                "routes": [
                    {
                        "type": "vertical",
                        "top": "164px",
                        "left": "128px",
                        "width": "0",
                        "height": "31px"
                    },
                    {
                        "type": "bottomright",
                        "top": "100px",
                        "left": "275px",
                        "width": "102px",
                        "height": "95px"
                    },
                    {
                        "type": "vertical",
                        "top": "198px",
                        "left": "309px",
                        "width": "0",
                        "height": "32px"
                    },
                    {
                        "type": "topleft",
                        "top": "195px",
                        "left": "43px",
                        "width": "230px",
                        "height": "35px"
                    }
                ]
            },
            {
                "id": "addressBus",
                "name": "Adressbus",
                "max": 9999,
                "base": 10,
                "color": "rgb(0, 140, 0)",
                "top": -6,
                "left": 175,
                "routes": [
                    {
                        "type": "topleft",
                        "top": "20px",
                        "left": "51px",
                        "width": "282px",
                        "height": "7px"
                    },
                    {
                        "type": "vertical",
                        "top": "23px",
                        "left": "223px",
                        "width": "0",
                        "height": "7px"
                    }
                ]
            },
            {
                "id": "MicroAddressBus",
                "name": "MikroAdressbus",
                "max": 99,
                "base": 10,
                "color": "rgb(155, 100, 0)",
                "top": -5,
                "left": 592,
                "routes": [
                    {
                        "type": "topright",
                        "top": "151px",
                        "left": "602px",
                        "width": "13px",
                        "height": "77px"
                    },
                    {
                        "type": "topright",
                        "top": "21px",
                        "left": "603px",
                        "width": "20px",
                        "height": "7px"
                    },
                    {
                        "type": "topleft",
                        "top": "21px",
                        "left": "572px",
                        "width": "29px",
                        "height": "17px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "39px",
                        "left": "572px",
                        "width": "28px",
                        "height": "112px"
                    }
                ]
            },
            {
                "id": "MicroDataBus",
                "name": "MicroDataBus",
                "base": 10,
                "max": 32767,
                "color": "rgb(200, 0, 200)",
                "left": 767,
                "top": -5,
                "routes": [
                    {
                        "type": "bottomright",
                        "top": "164px",
                        "left": "730px",
                        "width": "23px",
                        "height": "7px"
                    },
                    {
                        "type": "topright",
                        "top": "21px",
                        "left": "792px",
                        "width": "20px",
                        "height": "7px"
                    },
                    {
                        "type": "topleft",
                        "top": "21px",
                        "left": "753px",
                        "width": "37px",
                        "height": "141px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "164px",
                        "left": "700px",
                        "width": "28px",
                        "height": "7px"
                    }
                ]
            },
            {
                "id": "IRout",
                "name": "AusgangIR",
                "max": 99999,
                "base": 10,
                "color": "rgb(0, 140, 0)",
                "top": -6,
                "left": 359,
                "routes": [
                    {
                        "type": "topright",
                        "top": "20px",
                        "left": "366px",
                        "width": "11px",
                        "height": "7px"
                    },
                    {
                        "type": "topleft",
                        "top": "20px",
                        "left": "377px",
                        "width": "11px",
                        "height": "7px"
                    }
                ]
            },
            {
                "id": "opcode",
                "name": "opcode",
                "max": 99999,
                "base": 10,
                "color": "rgb(0, 140, 0)",
                "top": -6,
                "left": 425,
                "routes": [
                    {
                        "type": "topright",
                        "top": "20px",
                        "left": "421px",
                        "width": "22px",
                        "height": "207px"
                    }
                ]
            },
            {
                "id": "DecoderMPC",
                "name": "BefehlsdecoderZuMPC",
                "max": 99,
                "base": 10,
                "color": "rgb(0, 140, 140)",
                "top": 281,
                "left": 562,
                "routes": [
                    {
                        "type": "bottomright",
                        "top": "301px",
                        "left": "565px",
                        "width": "50px",
                        "height": "7px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "293px",
                        "left": "520px",
                        "width": "42px",
                        "height": "15px"
                    }
                ]
            },
            {
                "id": "AndB",
                "name": "And gate B wire",
                "max": 1
            },
            {
                "id": "OrA",
                "name": "Or gate A wire",
                "max": 1
            },
            {
                "id": "clock",
                "name": "Takt",
                "max": 1,
                "color": "rgb(100, 100, 255)",
                "routes": [
                    {
                        "type": "topright",
                        "top": "45px",
                        "left": "822px",
                        "width": "20px",
                        "height": "200px"
                    },
                    {
                        "type": "topleft",
                        "top": "278px",
                        "left": "735px",
                        "width": "30px",
                        "height": "22px"
                    },
                    {
                        "type": "horizontal",
                        "top": "300px",
                        "left": "725px",
                        "width": "19px",
                        "height": "0px"
                    },
                    {
                        "type": "bottomright",
                        "top": "246px",
                        "left": "761px",
                        "width": "81px",
                        "height": "32px"
                    }
                ]
            },
            {
                "id": "clockdelayed",
                "name": "verzögerter Takt",
                "max": 1,
                "color": "rgb(100, 100, 255)",
                "routes": [
                    {
                        "type": "topright",
                        "top": "253px",
                        "left": "685px",
                        "width": "8px",
                        "height": "15px"
                    },
                    {
                        "type": "bottomleft",
                        "top": "269px",
                        "left": "693px",
                        "width": "11px",
                        "height": "31px"
                    }
                ]
            },
            {
                "id": "and2A_Takt",
                "name": "xy",
                "max": 1
            },
            {
                "id": "and2B_nor1out",
                "name": "uv",
                "max": 1
            },
            {
                "id": "and2out_incMPC",
                "name": "abc",
                "max": 1
            },
            {
                "id": "or1_ausgang",
                "name": "or1_ausgang result wire",
                "max": 1
            },
            {
                "id": "compWire",
                "name": "Zerocomparator result wire",
                "max": 1,
                "routes": [
                    {
                        "type": "vertical",
                        "top": "257px",
                        "left": "310px",
                        "width": "0",
                        "height": "16px"
                    },
                    {
                        "type": "topright",
                        "top": "59px",
                        "left": "322px",
                        "width": "8px",
                        "height": "158px"
                    },
                    {
                        "type": "bottomright",
                        "top": "218px",
                        "left": "310px",
                        "width": "20px",
                        "height": "46px"
                    }
                ]
            },
            {
                "id": "runClock",
                "name": "Clock run wire",
                "max": 1
            }
        ],
        "manualswitches": [
            {
                "name": "ClockRuneSwitch",
                "wireId": "runClock",
                "value": 0,
                "top": 297,
                "left": 827
            }
        ],
        "leds": [
            {
                "wireId": "compWire",
                "name": "comp indication led",
                "top": 276,
                "left": 309,
                "color": "rgb(255, 0, 112)"
            },
            {
                "wireId": "s0",
                "name": "s0 led",
                "top": 62,
                "left": 764,
                "value": 0
            },
            {
                "wireId": "and2B_nor1out",
                "name": "Nor Test LED",
                "top": 245,
                "left": 704,
                "color": "rgb(150, 180, 255)",
                "value": 1
            }
        ],
        "andGates": [
            {
                "name": "and1",
                "inAId": "s14",
                "inBId": "compWire",
                "outId": "OrA",
                "top": 48,
                "left": 300
            },
            {
                "name": "and2",
                "inAId": "clockdelayed",
                "inBId": "and2B_nor1out",
                "outId": "and2out_incMPC",
                "top": 253,
                "left": 662
            }
        ],
        "orGates": [
            {
                "name": "or1",
                "inAId": "OrA",
                "inBId": "s13",
                "outId": "or1_ausgang",
                "top": 53,
                "left": 270
            }
        ],
        "norGates": [
            {
                "name": "nor1",
                "inAId": "s1",
                "inBId": "s2",
                "outId": "and2B_nor1out",
                "top": 253,
                "left": 712
            }
        ],
        "registers": [
            {
                "name": "PC",
                "value": 0,
                "base": 10,
                "top": 50,
                "left": 190,
                "gates": [
                    {
                        "busId": "addressBus",
                        "writeWireId": "s10",
                        "readWireId": "s9"
                    }
                ],
                "incWireId": "or1_ausgang"
            },
            {
                "name": "IR",
                "value": 0,
                "base": 10,
                "top": 50,
                "left": 344,
                "gates": [
                    {
                        "busId": "IRout",
                        "writeWireId": "s12",
                        "initialState": 0
                    },
                    {
                        "busId": "dataBus",
                        "readWireId": "s11"
                    }
                ]
            },
            {
                "name": "Akku",
                "value": 0,
                "base": 10,
                "top": 250,
                "left": 10,
                "gates": [
                    {
                        "busId": "dataBus",
                        "writeWireId": "s8",
                        "readWireId": "s7"
                    }
                ],
                "incWireId": "s5",
                "decWireId": "s6",
                "maxValue": 255
            },
            {
                "name": "MPC",
                "value": 0,
                "base": 10,
                "top": 250,
                "left": 582,
                "gates": [
                    {
                        "busId": "MicroAddressBus",
                        "initialState": 1
                    },
                    {
                        "busId": "DecoderMPC",
                        "readWireId": "s2"
                    }
                ],
                "incWireId": "and2out_incMPC",
                "clrWireId": "s1"
            }
        ],
        "bitregisters": [
            {
                "name": "Steuerwort",
                "value": 0,
                "base": 10,
                "top": 50,
                "left": 782,
                "widegate": {
                    "busId": "MicroDataBus",
                    "readWireId": "clock"
                },
                "bitWidth": 15,
                "wireGateState": 1,
                "wiregates": [
                    {
                        "wireId": "s0"
                    },
                    {
                        "wireId": "s1"
                    },
                    {
                        "wireId": "s2"
                    },
                    {
                        "wireId": "s3"
                    },
                    {
                        "wireId": "s4"
                    },
                    {
                        "wireId": "s5"
                    },
                    {
                        "wireId": "s6"
                    },
                    {
                        "wireId": "s7"
                    },
                    {
                        "wireId": "s8"
                    },
                    {
                        "wireId": "s9"
                    },
                    {
                        "wireId": "s10"
                    },
                    {
                        "wireId": "s11"
                    },
                    {
                        "wireId": "s12"
                    },
                    {
                        "wireId": "s13"
                    },
                    {
                        "wireId": "s14"
                    }
                ]
            }
        ],
        "memories": [
            {
                "name": "Datenspeicher",
                "base": 10,
                "content": "30003\n10007\n20008\n40008\n30001\n50000\n\n3\n2",
                "top": 50,
                "left": 10,
                "addressgate": {
                    "busId": "addressBus",
                    "initialState": -1
                },
                "datagate": {
                    "busId": "dataBus",
                    "writeWireId": "s3",
                    "readWireId": "s4"
                },
                "undefinedString": "---",
                "showContext": true
            },
            {
                "name": "Befehlsdecoder",
                "base": 10,
                "content": "0\n10\n20\n30\n40\n50",
                "top": 250,
                "left": 402,
                "addressgate": {
                    "busId": "opcode",
                    "initialState": -1
                },
                "datagate": {
                    "busId": "DecoderMPC",
                    "initialState": 1
                },
                "undefinedString": "",
                "showContext": false
            },
            {
                "name": "Mikroprogrammspeicher",
                "base": 10,
                "content": "1024\n3080\n1032\n4096\n4100\n\n\n\n\n\n4096\n4232\n4104\n12320\n4368\n4352\n2\n\n\n\n4096\n4232\n4104\n12352\n4368\n4352\n2\n\n\n\n4608\n4096\n2\n\n\n\n\n\n\n\n12288\n4104\n20488\n2\n\n\n\n\n\n\n4101",
                "top": 50,
                "left": 582,
                "addressgate": {
                    "busId": "MicroAddressBus",
                    "initialState": -1
                },
                "datagate": {
                    "busId": "MicroDataBus",
                    "initialState": 1
                },
                "undefinedString": "---",
                "showContext": true
            }
        ],
        "zerocomparators": [
            {
                "name": "Zero comparator 1",
                "busId": "dataBus",
                "wireId": "compWire",
                "top": 232,
                "left": 310
            }
        ],
        "delays": [
            {
                "name": "ClockDelay",
                "delay": 50,
                "busLeftId": "clockdelayed",
                "busRightId": "clock",
                "top": 300,
                "left": 706,
                "direction": "left"
            }
        ],
        "filters": [
            {
                "name": "div10000",
                "statement": "n/10000",
                "busLeftId": "IRout",
                "busRightId": "opcode",
                "top": 21,
                "left": 394,
                "direction": "right"
            },
            {
                "name": "mod10000",
                "statement": "n%10000",
                "busLeftId": "addressBus",
                "busRightId": "IRout",
                "top": 21,
                "left": 339,
                "direction": "left"
            }
        ],
        "clocks": [
            {
                "name": "Takt",
                "wireId": "clock",
                "runWireId": "runClock",
                "frequency": 2,
                "top": 300,
                "left": 745
            }
        ],
        "labels": [
            {
                "text": "Akku",
                "top": 226,
                "left": 10
            },
            {
                "text": "MPC",
                "top": 226,
                "left": 582
            },
            {
                "text": "Befehlsdecoder",
                "top": 226,
                "left": 482
            },
            {
                "text": "PC",
                "top": 26,
                "left": 195
            },
            {
                "text": "IR",
                "top": 26,
                "left": 352
            },
            {
                "text": "Programmspeicher",
                "top": 26,
                "left": 70
            },
            {
                "text": "Mikroprogrammspeicher",
                "top": 26,
                "left": 637
            }
        ]
    };
};