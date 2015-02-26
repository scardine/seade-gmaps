var latlng = new google.maps.LatLng(-21.47744046489713, -48.076171875);
var myOptions = {
    zoom: 7,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    overviewMapControl: true
};
var mapa = new google.maps.Map(document.getElementById("mapa"), myOptions);

function toNumber(x) {
    return parseFloat(x.replace('.', '').replace(',', '.'));
}

var escala = d3.scale
    .quantile()
    .range(d3.range(5).map(d3.scale.linear().range(['red', 'yellow']).domain([0, 4])))
    .domain(_.map(dados.poligonos, 'valor'));

_.each(dados.poligonos, function(g, i) {
    var range = dados.ranges[g.range];
    var gp = new google.maps.Polygon({
        paths: (geometria[g.md5]+' ').split(' ').map(google.maps.geometry.encoding.decodePath),
        strokeColor: 'red',
        fillColor: escala(g.valor),
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWeight: 1,
        zIndex: i
    });
    gp.setMap(mapa);
});
