import React, { Component } from 'react';
import '../Styles/AddProperty.css'


class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      newListing: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static defaultProps = {
    locations: ['London', 'New York', 'Hong Kong']
  }

  handleSubmit(event){
    this.setState({ newListing: {
      title: this.refs.title.value,
      price: this.refs.price.value,
      location: this.refs.location.value,
      image: this.refs.image.value
    }}, function() {
      this.props.addListing(this.state.newListing);
    })
    event.preventDefault()
  };

  render() {
    let locationOptions = this.props.locations.map(location => {
      return <option key={location} value={location}>{location}</option>
    });

    return (
      <div>
        <h3> Add Property </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Property Title </label>
            <input type='text' ref='title' />
            <br />

            <label> Rent per Night </label>
            <input type='number' ref='price' />
            <br/>

            <label> Location </label>
            <select ref='location'>
              {locationOptions}
            </select>
            <br />

            <label> Image URL </label>
            <input type='url' ref='image' />
            <br />

            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProperty;
