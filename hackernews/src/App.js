import React, {Component} from 'react';
import './App.css';

class App extends Component {
	render() {
		let text = 'This is my first react component.';
		let person = {
			firstName: "Abacus",
			lastName: "Subacus"
		};
		return (
			<div className="App">
				<h1>{text}</h1>

				<h3>
					My name is {person.firstName} and my family name is {person.lastName}.
				</h3>
			</div>
		);
	}
}

export default App;