import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import * as api from '../../api';
import { AlbumList } from '../Album';
import { PhotoList } from '../Photo';
import Login from '../Login';
import { Message } from 'semantic-ui-react'

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
     <Switch>
     <Route exact path="/" component={Login} />
     <Route path="/albums" />
     <Route path="/photos" />
     <Route path="/login" render={Login} />
   </Switch>
  );
}

}
export default Main;
