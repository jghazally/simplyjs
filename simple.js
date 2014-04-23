var request = require('request');
ajax({ url: 'http://www.geonet.org.nz/quakes/services/all.json' }, function(data){
	data = JSON.parse(data);
	data = data.features[0].properties;
	var mag = data.magnitude.toFixed(1) + 'M',
		intensity = data.intensity,
		depth = data.depth.toFixed(2) + 'Metres';
	simply.title(mag);
	simply.text({ title: intensity, subtitle: 'Magnitude ' + mag, body:'Depth of ' + depth});
});
