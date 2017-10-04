import React, { Component } from 'react';
import '../Styles/PropertyItem.css'

class PropertyItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="PropertyItem">
        <strong>{this.props.property.title}</strong>:    ${this.props.property.price} <br/>
        {this.props.property.location} <br/>
        <img src={this.props.property.image} width='250' height='150' alt={this.props.property.title} />
      </li>
    );
  }
}

export default PropertyItem;
