import React from "react";
import "./Index.css"

export default class About extends React.Component {
    render() {
        return(
            <div className="aboutContainer">
                <h3 className="textStyle">{this.props.about}</h3>
            </div>
        );
    }
}