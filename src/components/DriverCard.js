import React from 'react';
import Rating from './Rating';


function DriverCard (props) {
    return (
        <div>
            <div class="card" style={{width: "300px", backgroundColor: 'darkblue', height: '500px'}}>
            <div className="card-body">
            <img src={props.img} className= "card-img-top" alt="..."/>
            <h5 className="card-title"> {props.name} </h5>
            <Rating rating={props.rating} />
            <h5 className="card-title"> {props.car.model} </h5>
            <h5 className="card-title"> {props.car.licensePlate} </h5>
            </div>
            </div>
        </div>
    )
}


export default DriverCard;