import React from 'react';
import PropTypes from 'prop-types';

export default class News extends React.Component {
	render() {
		return (
			<div>
				<p>Welcome to my app</p>
			</div>
		);
	}
}
News.PropTypes = {
	name: PropTypes.string.isRequired
};

