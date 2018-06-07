import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from 'react-star-rating-component';
import '../css/CreateGroup.css';

class DollarRating extends React.Component {
  render() {
    return (
      <div>
        <div className="select-price">
          <p>Select Price: </p>
        </div>
        <div className="StarRating">
          <StarRating
            name="price_range"
            renderStarIcon={() => <span>$</span>}
            starCount={4}
            value={1}
            starColor= "green"
            emptyStarColor="grey"
            onStarClick={this.props.handler}
          />
        </div>
        </div>
    )
  }
}


export default DollarRating
