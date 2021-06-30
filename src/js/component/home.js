import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				<Card />
			</div>
			<div className="col"></div>
		</div>
	);
}
