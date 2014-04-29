var request = require('request'),
	secret = require('./secrets.js');


ajax({ url: 'http://www.geonet.org.nz/quakes/services/all.json' }, function(data){
	data = JSON.parse(data);
	properties = data.features[0].properties;
	geometry = data.features[0].geometry;

	var mag = properties.magnitude.toFixed(1) + 'M',
		intensity = properties.intensity,
		depth = properties.depth.toFixed(2) + 'Metres';
		geoCode(geometry.coordinates[1], geometry.coordinates[0]);
	
	simply.title(mag);
	simply.text({ title: intensity, subtitle: 'Magnitude ' + mag, body:'Depth of ' + depth});
});

function geoCode(lat, lng) {
	ajax({ url: 'http://api.geonames.org/findNearbyPlaceNameJSON?lat='+lat+'&lng='+lng+'&username='+secret.username }, function(data) {
			data = JSON.parse(data);
			simply.title(data.geonames[0].name);
	});
}
