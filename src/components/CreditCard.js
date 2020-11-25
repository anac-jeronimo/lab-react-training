import React from 'react';

function CreditCard (props) {
    

    return ( 
        <div>
            <div className="card" style={{width: "550px", height: "300px"}} >
            <div className="card-body">
            <div>
            <h5 className="card-title"> {props.type} </h5>
            </div> 
            <h5 className="card-title"> {props.number} </h5>
            <h5 className="card-title"> {props.expirationMonth} </h5>
            <h5 className="card-title"> {props.expirationYear} </h5>
            <h5 className="card-title"> {props.bank} </h5>
            <h5 className="card-title"> {props.owner} </h5>
            <h5 className="card-title"> {props.bgColor} </h5>
            <h5 className="card-title"> {props.color} </h5>
            </div>
            </div>
        </div>
    ) 
        
    
}


export default CreditCard;