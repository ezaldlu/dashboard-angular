export class Map {
  init(){
    var loadedTheme = document.querySelector('body').classList;

    var themes = {
      dark: 'mapbox/dark-v9',
      light: 'daniel-ericsson/cjhknwseq0dk22rnzpgqciiah',
    }

    // dark: 'daniel-ericsson/cjhknw7b62bai2srw84r730uw',
    // light: 'daniel-ericsson/cjhknwseq0dk22rnzpgqciiah',

    var lineColors = {
      dark: '#F2F2F2',
      light: '#242424',
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsLWVyaWNzc29uIiwiYSI6ImNqZnh3cng0NTEzZTcyd2tkYWJhOGN3czIifQ.Nyg8nQf7s8nqW81xcL2hwg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/' + themes[loadedTheme],
        center: [18.03590, 59.33412],
        zoom: 12
    });
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    var mapCenter = [18.03590, 59.33412];
    var mapBoundaries = {
      topLeft: [17.92821, 59.34554],
      bottomRight: [18.09953, 59.31703],
    };

    // data points
    var geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'nodeBig',
          coordinates: [18.03590, 59.33412]
        },
        properties: {
          title: 'VDC 01',
          description: 'Node 1'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node-warning',
          coordinates: [18.08208, 59.33631]
        },
        properties: {
          title: 'VDC 05',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node',
          coordinates: [18.06384, 59.32605]
        },
        properties: {
          title: 'VDC 03',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'server',
          coordinates: [18.05300, 59.33165]
        },
        properties: {
          title: 'VDC 04',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node',
          coordinates: [18.03021, 59.33745]
        },
        properties: {
          title: 'VDC 02',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node',
          coordinates: [18.01344, 59.33604]
        },
        properties: {
          title: 'VDC 06',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node-warning',
          coordinates: [18.02760, 59.33000]
        },
        properties: {
          title: 'VDC 07',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'nodeBig',
          coordinates: [17.97024, 59.33568]
        },
        properties: {
          title: 'VDC 08',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node',
          coordinates: [17.98088, 59.33244]
        },
        properties: {
          title: 'VDC 09',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node',
          coordinates: [17.97719, 59.32736]
        },
        properties: {
          title: 'VDC 10',
          description: 'Node 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'node',
          coordinates: [17.97410, 59.33940]
        },
        properties: {
          title: 'VDC 11',
          description: 'Node 2'
        }
      },
    ]
    };

    var geojsonLines = {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [17.97024, 59.33568],
                  [17.97719, 59.32736],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [17.97024, 59.33568],
                  [17.98088, 59.33244],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [17.97024, 59.33568],
                  [17.97410, 59.33940],
              ]
          }
        },// end left group
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [18.05300, 59.33165],
                  [18.08208, 59.33631],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [18.03590, 59.33412],
                  [18.05300, 59.33165],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [18.03590, 59.33412],
                  [18.01344, 59.33604],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [18.03590, 59.33412],
                  [18.03021, 59.33745],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [18.03590, 59.33412],
                  [18.02760, 59.33000],
              ]
          }
        },
        {
          "type": "Feature",
          "geometry": {
              "type": "LineString",
              "coordinates": [
                  [18.06384, 59.32605],
                  [18.05300, 59.33165]
              ]
          }
        },
      ]
    };

    var lines = {
        "id": "routes",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": geojsonLines
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": '#333', //lineColors[loadedTheme],
            "line-width": 2,
            "line-dasharray": [1,2],
            'line-opacity': 1
        }
    };

    // add markers to map
    geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      if(marker.geometry.type != undefined){
        el.className = marker.geometry.type.toString();
      }else {
        el.className = 'node';
      }

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<span class="map-popup-header">' + marker.properties.title + '</span>'))
      // .setHTML('<span class="map-popup-header">' + marker.properties.title + '<br><br>' + marker.properties.description + '</span>'))
      .addTo(map);
    });

    map.on('load', function () {
      map.addLayer(lines);
    });

    // map.on('style.load', () => {
    //   // map.removeLayer(lines.id);
    //   // map.addLayer(lines);
    //   // console.log('style load');
    // });

    // 3D
    // map.on('load', function() {
    //     // Insert the layer beneath any symbol layer.
    //     var layers = map.getStyle().layers;
    //
    //     var labelLayerId;
    //     for (var i = 0; i < layers.length; i++) {
    //         if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    //             labelLayerId = layers[i].id;
    //             break;
    //         }
    //     }
    //
    //     map.addLayer({
    //         'id': '3d-buildings',
    //         'source': 'composite',
    //         'source-layer': 'building',
    //         'filter': ['==', 'extrude', 'true'],
    //         'type': 'fill-extrusion',
    //         'minzoom': 15,
    //         'paint': {
    //             'fill-extrusion-color': '#aaa',
    //
    //             // use an 'interpolate' expression to add a smooth transition effect to the
    //             // buildings as the user zooms in
    //             'fill-extrusion-height': [
    //                 "interpolate", ["linear"], ["zoom"],
    //                 15, 0,
    //                 15.05, ["get", "height"]
    //             ],
    //             'fill-extrusion-base': [
    //                 "interpolate", ["linear"], ["zoom"],
    //                 15, 0,
    //                 15.05, ["get", "min_height"]
    //             ],
    //             'fill-extrusion-opacity': .6
    //         }
    //     }, labelLayerId);
    // });

    // resize when...
    document.addEventListener('maximizeTile', (event) => {
      setTimeout(() => {
        map.resize();
        map.flyTo({center: mapCenter});
      }, 600);
    }, false);

    document.addEventListener('minimizeTile', (event) => {
      setTimeout(() => {
        map.resize();
        map.flyTo({center: mapCenter});
      }, 600);
    }, false);

    document.addEventListener('toggleNavigation', (event) => {
      setTimeout(() => {
        map.resize();
        map.flyTo({center: mapCenter});
      }, 600);
    }, false);

    document.addEventListener('switchTheme', (event) => {
      loadedTheme = event.detail.theme;
      map.setStyle('mapbox://styles/' + themes[loadedTheme]);
      map.on('style.load', () => {
        lines.paint['line-color'] = lineColors[loadedTheme];
        if(!map.getLayer(lines.id)){
          map.addLayer(lines);
        }else{
          map.setPaintProperty(lines.id, 'line-color', lineColors[loadedTheme]);
        }
      });
    }, false);
  }

}
