import React from "react";
import { ImCircleDown } from "react-icons/im";

import { Button, BasicText, Background, RoundImage } from "../../components";
import VerticalContentContainer from "../VerticalContentContainer/VerticalContentContainer";
import "./anim.css";

class Header extends React.Component {

    render() {
        return(
        <div style={{height: "100%", width: "100%", zIndex:"3"}}>
            <Background/>
            <div style={{display: "flex", flexDirection:"column", justifyContent:"space-between safe", alignItems:"center",
                      height:"100%", width:"100%"}}>
                    <BasicText textColor="#ffffff" textSize="20px">Hello my name is</BasicText>
                    <BasicText textColor="#ffffff" textSize="30px">Emil Kelhälä</BasicText>
                <div className="explore-button" style={{}}>
                    <Button onClick={()=>{
                    this.props.titleChangeFunc(0);
                    this.props.contentScrollRef.current.scrollIntoView();
                    }}><ImCircleDown size={"1.2em"}/></Button>
                </div>
            </div>
      </div>
        );
    }
}

export default Header;