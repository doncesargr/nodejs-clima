const APIs = require('../API_KEYS');
const axios = require('axios');


const getLugarLatLng = async (dir) => {

  const encodedUrl = encodeURI(dir);

  try {
    const instance = axios.create({
      baseURL: "http://api.weatherapi.com/v1/current.json",
      params: {
        key: APIs.API_KEYS.weatherapi,
        q: encodedUrl,
      },
    });

    const resp = await instance.get();
 
    if (resp.data.error) {
      throw `No hay resultados para ${dir}`;
    }

    const data = resp.data.current;
    const direccion = resp.data.location;
    const respuesta = {
      lat: direccion.lat,
      lng: direccion.lon,
      direccion: `${direccion.name}, ${direccion.region} - ${direccion.country}`,
      weather: data.temp_c,
    };

    return {
      respuesta,
    };

  } catch (error) {
    return 'La direccion que intentas ingresar, no es valida';
  }
};



module.exports = {
  getLugarLatLng,
};