import React, { Component } from 'react';

//Only from react 16

class ErrorBoundry extends Component {
	constructor(props) {
	super(props);
	this.state = {
		hasError: false,
		}
	}

	componentDidCatch (error, info) {
		this.setState({hasError: true});
		console.log(`the error is :${error} and further info: ${info}`);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooooops. That failed miserably.</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry
