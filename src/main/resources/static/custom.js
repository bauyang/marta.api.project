var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng)},
        zoom: 15,
        scrollwheel: false
    });
	
    for (i=0; i<busLocations.length; i++){
        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
            icon: 'https://findicons.com/files/icons/951/google_maps/32/bus.png'
        });

        let content = "Bus #" + busLocations[i].VEHICLE;
        const infowindow = new google.maps.InfoWindow({
            content: content
        });
        
        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
            return function() {
                infowindow.setContent(content);
                infowindow.open(map,marker);
            };
        })(marker,content,infowindow));  
    }

    let personMarker = new google.maps.Marker({
        position: { lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng) },
        map: map,
    });
}