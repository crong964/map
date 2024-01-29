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
    var geolocateControl = new tt.GeolocateControl({
        showUserLocation: true,
        trackUserLocation: true,
        positionOptions: {
            enableHighAccuracy: true,
        }
    });
    geolocateControl.on("geolocate", (e) => {
        document.querySelector(".f").innerHTML = `${e.coords.latitude}  ${e.coords.longitude}`;
        var lglat = new tt.LngLat(e.coords.longitude, e.coords.latitude);
        map.setCenter(lglat);
    });
    map.addControl(geolocateControl);
    map.addControl(nav, 'top-left');
}
getLocation();
