import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        hasGlasses: true
    }
    toggleHasGlasses = () => {
        this.setState({
            hasGlasses: !this.state.hasGlasses
        })
    }
    
    render () {
        return(
            <img src= {this.state.hasGlasses ? this.props.img : this.props.imgClicked} onClick = {this.toggleHasGlasses} /> 
        )
    }
}

export default ClickablePicture;