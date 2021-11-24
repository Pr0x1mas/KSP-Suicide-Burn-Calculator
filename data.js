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