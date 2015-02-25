var latlng = new google.maps.LatLng(-21.47744046489713, -48.076171875);
var myOptions = {
    zoom: 7,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    overviewMapControl: true
};
var mapa = new google.maps.Map(document.getElementById("mapa"), myOptions);

_.each(dados.poligonos, function(g, i) {
    var range = dados.ranges[g.range];
    var gp = new google.maps.Polyline({
        paths: geometria[g.md5].split(' ').map(google.maps.geometry.encoding.decodePath),
        strokeColor: '#' + range.fill_color,
        fillColor: '#ffffff',
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWeight: 1,
        zIndex: i
    });
    gp.setMap(mapa);
});
