import React from 'react';

function CreditCard (props) {
    

    return ( 
        <div>
            <h5> {props.type} </h5>
            <h5> {props.number} </h5>
            <h5> {props.expirationMonth} </h5>
            <h5> {props.expirationYear} </h5>
            <h5> {props.bank} </h5>
            <h5> {props.owner} </h5>
            <h5> {props.bgColor} </h5>
            <h5> {props.color} </h5>
        </div>
    ) 
        
    
}


export default CreditCard;