import React, { Component } from 'react';
import { translate } from "react-i18next";

class MyComponent extends Component {
	render() {
		const { t, name } = this.props;
		console.log(`${name} renders`);
		return t("not yet loaded");
	}
}

export default translate()(MyComponent);
