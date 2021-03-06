import React from "react";
import { useHistory } from "react-router-dom";

/**
 * Page Loader shows animated logo intro
 * Pushes location to "home" after 2 sec.
 */

function PageLoader() {
	const history = useHistory();
	setTimeout(() => {
		history.push("/home");
	}, 2000);

	return (
		<div className="page-loader">
			<img src="/images/cave.png" alt="cave" className="cave-logo" />
			<h3 className="logo-text" style={{ opacity: 0 }}>
				The Recipe Cave
			</h3>
		</div>
	);
}
export default PageLoader;
