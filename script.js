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

    //  the above is geojson link and the code actions to plot the point in the map 
    map.addLayer({
        'id': 'location points',
        'type': 'circle',
        'source': 'uoftfiles',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#FF0000'
        }

    });
// the code above explains the description, as my points are round circles 
    //map box tile stuff


    //Added a data source from a Mapbox tileset and use the specific sources 
    map.addSource('queensparkpoints', { // my own source ID name 
        'type': 'vector',
        'url': 'mapbox://muznamian.c4f728f9', // the mapbox tileset ID it shows places I have visited around Queens park 
    });
    map.addLayer({
        'id': 'queenspark', // To create my own layer ID, I used Queens park and locations nearby 
        'type': 'circle', // how the points will appear
        'source': 'queensparkpoints', // Must match source ID from addSource Method
        'paint': {
            'circle-color': '#964B00', // the color and hex code 
            'circle-opacity': 0.4,
            'circle-outline-color': 'black'
        },
        'source-layer': 'points_2-acj9mf' // Tileset NAME I got this from mapbox
        //tileset page
    });
})










