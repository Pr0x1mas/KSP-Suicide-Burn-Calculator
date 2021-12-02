// https://wiki.kerbalspaceprogram.com/wiki/Kerbol_System/Table

celestialBodies = [
    {
        "name": "Kerbol",
        "radius": 261600000,
        "mass": 1.757e28
    }, 

    {
        "name": "Moho",
        "radius": 250000,
        "mass": 2.526e21
    },

    {
        "name": "Eve",
        "radius": 700000,
        "mass": 1.224e23
    },

    {
        "name": "Gilly",
        "radius": 13000,
        "mass": 1.242e17
    },

    {
        "name": "Kerbin",
        "radius": 600000,
        "mass":  5.292e22
    },

    {
        "name": "Mun",
        "radius": 200000,
        "mass": 9.760e20
    },

    {
        "name": "Minmus",
        "radius": 60000,
        "mass": 2.646e19
    },

    {
        "name": "Duna",
        "radius": 320000,
        "mass": 4.515e21
    },

    {
        "name": "Ike",
        "radius": 130000,
        "mass": 2.782e20
    },

    {
        "name": "Dres",
        "radius": 138000,
        "mass": 3.219e20
    },

    {
        "name": "Jool",
        "radius": 6000000,
        "mass": 4.233e24
    },

    {
        "name": "Laythe",
        "radius": 500000,
        "mass": 2.940e22
    },

    {
        "name": "Vall",
        "radius": 300000,
        "mass": 3.109e21
    },

    {
        "name": "Tylo",
        "radius": 600000,
        "mass": 4.233e22
    },

    {
        "name": "Bop",
        "radius": 65000,
        "mass": 3.726e19
    },

    {
        "name": "Pol",
        "radius": 44000,
        "mass": 1.081e19
    },

    {
        "name": "Eeloo",
        "radius": 210000,
        "mass": 1.115e21
    }
]

celestialBodies.forEach((body, bodyIndex) => {
    newBody = document.createElement("option");
    newBody.innerHTML = body.name;
    newBody.value = bodyIndex;
    bodySelector.appendChild(newBody);
});

engines = [
    {
        "ISPAtm": "80",
        "ISPVac": "315",
        "mass": "0.02",
        "name": "LV-1 'Ant' Liquid Fuel Engine",
        "thrustAtm": "0.51",
        "thrustVac": "2"
    },
    {
        "ISPAtm": "280",
        "ISPVac": "300",
        "mass": "42.5",
        "name": "LFB KR-1x2 'Twin-Boar' Liquid Fuel Engine",
        "thrustAtm": "1866.67",
        "thrustVac": "2000"
    },
    {
        "ISPAtm": "290",
        "ISPVac": "310",
        "mass": "2",
        "name": "LV-TX87 'Bobcat' Liquid Fuel Engine",
        "thrustAtm": "374.19",
        "thrustVac": "400"
    },
    {
        "ISPAtm": "150",
        "ISPVac": "355",
        "mass": "1",
        "name": "LV-T91 'Cheetah' Liquid Fuel Engine",
        "thrustAtm": "52.82",
        "thrustVac": "125"
    },
    {
        "ISPAtm": "280",
        "ISPVac": "310",
        "mass": "0.18",
        "name": "RV-1 'Cub' Vernier Engine",
        "thrustAtm": "28.9",
        "thrustVac": "32"
    },
    {
        "ISPAtm": "290",
        "ISPVac": "340",
        "mass": "1",
        "name": "T-1 Toroidal Aerospike 'Dart' Liquid Fuel Engine",
        "thrustAtm": "153.53",
        "thrustVac": "180"
    },
    {
        "ISPAtm": "285",
        "ISPVac": "300",
        "mass": "1.25",
        "name": "RK-7 'Kodiak' Liquid Fueled Engine",
        "thrustAtm": "247",
        "thrustVac": "260"
    },
    {
        "ISPAtm": "285",
        "ISPVac": "310",
        "mass": "6",
        "name": "RE-M3 'Mainsail' Liquid Fuel Engine",
        "thrustAtm": "1379.03",
        "thrustVac": "1500"
    },
    {
        "ISPAtm": "295",
        "ISPVac": "315",
        "mass": "15",
        "name": "S3 KS-25x4 'Mammoth' Liquid Fuel Engine",
        "thrustAtm": "3746.03",
        "thrustVac": "4000"
    },
    {
        "ISPAtm": "290",
        "ISPVac": "305",
        "mass": "5",
        "name": "Kerbodyne KE-1 'Mastodon' Liquid Fuel Engine",
        "thrustAtm": "1283.61",
        "thrustVac": "1350"
    },
    {
        "ISPAtm": "90",
        "ISPVac": "350",
        "mass": "1.75",
        "name": "RE-L10 'Poodle' Liquid Fuel Engine",
        "thrustAtm": "64.29",
        "thrustVac": "250"
    },
    {
        "ISPAtm": "275",
        "ISPVac": "305",
        "mass": "2",
        "name": "CR-7 R.A.P.I.E.R. Engine [CLOSED CYCLE MODE]",
        "thrustAtm": "162.3",
        "thrustVac": "180"
    },
    {
        "ISPAtm": "265",
        "ISPVac": "310",
        "mass": "1.25",
        "name": "LV-T30 'Reliant' Liquid Fuel Engine",
        "thrustAtm": "205.16",
        "thrustVac": "240"
    },
    {
        "ISPAtm": "205",
        "ISPVac": "340",
        "mass": "9",
        "name": "Kerenginene KR-2L+ 'Rhino' Liquid Fuel Engine",
        "thrustAtm": "1205.88",
        "thrustVac": "2000"
    },
    {
        "ISPAtm": "265",
        "ISPVac": "330",
        "mass": "1.6",
        "name": "RE-I2 'Skiff' Liquid Fuel Engine",
        "thrustAtm": "240.91",
        "thrustVac": "300"
    },
    {
        "ISPAtm": "280",
        "ISPVac": "320",
        "mass": "3",
        "name": "RE-I5 'Skipper' Liquid Fuel Engine",
        "thrustAtm": "568.75",
        "thrustVac": "650"
    },
    {
        "ISPAtm": "265",
        "ISPVac": "320",
        "mass": "0.13",
        "name": "48-7S 'Spark' Liquid Fuel Engine",
        "thrustAtm": "16.56",
        "thrustVac": "20"
    },
    {
        "ISPAtm": "260",
        "ISPVac": "290",
        "mass": "0.02",
        "name": "LV-1R 'Spider' Liquid Fuel Engine",
        "thrustAtm": "1.79",
        "thrustVac": "2"
    },
    {
        "ISPAtm": "250",
        "ISPVac": "290",
        "mass": "1.5",
        "name": "LV-T45 'Swivel' Liquid Fuel Engine",
        "thrustAtm": "167.97",
        "thrustVac": "215"
    },
    {
        "ISPAtm": "85",
        "ISPVac": "345",
        "mass": "0.5",
        "name": "LV-909 'Terrier' Liquid Fuel Engine",
        "thrustAtm": "14.78",
        "thrustVac": "60"
    },
    {
        "ISPAtm": "275",
        "ISPVac": "305",
        "mass": "0.9",
        "name": "Mk-55 'Thud' Liquid Fuel Engine",
        "thrustAtm": "108.2",
        "thrustVac": "120"
    },
    {
        "ISPAtm": "275",
        "ISPVac": "290",
        "mass": "0.08",
        "name": "24-77 'Twitch' Liquid Fuel Engine",
        "thrustAtm": "15.17",
        "thrustVac": "16"
    },
    {
        "ISPAtm": "295",
        "ISPVac": "315",
        "mass": "4",
        "name": "S3 KS-25 'Vector' Liquid Fuel Engine",
        "thrustAtm": "936.51",
        "thrustVac": "1000"
    },
    {
        "ISPAtm": "70",
        "ISPVac": "380",
        "mass": "3.3",
        "name": "RE-J10 'Wolfhound' Liquid Fuel Engine",
        "thrustAtm": "69.08",
        "thrustVac": "375"
    }
]

engines.forEach((engine, engineIndex) => {
    newEngine = document.createElement("option");
    newEngine.innerHTML = engine.name;
    newEngine.value = engineIndex;
    engineSelector.appendChild(newEngine);
});