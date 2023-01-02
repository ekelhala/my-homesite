import React from "react";

import { BasicText, Background } from "../../components";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./anim.css";

class Header extends React.Component {

    render() {
        return(
        <div style={{height: "100%", zIndex:"3",}} ref={this.props.contentScrollRef}>
            <Background/>
            <div style={{width: "100%", height: "100%", display: "flex", alignContent: "center", justifyContent: "center",
                            top: "0", left: "0", position: "absolute"}}>
            <ContentContainer>
                <BasicText textColor={"#ffffff"} textSize={"19px"}>My name is</BasicText>
                <BasicText textColor={"#ffffff"} textSize={"45px"}>Emil Kelhälä</BasicText>
                <BasicText textColor={"#ffffff"} textSize={"19px"}>I create digital things for everyone</BasicText>
            </ContentContainer>
            </div>
        </div>
        );
    }
}

export default Header;