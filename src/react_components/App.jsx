import React from 'react';
import SearchForm from './SearchForm.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      searchData: {}
    };
  }
  
  
  handleSubmit (e) {
    e.preventDefault();
    this.getLatLong(
      document.getElementById('zip').value,
      data => {      
        this.getPlaces(
          new google.maps.LatLngBounds(
            new google.maps.LatLng(data.results[0].geometry.bounds.southwest.lat, data.results[0].geometry.bounds.southwest.lng),
            new google.maps.LatLng(data.results[0].geometry.bounds.northeast.lat, data.results[0].geometry.bounds.northeast.lng)
          ),
          placeId => { 
            this.getDetails(
              placeId,
              data => console.log(data)  
            )
          }
        )
      }
    );
  }
  
  getLatLong (zip, callback) {
    console.log('in getLatLong')
    $.get(
      'http://maps.googleapis.com/maps/api/geocode/json?address=' + zip,
      data => {
        callback(data);
      }
    )
  }
  
  getPlaces (bounds, callback) {
    console.log('in getPlaces')
      const mapOptions = {
        zoom: 1,
        center: new google.maps.LatLng(0,0)
      };
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);
      console.log(map)
      const request = {
        bounds: bounds,
        keyword: document.getElementById('phone').value,
        name: document.getElementById('name').value
      };
      
      const gMaps = new google.maps.places.PlacesService(map);
      gMaps.nearbySearch(
        request,
        data => {
          console.log(data);
          if (data[0]) {
            callback(data[0].place_id);
          }
        }
      );
  }
  
  getDetails (placeId, callback) {
    console.log(placeId)
    const mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(0,0)
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const gMaps = new google.maps.places.PlacesService(map);
    gMaps.getDetails(
      { placeId: placeId },
      data => {
        console.log(data)
        console.log(data.photos[0].getUrl({ 'maxWidth': 500, 'maxHeight': 500 }))
        callback(data);
      }
    );
  }
  
  render() {
    return (
      <div>
        <SearchForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

export default App;