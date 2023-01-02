import React from "react";

import ContentContainerStyle from "./style";

class ContentContainer extends React.Component {

    render() {
        return(
            <div style={ContentContainerStyle}>{this.props.children}</div>
        );
    }
}

export default ContentContainer;