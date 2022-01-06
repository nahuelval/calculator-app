import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export class CalculatorButton extends React.Component {

    // Defines the name of the button when it's sent to the Pad.js file
    constructor(props) {
        super(props);
        this.state = {
            button: this.props.name
        }
    }

    render() {
        return (
            <div className="container text-center">
                <button onClick={this.props.customClickEvent} className="btn btn-default button-calculator">{this.props.name}</button>
            </div>
        )
    }
}