import React, { Component } from 'react';
import {
	Grid, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'

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

    let group_name='poker'
		let friend_name='Friend1'
    let type = 'korean'
    let location = 'San diego'
    let price_range = '1'

    get_next_course(this.props.userId,group_name,friend_name,type,location,price_range)
      .then(json => {
        console.log(json);
        this.setState({
          status: "loaded",
          result: json
        })
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
    })
  }

  render() {

    return (
        <div>
		        <h1 id="result-head"> {this.state.result.name} </h1>
		        <div id="info-section" className="col-md-6 pull-left">
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
						<div id="map-section" className="col-md-6">
		        {this.state.lng &&
		          <MapContainer lng={this.state.lng} lat={this.state.lat}/>
		        }
						</div>
        </div>
    )
  }

}
export default WithAuth(Result);
