import React from "react";
import style from "./style";

import profilePicture from "../../resources/omakuva.jpg";

class RoundImage extends React.Component {

    render() {
        return(
            <img src={profilePicture} style={style} alt="The author of this site"/>
            
        );
    }
}
export default RoundImage;