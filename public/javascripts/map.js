$(document).on('ready', function(){
    function initialize() {
        var myLatlng = new google.maps.LatLng(63.3333,-150.5000);
        var mapOptions = {
            //center: { lat: -34.397, lng: 150.644},
            zoom: 8,
            center: myLatlng
    };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        
        var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Denali National Park</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Denali</b>, is a backpackers dream' +
      '<p>View the packing list: <a href="/destination">'+
      'Denali packing list</a> '+
      '<p>More info on the park: <a href="http://www.nps.gov/dena/index.htm">'+
      'http://www.nps.gov/dena/index.htm</a> '+
      '</div>'+
      '</div>';
        
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
            
             });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
                console.log('click');
        });
           
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $.get('/gear', function(gear){
        // console.log(gear);
    });


});