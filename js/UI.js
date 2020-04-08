class UI {
    constructor() {
        // Instanciar la API
        this.api = new API();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(datos => {
                const rutaAPI = datos.datos.data.results;
                const resultado = rutaAPI;

                // Ejecutar la funciòn para mostrar los pines
                this.mostrarPines(resultado);
            })
    }

    mostrarPines(datos) {
        console.log(datos);
    }
}