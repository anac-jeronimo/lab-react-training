import React from 'react';



class BoxColor extends React.Component {
    
    render () {

        let style = {
            width: "200px",
            height: "100px",
            backgroundColor: `rgb(  ${this.props.r}, ${this.props.g}, ${this.props.b} ) `
          };

          
        return (
            <div style={style} > rgb ( {this.props.r}, {this.props.g}, {this.props.b}) </div>
        )
    }
}

export default BoxColor; 

