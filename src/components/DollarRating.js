import React from 'react';
import StarRating from 'react-star-rating-component';
import '../css/CreateGroup.css';

class DollarRating extends React.Component {
  render() {
    return (
      <div>
        <div className="select-price">
          Select Price:&nbsp;
        </div>
        <div className="StarRating">
          <StarRating
            name="price_range"
            renderStarIcon={() => <span>$</span>}
            starCount={4}
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
