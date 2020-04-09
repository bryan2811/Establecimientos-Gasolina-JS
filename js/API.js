class API {
    async obtenerDatos() {
        const total = 1000;
        // Obtener datos desde la API
        const datos = await axios(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        return {
            datos
        }
    }
}