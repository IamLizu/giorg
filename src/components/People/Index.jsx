import React from "react";
import "./Index.css";

export default class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }
    componentDidMount(){
        (async () => {
            const rawData = await fetch(`https://api.github.com/orgs/${this.props.org}/public_members`);
            const data = await rawData.json();
            this.setState({
                people: data
            })
        })();
    }

    render() {
        const members = this.state.people.map(u => {
            if(this.state.people.length !== 0){
                return(
                    <a key={u.id} href={u.html_url}>
                        <img className="memberAvatars" src={u.avatar_url} alt={u.login} width="45px"/>
                    </a>
                );
            }
        })

        return(
            <div className="peopleContainer">
                <p>We are</p>
                {members}
            </div>
        );
    }
}