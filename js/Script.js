
function buscarApi(){

const urlApi = "https://unpkg.com/leaflet/dist/leaflet.js"//URL da api
const resposta = fetch(urlApi)

if(resposta.status == 200){
    
    //Estruturação de código

    let mapa = L.map('mapa').setView([-23.5489, -46.6388], 13);

    L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);


    var clique


    mapa.on('click', function(e) {
        var latitude = e.latlng.lattitude;      //Latitude e longitude para adicionar marcador no mapa
        var longitude = e.latlng.longitude;
    });

    if(clique == true){
        mapa.removeLayer(clique);    //Verificação de clique no mapa para adicionar marcador
    }


    clique = L.marker([latitude, longitude]).addTo(mapa);


   console.log("Api encontrada")
                                            //Verificação de resposta da api
}else{
    console.log("Api não encontrada")
}

}


