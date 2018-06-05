import React, { Component } from 'react'

class Geolocation extends Component {
    get_geo = () => {
        if (!navigator.geolocation){
           alert("Geolocation is not supported by your browser");
            return;
          }

        function success(position) {
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;
            var latlng=latitude+","+ longitude;
            console.log("success", latitude, longitude);
            return {
             lat: latitude,
             lon: longitude
            }
        };

        function error() {
         alert("Unable to retrieve your location");
        };

        navigator.geolocation.getCurrentPosition(success, error);

        console.log(navigator.geolocation.getCurrentPosition(success, error));


    }

    constructor(props){
        super(props)
        this.state={latitude: 'latitude', longitude: 'longitude'}
    }

    componentWillMount(){
        // this.get_geo()
    }
    render(){
        return (
            <div>
                <p>{ this.state.latitude }, { this.state.longitude }</p>
                <button onClick={this.get_geo}>Get Location</button>
            </div>
        )
    }
}

export default Geolocation
