$(document).on('ready', function(){
    function initialize() {
        var myLatlng = new google.maps.LatLng(-25.363882,131.044922)
        var mapOptions = {
            //center: { lat: -34.397, lng: 150.644},
            zoom: 8,
            center: myLatlng
    };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
            });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $.get('/gear', function(gear){
        console.log(gear);
    })


});