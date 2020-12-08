//instructions to every other class on how they can be an argument to addMarker
interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
}

export class CustomMap {
  //googleMap is going to be an instance of the class Map
  googleMap: google.maps.Map;

  // Were saying that the constructor has to call a divId which is a string
  constructor(divId: string) {
    //We can setup the options (zoom, center...) right after the id
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

};