import React, { Component } from "react";
class PageLoader extends Component {
	componentDidMount() {
		setTimeout("window.location='/home/'", 2000);
	}

	render() {
		return (
			<div className="page-loader">
				<img src="/images/cave.png" alt="cave" className="cave-logo" />
				<h3 className="logo-text" style={{ opacity: 0 }}>
					The Recipe Cave
				</h3>
			</div>
		);
	}
}
export default PageLoader;
