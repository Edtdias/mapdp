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
	//criação da camada de delegacias	
	
	
	// var delegacias = L.layerGroup([dpGeral, primeiraDP, segundaDP, quartaDP, quintaDP, sextaDP, setimaDP, oitavaDP, nonaDP, decimaDP]);

	//criação da camada de busca (search control)
	var markersLayer = new L.LayerGroup();
	

	//criação do mapa com coordenadas como centro, zoom e camadas <layers:osm, Delegacias>
	var map = L.map('map', {
    center: [0.020869, -51.086726],
    zoom: 12,
	layers: [osm, bairros]
	
	});
	map.addLayer(markersLayer);
	
	
	//método pertencente a leaflet-search.js
	// map.addControl( new L.Control.Search({layer:markersLayer}));
		
	for(i in dpBairros) {
		let title = dpBairros[i].title,
			bairro = dpBairros[i].bairros,	//value searched
			loc = dpBairros[i].coords,//position found
			x = ""
			//console.log(bairro)
			for (let i of bairro){
				x = i
				console.log(x)
			marker = new L.Marker(new L.latLng(loc), {title: x});//Após o title, insere-se o alvo da busca se property searched
			marker.bindPopup('nome: '+ title );
			markersLayer.addLayer(marker);
			
			}
		}



	//layer com visibilidade sob controle do usuário
	var baseMaps = {
    	"OpenStreetMap": osm
	};

	//layer com visibilidade sob controle do usuário
	var overlayMaps = {
   	// "Delegacias de Bairro": delegacias,
	"Bairros": bairros
	};

		
	// adiciona o controle de layers acima definidos
	var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

	// var searchControl = L.Control.Search({layer:markersLayer});
	
	//insere o campo de busca do leaflet-search.js
	map.addControl( new L.Control.Search({layer:markersLayer}));

	//insere escala ao final
	L.control.scale().addTo(map);
		

	
	
	
