import React from "react";
import ButtonStyle from "./style";

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick(event);
    }

    render() {
        return(
            <a style={ButtonStyle} onClick={this.handleClick}>{this.props.children}</a>
        );
    }
}

export default Button;