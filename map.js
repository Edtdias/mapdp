	//criação de camada base osm
	var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 19,
    attribution: '© OpenStreetMap | ' + 'Desenvolvido por Edgar Dias'
	});
	//criação da camada de bairros
	var bairros = L.geoJSON(bairrosDP,{
		style: myStyle
		
	})
	.bindPopup(function (layer){
		return layer.feature.properties.nome + '<br>Circunscrição: ' + layer.feature.properties.Delegacia;
	});
		
	var delegacias = L.layerGroup([dpGeral, primeiraDP, segundaDP, quartaDP, quintaDP, sextaDP, setimaDP, oitavaDP, nonaDP, decimaDP]);
		
	//criação do mapa com coordenadas como centro, zoom e camadas <layers:osm, Delegacias>
	var map = L.map('map', {
    center: [0.020869, -51.086726],
    zoom: 12,
	layers: [osm, bairros, delegacias]
	});
	
	var baseMaps = {
    	"OpenStreetMap": osm
	};

	var overlayMaps = {
   	"Delegacias de Bairro": delegacias,
	"Bairros": bairros
	};
	
	var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

	//insere escala ao final
	L.control.scale().addTo(map);
		

	
	
	
