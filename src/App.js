 
 import "../index.css";
 import React,{ lazy,Suspense, useEffect, useState } from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header";
 import Body from "./components/Body";
 import About from "./components/About";
 import Contact from "./components/Contact";
 import Error from "./components/Error";
 import { createBrowserRouter, RouterProvider,  Outlet } from "react-router-dom";
 import RestaurantMenu from "./components/RestaurantMenu";
 const Grocery = lazy(()=>import("./components/Grocery"));
 import UserContext from "./utils/UserContext";


const AppLayout = () => {
  
  const [ userName, setUserName ] = useState();
  //Authentication tool
  useEffect( () => {
     // Make and API call and send username and password
     const data = {
       name : "Ananya Sachan"
     }
     setUserName(data.name);
  },[]);


  return (
   <UserContext.Provider value={{ loggedInUser : userName }}>
  <div className="App">
    <UserContext.Provider value={{ loggedInUser : "deepika"}}>
    <Header />
    </UserContext.Provider>
   < Outlet />
  </div>
  </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
         path: "/about",
         element: <About />,
      },
      {
         path: "/contact",
         element: <Contact/>,
      },
      { path: "/restaurant/:resId",
            element: <RestaurantMenu/>,
      },
       {
         path: "/Grocery",
         element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
       
    ],
    errorElement: < Error />,
    
  },
 
]);


 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter}/>);