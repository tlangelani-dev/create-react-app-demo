import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {

    handleClick(e) {
        console.log('Clicked...');
    }

    render() {
        return (<button onClick={this.handleClick} className="btn">Go</button>);
    }
}

export default Button;
