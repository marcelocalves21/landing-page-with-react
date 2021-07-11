import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div style={{ width: "100%" }}>
				<Navbar />
			</div>
			<div className="m-3 p-3"></div>
			<div className="container-fluid m-1">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
