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
        google.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map,marker);
        });
           
    }
    google.maps.event.addDomListener(window, 'load', initialize);

   
    
    // var LocationData = [
    //     [63.3333,-150.5000, "Denali National Park" ], 
    //     [38.573526, -109.550861, "Moab, UT" ], 
    //     // [49.2812336, -123.1020622, "122 E Hastings St, Vancouver" ], 
    //     // [49.2813564, -123.1012253, "138 E Hastings St, Vancouver" ], 
    //     [49.2811625, -123.0985032, "242 E Hastings St, Vancouver" ]
    // ];
     
    // function initialize()
    // {
    //     var map = 
    //         new google.maps.Map(document.getElementById('map-canvas'));
    //     var bounds = new google.maps.LatLngBounds();
        
    //     var contentString = '<div id="content">'+
    //           '<div id="siteNotice">'+
    //           '</div>'+
    //           '<h1 id="firstHeading" class="firstHeading">Denali National Park</h1>'+
    //           '<div id="bodyContent">'+
    //           '<p><b>Denali</b>, is a backpackers dream' +
    //           '<p>View the packing list: <a href="/destination">'+
    //           'Denali packing list</a> '+
    //           '<p>More info on the park: <a href="http://www.nps.gov/dena/index.htm">'+
    //           'http://www.nps.gov/dena/index.htm</a> '+
    //           '</div>'+
    //           '</div>';
    //     var infowindow = new google.maps.InfoWindow({
    //         content: contentString
    //     });
         
    //     for (var i in LocationData)
    //     {
    //         var p = LocationData[i];
    //         var latlng = new google.maps.LatLng(p[0], p[1]);
    //         bounds.extend(latlng);
             
    //         var marker = new google.maps.Marker({
    //             position: latlng,
    //             map: map,
    //             title: p[2]
    //         });
         
    //         google.maps.event.addListener(marker, 'click', function() {
    //             infowindow.setContent(this.title);
    //             infowindow.open(map, this);
    //         });
    //     }
         
    //     map.fitBounds(bounds);
    // }
     
    // google.maps.event.addDomListener(window, 'load', initialize);


});