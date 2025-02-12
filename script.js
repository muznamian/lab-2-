mapboxgl.accessToken = 'pk.eyJ1IjoibXV6bmFtaWFuIiwiYSI6ImNtNXBsc2xjcDAyaWkybm9wZXFuMjNzMTQifQ.0ATJsQJDSlSrpNrQpdMq0Q';
// the specific token that is used in my mapbox file
const map = new mapboxgl.Map({
    container: "my-map 2",
    style: "mapbox://styles/muznamian/cm6zwja9f00cj01qq433y5umu",
    // the style url from the mapbox id
    center: [-79.39, 43.66],
    // the lng and lat values that are used as central mercator 
    zoom: 12,
});


map.on('load',()=>{

    // map.addSource('uoftfiles', {
    //     type: 'geojson',
    //     data: 'c:\Users\mianmuzn\Downloads\uoftfiles.geojson'
    // }); 

});


// //  the above is geojson link 
// map.addLayer({
//     'id': 'location points',
//     'type': 'circle',
//     'source': 'uoftfiles',
//     'paint': {
//         'circle-radius': 5,
//         'circle-color': '#007cbf})
  


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




//   map box tile stuff


//   Add a data source from a Mapbox tileset
//             map.addSource('queens park points', { // Create your own source ID
//                 'type': 'vector',
//                 'url': 'https://studio.mapbox.com/tilesets/muznamian.c4f728f9' // Update to your mapbox tileset ID
//             });
//             map.addLayer({
//                 'id': 'queenspark', // Create your own layer ID
//                 'type': 'fill', // how the points will appear
//                 'source': 'uoftfiles', // Must match source ID from addSource Method
//                 'paint': {
//                     'fill-color': '#9c7474', // Test alternative colours and style properties
//                     'fill-opacity': 0.4,
//                     'fill-outline-color': 'black'
//                 },
//                 'source-layer': 'points_2-acj9mf' // Tileset NAME (diff to ID), get this from mapbox
// tileset page
//             },
//                 'uoft-buildings' // Drawing order - places layer below points
// // Here the addlayer method takes 2 arguments (the layer as an object and a
// string for another layer's name). If the other layer already exists, the new layer
// will be drawn before that one
// );
//         Save your edits and update your repository.



