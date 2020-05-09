import React from "react";
import "./Index.css"

export default class Header extends React.Component {
    render(){
        return(
            <header className="headerContainer">
                <h1><a className="headerNameStyle" href="/">{this.props.name}</a></h1>
                <sup><p>{this.props.tagline}</p></sup>
            </header>
        );
    }
}