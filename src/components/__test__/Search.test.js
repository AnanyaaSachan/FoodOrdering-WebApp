import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResList.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react"; 
import "@testing-library/jest-dom"


global.fetch = jest.fn(() =>{
     return Promise.resolve({
        json: () => {
           return Promise.resolve(MOCK_DATA)
        },
     });
});

it("Should render the body component with search button", async () => {
 await act ( async ()=> 
    render (
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    )   
 );

   const searchBtn = screen.getByRole("button", { name: "Search" });

   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput, { target: { value : "burger"} });

   fireEvent.click(searchBtn);

   const cards = screen.getAllByTestId("resCard");

   expect(cards.length).toBe(1);  

})

it("Should Filter the top rated restaurants", async() => {
    await act( async () => 
        render(
          <BrowserRouter>
             <Body />
          </BrowserRouter>
        )
    );
     
    const restuarantBeforeFilter =  screen.getAllByTestId("resCard");
    expect(restuarantBeforeFilter.length).toBe(14);

    const TopRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurant"});
    fireEvent.click(TopRatedBtn);

    const TopRatedRes = screen.getAllByTestId("resCard");
    expect(TopRatedRes.length).toBe(1);



});