import React from 'react';

class IdCard extends React.Component {
    render() {
        return (
            <div>
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                    <h5 class="card-title">{this.props.lastName}</h5>
                    <h5 class="card-title">{this.props.firstName}</h5>
                    <h5 class="card-title">{this.props.gender}</h5>
                    <h5 class="card-title">{this.props.height}</h5>
                    <h5 class="card-title">{this.props.birth.toDateString()}</h5>
                    <img src={this.props.picture} class="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
        )
    }
}

export default IdCard;