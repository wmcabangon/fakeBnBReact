import React, { Component } from 'react';
import './App.css';
import Properties from './Components/Properties'
import AddProperty from './Components/AddProperty'

class App extends Component {
  constructor(){
    super();
    this.state = {
      properties: []
    }
    this.handleAddListing = this.handleAddListing.bind(this)
  }

  componentWillMount(){
    this.setState({properties:[
      {
        title: 'Makers Academy',
        price: 95,
        location: 'London',
        image: 'http://dontpaniconline.com/media/magazine/body/2015-04-10/images/20150409_MakersAcademy_0208.jpg'
      },
      {
        title: 'Buckingham Palace',
        price: 300,
        location: 'London',
        image: 'https://www.royal.uk/sites/default/files/images/feature/buckingham-palace.jpg'
      },
      {
        title: 'Trump Tower',
        price: 301,
        location: 'New York',
        image: 'https://static.dezeen.com/uploads/2016/11/trump-tower-las-vegas-tony-webster_dezeen_hero-852x479.jpg'
      }
    ]});
  }

  handleAddListing(newListing) {
    this.setState({ properties: [...this.state.properties, newListing]})
  }

  render() {
    return (
      <div className="App">
        <AddProperty addListing ={this.handleAddListing}/>
        <Properties properties={this.state.properties}/>
      </div>
    );
  }
}

export default App;
