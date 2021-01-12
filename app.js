
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Ciudad de consulta'
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(25.6751, -100.3185)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion ) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.respuesta.lat, coords.respuesta.lng);
        return `El Clima de ${direccion} es de ${temp} oC`;    
    }
    catch (e) {
        return `No fue posible obtener la temperatura de ${direccion}`;
    }
}

getInfo(argv.direccion )
    .then(console.log)
    .catch(console.log);
    