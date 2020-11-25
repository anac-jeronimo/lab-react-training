import React from 'react';

function Rating (props) {

    let star = 0;
    if(star.props === 0) {
        return ''
    } else if (star.props > 0 && star.props < 2) {
        return '**'
    } else if(star.props > 2 && star.props < 5) {
        return '*****'
    }
    
    math.floor(star === 0 ? '*****' : props.star === '*****')

    return (
        <div> 
            <h2> {star.props} {props.children} </h2>
        </div>
    )
}

export default Rating;