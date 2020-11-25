import React from 'react';



class BoxColor extends React.Component {
    
    render () {

       /* let style = {
            width: "400px",
            height: "200px",
            backgroundColor: `rgb(  ${this.props.r}, ${this.props.g}, ${this.props.b} ) `
          };

          */
        return (
            //<div style={style} > rgb ( {this.props.r}, {this.props.g}, {this.props.b}) </div>
            <div style={{
                width: "400px",
                height: "200px",
                backgroundColor: `rgb(  ${this.props.r}, ${this.props.g}, ${this.props.b} ) `
              }}>
             <p>rgb ( {this.props.r}, {this.props.g}, {this.props.b})</p> 
            </div>
        )
    }
}

export default BoxColor; 

