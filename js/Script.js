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

// Função para pesquisar localização usando a API de geocodificação do OpenStreetMap    
async function PesquisarLocalizacao() {

    const endereco = document.getElementById('inputLoc').value;
    if(endereco.trim() === ""){
        alert("Por favor, insira um endereço.");
        return;
    }

    // Nominatim API para geocoding
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if(dados.length > 0) {
            const lat = dados[0].lat;
            const lon = dados[0].lon;

            // Remove marcador antigo
            if(marcadorAtual) mapa.removeLayer(marcadorAtual);

            // Cria marcador no local encontrado
            marcadorAtual = L.marker([lat, lon]).addTo(mapa)
                .bindPopup(endereco).openPopup();

                marcadorAtual.bindPopup(
                "Latitude: " + lat + "<br>Longitude: " + lon
            ).openPopup();


            // Move o mapa para o local
            mapa.setView([lat, lon], 15);
        } else {
            alert("Endereço não encontrado");
        }
    } catch(err) {
        console.error("Erro na busca:", err);
    }
}

// Evento do botão
document.getElementById("buscar").addEventListener("click", PesquisarLocalizacao);


