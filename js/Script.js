// It's recommended to load Leaflet via <script> and <link> tags in your HTML file,
// rather than fetching it with JavaScript.
//
// In your HTML <head>:
// <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
// <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
//
// Then, you can call this function, for example, when the DOM is loaded.

function inicializarMapa(){
    // Check if the Leaflet library (L) is loaded
    if (typeof L === 'undefined') {
        console.error("Leaflet library not found. Make sure it's loaded in your HTML.");
        return;
    }

    // Initialize the map and set its view to a chosen geographical coordinates and zoom level
    let mapa = L.map('mapa').setView([-23.5489, -46.6388], 13);

    // Add a tile layer to the map (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    let marcador; // Variable to hold the marker instance

    // Set up a click event listener on the map
    mapa.on('click', function(e) {
        // If a marker already exists, remove it from the map
        if (marcador) {
            mapa.removeLayer(marcador);
        }

        // Create a new marker at the clicked location and add it to the map
        marcador = L.marker(e.latlng).addTo(mapa);
        console.log("Marcador adicionado em:", e.latlng);
    });
}
