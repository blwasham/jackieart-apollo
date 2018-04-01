 // ---------------------------------------------------------------------------------------------------------------------------->
// MAP ELEMENT  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  var mapOptions = {

    zoom: 15, // How zoomed in you want the map to start at (always required)
    scrollwheel: false, //set to true to enable mouse scrolling while inside the map area

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(39.010101, -77.753608), // here put your location

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#716464"
          },
          {
            "weight": "0.01"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "visibility": "simplified"
          },
          {
            "color": "#a05519"
          },
          {
            "saturation": "-13"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
          },
          {
            "color": "#84afa3"
          },
          {
            "lightness": 52
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "visibility": "on"
        }]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(39.010101, -77.753608),
    map: map,
    title: 'Silver Moth Studio Map',
    animation: google.maps.Animation.DROP,
    icon: 'img/map-marker.png'
  });


}