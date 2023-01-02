import React from "react";

import style from "./style";

class VerticalContentContainer extends React.Component {

    render() {
        return(
            <div style={style}>{this.props.children}</div>
        );
    }
}

export default VerticalContentContainer;