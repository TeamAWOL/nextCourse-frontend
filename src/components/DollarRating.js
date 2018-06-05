import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from 'react-star-rating-component';
import '../css/CreateGroup.css';

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
          <div className="select-price">
            <p>Select Price: </p>
          </div>
            <div className="StarRating">
            <StarRating
                name="price"
                renderStarIcon={() => <span>$</span>}
                starCount={4}
                starColor= "green"
                emptyStarColor="grey"
                star-size="70"
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
            />
            </div>
          </div>
        );
      }
    }


export default DollarRating
