import React from 'react';
import SearchForm from './SearchForm.jsx';
import Photos from './Photos.jsx';
import Header from './Header.jsx';
import Clarifai from 'clarifai';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      searchData: {},
      photoData: []
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
              data => {
                const pics = [];
                for (let i = 0; i < 5; i++) {
                  if (data.photos[i]) {
                    pics.push(data.photos[i].getUrl({ 'maxWidth': 500, 'maxHeight': 500 }));
                  }
                }
                const app = new Clarifai.App('NO18sIhXk9nZDkAdVXNPSThzPXPI8wHn78vAncxe', 'c2vHENnTnNj6XdFkXCEWbG1g1oSdBmTqOTO44eP9');
                app.models.predict(Clarifai.GENERAL_MODEL, pics).then(clarifaiData => {
                  const photoData = [];
                  for (let i = 0; i < 5; i++) {
                    photoData.push({
                      url: pics[i],
                      tag: clarifaiData.outputs[i].data.concepts[0].name
                    });
                  }
                  this.setState({
                    searchData: {
                      name: data.name,
                      phone: data.formatted_phone_number,
                      address: data.formatted_address,
                      website: data.website,
                      category: data.types[0],
                    },
                    photoData: photoData
                  });
                });
              }  
            )
          }
        );
      }
    );
  }
  
  getLatLong (zip, callback) {
    $.get(
      'http://maps.googleapis.com/maps/api/geocode/json?address=' + zip,
      data => {
        callback(data);
      }
    );
  }
  
  getPlaces (bounds, callback) {
    const mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(0,0)
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const request = {
      bounds: bounds,
      keyword: document.getElementById('phone').value,
      name: document.getElementById('name').value
    };
    const gMaps = new google.maps.places.PlacesService(map);
    
    gMaps.nearbySearch(
      request,
      data => {
        if (data[0]) {
          callback(data[0].place_id);
        }
      }
    );
  }
  
  getDetails (placeId, callback) {
    const mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(0,0)
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const gMaps = new google.maps.places.PlacesService(map);
    
    gMaps.getDetails(
      { placeId: placeId },
      data => {
        callback(data);
      }
    );
  }
  
  render() {
    return (
      <div>
        <SearchForm handleSubmit={this.handleSubmit.bind(this)} />
        <div>
          <Header data={this.state.searchData} />
          <Photos photos={this.state.photoData} />
        </div>
      </div>
    );
  }
}

export default App;