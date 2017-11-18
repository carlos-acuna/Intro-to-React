import React, {Component} from 'react';
import Album from '../Album';
import * as api from '../../api';

class Main extends Component{
  state={
    albums:{},
    photos:{}
  } 
  componenWillMount(){
    this.state({
      albums: api.getAlbums(),
      photos: api.getPhotos(),
    });
  }

render() {
  return (
    <Album album={this.state.albums['album1']} 
          albumPhotos={Array.from(this.state.photos)} 
          />
  );
}

}
export default Main;
