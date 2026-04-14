import { useState } from "react";

const User = (props) =>{

    const [count] = useState("0")
    return(
        <div className="user"> 
            <h2>{props.name}</h2>
            <h3>Greater Noida</h3>
            <h3>shubhi@gmail.com</h3>
            <h3>Count: {count}</h3>
        </div>
    )
}

export default User;