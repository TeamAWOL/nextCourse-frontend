import React, { Component } from 'react';

import '../css/Result.css';
import WithAuth from '../api/WithAuth'
import {get_next_course} from '../api/YelpAPI'
import MapContainer from '../components/MapContainer'


class Result extends Component {
  constructor(props){
		super(props)
		this.state = {
			status: 'loading',
			result: '',
      address: '',
      lat: '',
      lng: ''
		}
	}

  componentWillMount() {

    get_next_course(this.props.userId,this.props.groupId)
      .then(json => {
        console.log(json);
        this.setState({
          status: "loaded",
          result: json
        })

        if (json.status === 500)
        {
            alert ("Sorry, there is no matching criteria.  Please try again with different location")
            this.props.history.replace('./feed')
        }
        else {
          let address = ''
          this.state.result.location.display_address.forEach(function(element) {
                   address += element
                   address += ' \n'
          })

          this.setState({
            address: address,
            lat: this.state.result.coordinates.latitude,
            lng: this.state.result.coordinates.longitude
          })
        }
    })
  }

  render() {

    return (
        <div>
		        <h1 id="result-head"> {this.state.result.name} </h1>
		        <div id="info-section" className="col-xs-6 pull-left">
			        <br/>
			         Price: {this.state.result.price}
			        <br/>
			         Phone: {this.state.result.display_phone}
			        <br/>
			         Address: {this.state.address}
			        <br/>
			        <br/>
		          <img id="pic-section" src={this.state.result.image_url} /><br/>
							View on <a href={this.state.result.url} > yelp </a>
						</div>
						<div id="map-section" className="col-xs-6">
		        {this.state.lng &&
		          <MapContainer lng={this.state.lng} lat={this.state.lat}/>
		        }
						</div>
        </div>
    )
  }

}
export default WithAuth(Result);
