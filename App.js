
 import React from "react";
 import ReactDOM from "react-dom/client";

 /**
  * Header - Logo , nav bar
  * Body - Search, retuarantContainer(restro cards)
  * Footer - Copyright, links, address, contact
  */

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/premium-vector/logo-food-ordering-company-with-fork-speech-bubble-logo-lunch-delivery_1107171-4500.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
  
const RestaurantCard = (props)=>{
  const { resData } = props;

  const {
    cloudinaryImageId,
     name, 
     avgRating,
     cuisines, 
     costForTwo,
     deliveryTime
    } = resData?.data;
  return(
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
      cloudinaryImageId}
     />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>Rs.{costForTwo/100} FOR TWO</h4>
      <h4>{deliveryTime}mins</h4>
    </div>
    
  )
}

const resList = [
  {"type": "restaurant",
  "data": {
    "type": "F",
    "id": "334475",
    "name": "KFC",
    "uuid": "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
    "city": "1",
    "area": "BTM Layout",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "slaString": "36 MINS",
    "lastMileTravel": 3.5,
    "slugs": {
      "restaurant": "kfc-btm-layout-btm",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
    "locality": "2nd Stage",
    "parentId": 547,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,

    "tradeCampaignHeaders": [],

    "aggregatedDiscountInfo": {
      "header": "FREE DELIVERY",
      "shortDescriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [
        {
          "meta": "Free Delivery",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],

    "chain": [],

    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },

    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },

    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",

    "adTrackingID": "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",

    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },

    "lastMileTravelString": "3.5 kms",
    "hasSurge": false,

    "sla": {
      "restaurantId": "334475",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "lastMileTravel": 3.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },

    "promoted": true,
    "avgRating": "3.8",
    "totalRatings": 500,
    "new": false,

    "subtype": "basic"
  }
  },
  { "type": "restaurant",
  "data": {
    "type": "F",
    "id": "567890",
    "name": "Meghana Foods",
    "uuid": "meghana-1234-uuid-5678",
    "city": "1",
    "area": "BTM Layout",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "eillc7d7hbrzcuussus5",
    "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian",
      "Chinese",
      "Seafood"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 29,
    "minDeliveryTime": 29,
    "maxDeliveryTime": 29,
    "slaString": "29 MINS",
    "lastMileTravel": 3.2,
    "slugs": {
      "restaurant": "meghana-foods-btm",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "Meghana Foods, BTM Layout, Bangalore",
    "locality": "BTM Layout",
    "parentId": 12345,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,

    "tradeCampaignHeaders": [],

    "aggregatedDiscountInfo": {
      "header": "",
      "shortDescriptionList": [],
      "descriptionList": [],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [],
      "descriptionList": [],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "ribbon": [],

    "chain": [],

    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },

    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },

    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",

    "adTrackingID": "",

    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },

    "lastMileTravelString": "3.2 kms",
    "hasSurge": false,

    "sla": {
      "restaurantId": "567890",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "lastMileTravel": 3.2,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },

    "promoted": false,
    "avgRating": "4.4",
    "totalRatings": 1000,
    "new": false,

    "subtype": "basic"
  }
  },
  { "type": "restaurant",
  "data": {
    "type": "F",
    "id": "678901",
    "name": "Kannur Food Point",
    "uuid": "kannur-uuid-6789",
    "city": "1",
    "area": "BTM Layout",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
    "cuisines": [
      "Kerala",
      "Chinese"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 31,
    "minDeliveryTime": 31,
    "maxDeliveryTime": 31,
    "slaString": "31 MINS",
    "lastMileTravel": 2.8,
    "slugs": {
      "restaurant": "kannur-food-point-btm",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "Kannur Food Point, BTM Layout, Bangalore",
    "locality": "BTM Layout",
    "parentId": 23456,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,

    "tradeCampaignHeaders": [],

    "aggregatedDiscountInfo": {
      "header": "",
      "shortDescriptionList": [],
      "descriptionList": [],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [],
      "descriptionList": [],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "ribbon": [],

    "chain": [],

    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },

    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },

    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",

    "adTrackingID": "",

    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },

    "lastMileTravelString": "2.8 kms",
    "hasSurge": false,

    "sla": {
      "restaurantId": "678901",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "lastMileTravel": 2.8,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },

    "promoted": false,
    "avgRating": "3.8",
    "totalRatings": 500,
    "new": false,

    "subtype": "basic"
  }
  },
  { "type": "restaurant",
  "data": {
    "type": "F",
    "id": "789012",
    "name": "Call Me Chow",
    "uuid": "callmechow-uuid-7890",
    "city": "1",
    "area": "BTM Layout",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/19/f733290c-0e71-4509-b655-54e790639c11_1209273.jpg",
    "cuisines": [
      "Chinese",
      "Pan-Asian"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 29,
    "minDeliveryTime": 29,
    "maxDeliveryTime": 29,
    "slaString": "29 MINS",
    "lastMileTravel": 3.0,
    "slugs": {
      "restaurant": "call-me-chow-btm",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "Call Me Chow, BTM Layout, Bangalore",
    "locality": "BTM Layout",
    "parentId": 34567,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,

    "tradeCampaignHeaders": [],

    "aggregatedDiscountInfo": {
      "header": "",
      "shortDescriptionList": [],
      "descriptionList": [],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [],
      "descriptionList": [],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },

    "ribbon": [],

    "chain": [],

    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },

    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },

    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",

    "adTrackingID": "",

    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },

    "lastMileTravelString": "3.0 kms",
    "hasSurge": false,

    "sla": {
      "restaurantId": "789012",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "lastMileTravel": 3.0,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },

    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 500,
    "new": false,

    "subtype": "basic"
  }
  }
  
]


const Body = () => {
  return (
    <div className="Body">
    <div className="search">Search</div>
    <div className="res-container">
      { resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData = {restaurant} />
      ))
      }
     
    </div>
   </div> 
  );
};


const AppLayout = () => {
  return (
  <div className="App">
    <Header />
    < Body />
  </div>
  );
};


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);