import { render , screen} from "@testing-library/react";
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