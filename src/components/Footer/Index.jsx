import React from "react";
import "./Index.css"

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="footerContainer">
                <h4><a className="footerNameStyle" href="/">{this.props.name}</a></h4>
                <p>{this.props.tagline}</p>
            </footer>
        );
    }
}