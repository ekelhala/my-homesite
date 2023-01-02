import React from "react";
import BasicText from "../BasicText/BasicText";
import NavBarStyle from "./style";
import {BiMenu} from "react-icons/bi";
import BorderlessButton from "../BorderlessButton/BorderlessButton";

class NavBar extends React.Component {

    render() {
        return(
            <div style={NavBarStyle}>
                <BasicText textSize="23px" textColor="#ffffff">{this.props.title}</BasicText>
                <BorderlessButton onClick={() => {this.props.onButtonClick()}}><BiMenu size={"2em"}/></BorderlessButton>
            </div>
        );
    }
}

export default NavBar;