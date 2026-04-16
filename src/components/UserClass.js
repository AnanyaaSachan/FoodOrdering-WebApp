import React from "react";

class UserClass extends React.Component {

    constructor(){
        super();

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Dummy",
            },
        };

    
        console.log("constructor called")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AnanyaaSachan");
        const json = await data.json();
          
        this.setState({
            userInfo : json,
        });
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    render(){

        console.log("rendered")

        const {name,location,avatar_url} = this.state.userInfo;
    

        return(
        <div className="user">
             <img src={avatar_url}/>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>shubhi@gmail.com</h3>
           
        </div>
        )
    }
}


export default UserClass;