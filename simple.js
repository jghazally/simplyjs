var request = require('request');
ajax({ url: 'http://www.geonet.org.nz/quakes/services/all.json' }, function(data){
	data = JSON.parse(data);
	var mag = data.features[0].properties.magnitude.toFixed(0);
	simply.title(mag);
});
