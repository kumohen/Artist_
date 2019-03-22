import React, { Component } from 'react';
import Banner from './Banner';
import ArtistList from './Artist_list';
import Footer from './Footer';
const URL_ARTIST = 'http://localhost:3004/artists'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists:''
    }
  }
  componentDidMount(){
    fetch(URL_ARTIST,{
      method:'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        artists:json
      })
    })
  }

  render() {
    return (
      <div className="Home">
        <Banner />
        <ArtistList allArtists={this.state.artists} />
        <Footer />
      </div>
    );
  }
}

export default Home;
