import React from "react";
import './App.css';
import PriceCard from "./component/pricecard";

function App() {
    //data for the price cards
    const cardsData =[
      {
        title :'FTEE',
        price  :'$0/month',
        features :[
          { text :'Single User',
            included :true },
            {  text : '50GB Storage',
            included : true },
            {  text : 'Unlimited Public Projects',
              included : true },
              {  text : 'Community Access',
                included : true },
                {  text : 'Unlimited Privete Projects',
                  included : false },
                  {  text : 'Dedicated Phone Support',
                    included : false},
                    {  text : 'Free Subdomain',
                      included : false },
                      {  text : 'Monthly Status Reports',
                        included : false },
        ],
        buttonText :'BUTTON',
      },
      {
        title :'PLUS',
        price  :'$9/month',
        features :[
          { text :' 5 User',
            included : true },
            {  text : '50GB Storage',
            included : true },
            {  text : 'Unlimited Public Projects',
              included : true },
              {  text : 'Community Access',
                included : true },
                {  text : 'Unlimited Privete Projects',
                  included : true },
                  {  text : 'Dedicated Phone Support',
                    included : true},
                    {  text : 'Free Subdomain',
                      included : true},
                      {  text : 'Monthly Status Reports',
                        included : false },
        ],
        buttonText :'BUTTON',
      },
      {
        title :'PRO',
        price  :'$49/month',
        features :[
          { text :'Unlimited  User',
            included : true },
            {  text : '50GB Storage',
            included : true },
            {  text : 'Unlimited Public Projects',
              included : true },
              {  text : 'Community Access',
                included : true },
                {  text : 'Unlimited Privete Projects',
                  included : true},
                  {  text : 'Dedicated Phone Support',
                    included : true},
                    {  text : 'Free Subdomain',
                      included : true },
                      {  text : 'Monthly Status Reports',
                        included : true },
        ],
        buttonText :'BUTTON',
      
      },
    ];

    return(
      <div className="App">
        <div className="card-container">
          {cardsData.map((card,index) => (
            <PriceCard 
            key ={index}
            title={card.title}
            price={card.price}
            features={card.features}
            buttonText={card.buttonText}
            />
          ))}

        </div>

      </div>

    );

}
 export default App;