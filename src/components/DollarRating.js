import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from 'react-star-rating-component';

class DollarRating extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <p>Preferred Price: </p>
        <StarRating
            name="price"
            renderStarIcon={() => <span>$</span>}
            starCount={4}
            starColor= "green"
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}


export default DollarRating
