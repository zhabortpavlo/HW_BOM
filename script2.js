const screenSizeBtn = document.querySelector('.screenSize');
const prevPageBtn = document.querySelector('.prevPage');

screenSizeBtn.addEventListener('click' , function() {
   console.log(`Ширина вашого вікна зараз : ${window.innerWidth} пікселів`)
   console.log(`Висота вашого вікна зараз : ${window.innerHeight} пікселів`)
})

prevPageBtn.addEventListener('click' , function(){
   window.history.back()
})


async function initMap() {
  const {Map,Marker} = await google.maps.importLibrary("maps");

  navigator.geolocation.getCurrentPosition((position) => {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    const userLatLng = new google.maps.LatLng(userLat, userLng);

    

    
    const map = new Map(document.getElementById("map"), {
      center: { lat: userLat, lng: userLng },
      zoom: 8,
    });
    const userMarker = new google.maps.Marker({
      position: userLatLng,
      map: map,
      title: 'Ваше місцезнаходження'
    });
  });
}
initMap(); 

