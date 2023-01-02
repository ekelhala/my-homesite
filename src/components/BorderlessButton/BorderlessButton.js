import React from "react";

import "./style.css";

class BorderlessButton extends React.Component {

    render() {
        return(
            <button className="borderless-button" onClick={() => {this.props.onClick()}}>{this.props.children}</button>
        );
    }
}

export default BorderlessButton;