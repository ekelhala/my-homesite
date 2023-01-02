import React from "react";
import style from "./style";

import './style.css';

class Menu extends React.Component {

    render() {
        return(
        <div className={(this.props.display ? "menu-visible" : "menu-hidden")} id="menu">
        <div style={style}>
            <ul>
                <li className="menu-item" onClick={() => {this.props.changeView(0)}}>Welcome</li>
                <li className="menu-item" onClick={() => {this.props.changeView(1)}}>About me</li>
                <li className="menu-item" onClick={() => {this.props.changeView(2)}}>Projects</li>
            </ul>
        </div>
            <div className="overlay"/>
        </div>
        );
    }
}

export default Menu;