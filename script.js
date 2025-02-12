mapboxgl.accessToken = 'pk.eyJ1IjoibXV6bmFtaWFuIiwiYSI6ImNtNXBsc2xjcDAyaWkybm9wZXFuMjNzMTQifQ.0ATJsQJDSlSrpNrQpdMq0Q';
// the specific token that is used in my mapbox file
const map = new mapboxgl.Map({
    container: "my-map 2",
    style: "mapbox://styles/muznamian/cm72f3ui9007x01s8ggjc1pte",
    // the style url from the mapbox id
    center: [-79.39, 43.66],
    // the lng and lat values that are used as central mercator 
    zoom: 12,
});


map.on('load', () => {

    map.addSource('uoftfiles', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/muznamian/lab-2-/main/uoftfiles.geojson'
    });

    //  the above is geojson link 
    map.addLayer({
        'id': 'location points',
        'type': 'circle',
        'source': 'uoftfiles',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#FF0000'
        }

    });

    //map box tile stuff


    //Add a data source from a Mapbox tileset
    map.addSource('queensparkpoints', { // my own source ID name 
        'type': 'vector',
        'url': 'mapbox://muznamian.c4f728f9', // the mapbox tileset ID it shows places I have visited around Queens park 
    });
    map.addLayer({
        'id': 'queenspark', // Create your own layer ID, I used Queens park and locations nearby 
        'type': 'circle', // how the points will appear
        'source': 'queensparkpoints', // Must match source ID from addSource Method
        'paint': {
            'fill-color': '#FFFF00', // the color and hex code 
            'fill-opacity': 0.4,
            'fill-outline-color': 'black'
        },
        'source-layer': 'points_2-acj9mf' // Tileset NAME (diff to ID), get this from mapbox
        //tileset page
    });
})




// map.on('load', () => {
//             map.addSource('uoftfiles', {
//                 type: 'geojson',
//                 data: {
//                     'uoftfiles.geojson'
//       { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": {}, "geometry": { "coordinates": [-79.39232854552829, 43.66459971849761], "type": "Point" } }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [-79.39436739558012, 43.663644813116434], "type": "Point" } }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [-79.39061643426656, 43.6629451698291], "type": "Point" } }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [-79.39361748624353, 43.66306035139647], "type": "Point" } }, { "type": "Feature", "properties": {}, "geometry": { "coordinates": [-79.39480354805336, 43.662059329233074], "type": "Point" } }] }
//     map.addLayer({
//                         'id': 'uoft-buildings',
//                         'type': 'circle',
//                         'source': 'uoft-data',
//                         'paint': {
//                             'circle-radius': 6,
//                             'circle-color': '#B42222}
//                         });
//                 });








