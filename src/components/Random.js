import React from 'react';

class Random extends React.Component {

    render() {
        function getRandom(min, max) {
          return Math.floor(Math.random() * max) + min  
        }
        
        return (
            <div>
           {` Random value between ${this.props.min} and ${this.props.max} => ${getRandom(this.props.min, this.props.max)}  ` }
            </div>
        )
    }
}

export default Random;