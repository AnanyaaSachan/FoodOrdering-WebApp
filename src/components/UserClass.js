import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
             count : 0,
        };
    }

    render(){
     const {name,location} = this.props;
     const {count} = this.state;

        return(
        <div className="user"> 
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>shubhi@gmail.com</h3>
            <h3> Count: {count}</h3>
            <button 
              onClick={() =>{
                 this.setState({
                     count : this.state.count +1,
                 });
              }}
             >               click
            </button>
        </div>
        )
    }
}


export default UserClass;