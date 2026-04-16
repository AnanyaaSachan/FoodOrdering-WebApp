import {LOGO_URL} from "../utils/constant"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
 
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();


  return(
    <div className= "flex justify-between items-center px-8 py-4 bg-red-50 shadow-md sticky top-0 z-50">
      <div className="logo-container">
        <img className="w-28" src= { LOGO_URL }
        />
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 font-medium text-gray-700">
            <li>
        Online Status: {onlineStatus ? "✅" : "🔴"}
      </li>

      <li className="hover:text-red-500 cursor-pointer">
        <Link to="/">Home</Link>
      </li>

      <li className="hover:text-red-500 cursor-pointer">
        <Link to="/about">About</Link>
      </li>

      <li className="hover:text-red-500 cursor-pointer">
        <Link to="/contact">Contact</Link>
      </li>

      <li className="hover:text-red-500 cursor-pointer">
        Cart
      </li>

      <li className="hover:text-red-500 cursor-pointer">
        <Link to="/grocery">Grocery</Link>
      </li>


      
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
           onClick={() => {
             btnNameReact === "Login" 
             ? setBtnNameReact("Logout") 
             : setBtnNameReact("Login");
           }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};


export default Header;