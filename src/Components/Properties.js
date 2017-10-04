import React, { Component } from 'react';
import '../Styles/Properties.css'
import PropertyItem from './PropertyItem'

class Properties extends Component {
  render() {

    let propertyItems;
      if(this.props.properties){
        propertyItems = this.props.properties.map(property => {
          return(
            <PropertyItem key={property.title} property={property}/>
          )
        });
      }

    console.log(this.props);
    return (
      <div className="Properties">
        {propertyItems}
      </div>
    );
  }
}

export default Properties;
