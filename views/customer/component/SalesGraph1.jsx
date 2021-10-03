import React from "react";

function SalesGraphOneComponet(props) {
	return (
		<div className="card">
			{/* Custom tabs (Charts with tabs)*/}
			<div className="card-header">
				<h3 className="card-title">
					<i className="fas fa-chart-pie mr-1"></i>
					Sales
				</h3>
				<div className="card-tools">
					<ul className="nav nav-pills ml-auto">
						<li className="nav-item">
							<a
								className="nav-link active"
								href="#revenue-chart"
								data-toggle="tab"
							>
								Area
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#sales-chart" data-toggle="tab">
								Donut
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* /.card-header */}
			<div className="card-body">
				<div className="tab-content p-0">
					{/* Morris chart - Sales */}
					<div
						className="chart tab-pane active"
						id="revenue-chart"
						style={{ position: "relative", height: "300px" }}
					>
						<canvas
							id="revenue-chart-canvas"
							height="300"
							style={{ height: "300px" }}
						></canvas>
					</div>
					<div
						className="chart tab-pane"
						id="sales-chart"
						style={{ position: "relative", height: "300px" }}
					>
						<canvas
							id="sales-chart-canvas"
							height="300"
							style={{ height: "300px" }}
						></canvas>
					</div>
				</div>
			</div>
			{/* /.card-body */}
			{/* /.card */}
		</div>
	);
}

export default SalesGraphOneComponet;
