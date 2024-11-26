import React from "react";
import './PriceCard.css'; //this is for styling

//the  PriceCard component that takes props for dynamic data
const PriceCard =({title,price,features,buttonText}) => {
    return(
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <h2 className="card-price">{price}</h2>
            <ul className="card features">
                {features.map((feature,index) => ( 
                    <li key ={index}
                    className={feature.included ? 'feature' : 'feature disabled'}
                    >
                    ✔️{feature.text}
                    </li>
                ))}
            </ul>
            <button className="card-button">{buttonText}
            </button>
        </div>
    );
};

export default PriceCard;
