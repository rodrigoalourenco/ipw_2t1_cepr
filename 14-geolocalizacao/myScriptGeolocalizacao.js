function posicaoAtual(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(posicaoAtual);

/**
 * GEOLOCALIZAÇÃO MOSTRANDO NO MAPA
 */

function positionCallback(position) {
    var latitude =  position.coords.latitude;
    var longitude = position.coords.longitude;
    var geolocation = new google.maps.LatLng(latitude, longitude);

    var mapOtpions = {
        zoom: 18,
        center: geolocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var div = document.getElementById('mapa');
    var map = new google.maps.Map(div, mapOtpions);

    var marker = new google.maps.Marker({
        position: geolocation,
        map: map,
        title: 'Você esta aqui!!!'
    });
}

window.onload = function() {
    navigator.geolocation.getCurrentPosition(positionCallback);
}