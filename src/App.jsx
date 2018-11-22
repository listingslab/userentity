import React, { Component } from 'react';
import UserEntityService from './services/UserEntity.service';
import JSONPretty from 'react-json-pretty';

class App extends Component {

  render() {
		return(
      <JSONPretty json={new UserEntityService().createUserEntity()} />
    )
  }

}

export default App;