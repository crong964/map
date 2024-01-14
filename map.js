"use strict";
function getLocation() {
    if (navigator.geolocation) {
        g();
    }
    else {
    }
}
function g() {
    var nav = new tt.NavigationControl({
        showCompass: true,
        pitchStep: 10
    });
    var map = tt.map({
        key: "NcCz24AQhyNMZ4h7LAudoLDGBatHcRnb",
        container: "map",
        center: {
            lat: 10.907,
            lng: 106.8849
        },
        zoom: 10,
    });
    // var ima = document.createElement("img")
    // ima.src = "https://lh3.googleusercontent.com/ogw/ANLem4Z7Vua_4RQ7zk9z_fNvNuhyKqbqMstr1h-lplpl=s32-c-mo"
    // ima.classList.add("rounded-full")
    // var marker = new tt.Marker({
    //     element: ima
    // })
    //     .setLngLat([106.8849, 10.907])
    //     .addTo(map);
    var geolocateControl = new tt.GeolocateControl({
        showUserLocation: true,
        trackUserLocation: true,
        positionOptions: {
            enableHighAccuracy: true,
        }
    });
    map.addControl(geolocateControl);
    map.addControl(nav, 'top-left');
}
getLocation();
