import { render,screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card components with props Data" , () => {
   
    render(<RestaurantCard resData= {MOCK_DATA} />);

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();
});

it("Should render Restaurant component with Promoted Label", ()=>{
     const PromotedRestaurant = withPromotedLabel(RestaurantCard);
     
     render(<PromotedRestaurant resData={MOCK_DATA} />);

     const label = screen.getByText("Promoted");

     expect(label).toBeInTheDocument();

})