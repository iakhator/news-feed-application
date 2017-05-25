import React from 'react';
import News from './News';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: []
		};
	}
	render() {
		return (
			<div className="container">
				<h1>News Feed Application</h1>
				<News name={this.state.name} />
			</div>
		);
	}
}

