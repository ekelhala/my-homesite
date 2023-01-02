import React from "react";

import {ContentContainer, VerticalContentContainer} from "../../containers"
import { BasicText, Button, RoundImage } from "../../components";
import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

class Content extends React.Component {

    linkedInLink = "https://www.linkedin.com/in/emil-kelh%C3%A4l%C3%A4-7879a7252/";
    instagramLink = "https://www.instagram.com/emilkelhala/";
    githubLink = "https://github.com/ekelhala";

    render() {
        return(
            <div ref={this.props.scrollRef} style={{height: "100%", overflowY: "scroll", zIndex:"3"}}>
                    <ContentContainer>
                        <div style={{height: "100px", width: "100%"}}/>
                        <RoundImage/>
                        <BasicText textSize="20px" textColor="#ffffff">Who am I?</BasicText>
                        <div style={{width: "50%", rowGap: "5px"}}>
                        <BasicText textSize="17px" textColor="#ffffff">I am Emil, a 21
                        years old university student from Finland. From young age I have been fascinated
                        by computers and programming. I love trying new things in my personal as well
                        as in my professional life. This drive to learn and explore has helped me develop a habit
                        of educating myself constantly. So far I have made projects in Java, Python, React (even this 
                        website!) and Android.</BasicText>
                        </div>
                        <BasicText textSize="15px" textColor="#ffffff">Find me also on:</BasicText>
                        <VerticalContentContainer>
                            <Button onClick={()=>window.location.href = this.linkedInLink}><FaLinkedinIn size={"1.3em"}/></Button>
                            <Button onClick={()=>window.location.href = this.githubLink}><FaGithub size={"1.3em"}/></Button>
                            <Button onClick={()=>window.location.href = this.instagramLink}><FaInstagram size={"1.3em"}/></Button>
                        </VerticalContentContainer>
                        <div style={{height: "50px", width: "100%"}}/>
                    </ContentContainer>
            </div>
        );
    }
}

export default Content;