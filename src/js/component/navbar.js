import React from "react";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark"
			style={{ width: "100%" }}>
			<a className="navbar-brand h1">Navbar</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span clasNames="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse d-flex justify-content-end"
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						About
					</a>
					<a className="nav-item nav-link" href="#">
						Service
					</a>
					<a className="nav-item nav-link" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
