import React from "react"
import ReactDOM from "react-dom"

class Layout extends React.Component {
	constructor() {
		super();
		this.nombre = "Félix Méndez";
	}
	render() {
		return (
			<h1>Hola {this.nombre}</h1>
		);
	}
}

const app = document.getElementById("app");

ReactDOM.render(<Layout/>, app);