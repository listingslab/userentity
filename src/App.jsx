import React, { Component } from 'react';
import Fingerprint from 'fingerprintjs2';
import UAParser from 'ua-parser-js';

const fpInstance = new Fingerprint(
  { preprocessor: function(key, value) {
      if (key === "user_agent") {
        var parser = new UAParser(value);
        var userAgentMinusVersion = parser.getOS().name + ' ' + parser.getBrowser().name
        return userAgentMinusVersion
      } else {
        return value
      }
    }
  }
);

class App extends Component {
  constructor(){
		super();
		this.state = {result: null};
  }
  
  componentWillMount(){
		const stuff = this;
		fpInstance.get((result, components)=> {
        console.log(result, components)
				stuff.setState(
          {fpsignature: result}
        );
		});
	}

  render() {
    const {fpsignature} = this.state;
		if( ! fpsignature ) {
			return (<div> waiting ...  </div>);
		}
		return(
			<div style={{'textAlign':'center'}}>
				<br/>
				<br/>
				<span> Device FingerPrint </span>
				<hr />
				<h1> {fpsignature} </h1>
			</div>);
  }
}

export default App;