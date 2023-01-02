import React from "react";
import BasicText from "../BasicText/BasicText";
import Button from "../Button/Button";
import NavBarStyle from "./style";
import {BiMenu} from "react-icons/bi";

class NavBar extends React.Component {

    render() {
        return(
            <div style={NavBarStyle}>
                <BasicText textSize="23px" textColor="#ffffff">{this.props.title}</BasicText>
                <Button onClick={() => {this.props.onButtonClick()}}><BiMenu size={"1.3em"}/></Button>
            </div>
        );
    }
}

export default NavBar;