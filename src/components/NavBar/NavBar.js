import React from "react";
import BasicText from "../BasicText/BasicText";
import NavBarStyle from "./style";

class NavBar extends React.Component {

    render() {
        return(
            <div style={NavBarStyle}>
                <BasicText textSize="23px" textColor="#ffffff">{this.props.title}</BasicText>
            </div>
        );
    }
}

export default NavBar;