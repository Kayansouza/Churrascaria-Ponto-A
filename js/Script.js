// Inicializa o mapa no centro de São Paulo
let mapa = L.map('mapa').setView([-23.5489, -46.6388], 13);

// Carrega os tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(mapa);

let marcadorAtual = null;

// Evento de clique no mapa
mapa.on('click', function(e) {
    const latitude = e.latlng.lat;
    const longitude = e.latlng.lng;

    // Remove marcador anterior, se existir
    if (marcadorAtual) {
        mapa.removeLayer(marcadorAtual);
    }

    // Cria novo marcador
    marcadorAtual = L.marker([latitude, longitude]).addTo(mapa);

    // Mostra latitude e longitude em popup
    marcadorAtual.bindPopup(
        "Latitude: " + latitude + "<br>Longitude: " + longitude
    ).openPopup();

    console.log("Latitude:", latitude, "Longitude:", longitude);
});


async function PesquisarLocalizacao() {



    
}