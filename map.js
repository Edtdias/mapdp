	//criação de LayerGroup de Delegacias de bairro
	var delegacias = L.layerGroup([dpGeral, primeiraDP, segundaDP, quartaDP, quintaDP, sextaDP, setimaDP, oitavaDP, nonaDP, decimaDP]);
	
	//criação de camada base osm
	var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap | ' + 'WebMap desenvolvido por Edgar Dias'
	});
	
	var bairros = L.geoJSON(bairrosDP,{
		style: myStyle
		
	})
	.bindPopup(function (layer){
		return 'Circunscrição: ' + layer.feature.properties.Delegacia;
	});
	
	//criação do mapa com coordenadas como centro, zoom e camadas <layers:osm, Delegacias>
	var map = L.map('map', {
    center: [0.04145, -51.06004],
    zoom: 18,
	layers: [osm, delegacias, bairros]
	});

	var baseMaps = {
    "OpenStreetMap": osm
	//"Mapbox Streets": streets
	};

	var overlayMaps = {
    "Delegacias": delegacias,
	"Bairros": bairros
	};
	var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
	


	/* L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map); */
	
	//insere evento de clicar e retornar uma latitude e longitude
	/*function onMapClick(e) {
		alert("Você obteve a coordenada: " + e.latlng);
		}
		map.on('click', onMapClick);*/
	
	//insere escala ao final
	L.control.scale().addTo(map);
		

	
	
	