import React from "react";

class BasicText extends React.Component {

    style;

    constructor(props) {
        super(props);
        this.style = {
            fontFamily: "Tahoma",
            fontWeight: "bold",
            fontSize: props.textSize,
            color: props.textColor,
        };
    }

    render() {
        return(
            <p style={this.style}>{this.props.children}</p>
        );
    }
}

export default BasicText;