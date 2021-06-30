import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
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
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							Features
						</a>
						<a className="nav-item nav-link" href="#">
							Pricing
						</a>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</p>
				</div>
				<div className="row">
					<div className="col-3">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://source.unsplash.com/collection/190727/286x180"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">lorem</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://source.unsplash.com/collection/190727/286x180"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">lorem</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://source.unsplash.com/collection/190727/286x180"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">lorem</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src="https://source.unsplash.com/collection/190727/286x180"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">lorem</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
