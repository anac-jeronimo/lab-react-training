import React from 'react';

class BoxColor extends React.Component {

    render() {
     
        return (
            <div>
                {` Random color ${this.props.} and ${this.props.max} => ${getRandom(this.props.min, this.props.max)}  ` }
            </div>
        )
    }
        
}
    


export default BoxColor;