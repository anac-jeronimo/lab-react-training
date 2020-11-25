import React from 'react';

function Rating(props) {
    let value = ''

    if(props.children) {
        value = Math.round(props.children)
    } else if(props.rating) {
        value = Math.round(props.rating)
    }

    
let emptyStar = '☆';
let fullStar = '★';

let stars = fullStar.repeat(value) + emptyStar.repeat(5 - value)

  return (
    <div>
      <h2>{stars}</h2>
    </div>
  );
}

export default Rating;
