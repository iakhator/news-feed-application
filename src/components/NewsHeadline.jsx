import React from 'react';

export default class NewsHeadline extends React.Component {
	render() {
		console.log(this.props.match.params.id);
		return (
			<h1>Headline</h1>
		);
	}
}