import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserEntityService from './services/UserEntity.service';
import JSONPretty from 'react-json-pretty';

class App extends Component {
  componentDidMount (){
    this.userentity = new UserEntityService();
  }
  render() {
    const { userentity } = this.props;
    console.log (userentity);
		return(
      <JSONPretty json={this.userentity} />
    )
  }
}

const mapStateToProps = (store) => {
	return {
    userentity: store.userentity.userentityState.userentity,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);