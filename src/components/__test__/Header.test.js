import { fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Header from "../Header";



it("Should render header component with a login button",()=>{
    render(
     <BrowserRouter>
     <Provider store={appStore}>
      <Header />
     </Provider>
     </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render header component with a Cart : (0 items)",()=>{
    render(
     <BrowserRouter>
     <Provider store={appStore}>
      <Header />
     </Provider>
     </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart : (0 items)")

    expect(cartItems).toBeInTheDocument();
});

it("Should render header component with a cart items",()=>{
    render(
     <BrowserRouter>
     <Provider store={appStore}>
      <Header />
     </Provider>
     </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click",()=>{
    render(
     <BrowserRouter>
     <Provider store={appStore}>
      <Header />
     </Provider>
     </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
});

it("Should render the login button",()=>{
    render(
     <BrowserRouter>
     <Provider store={appStore}>
      <Header />
     </Provider>
     </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
});