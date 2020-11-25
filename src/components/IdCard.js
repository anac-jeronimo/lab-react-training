import React from 'react';

class IdCard extends React.Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.lastName}</h5>
                    <h5 className="card-title">{this.props.firstName}</h5>
                    <h5 className="card-title">{this.props.gender}</h5>
                    <h5 className="card-title">{this.props.height}</h5>
                    <h5 className="card-title">{this.props.birth.toDateString()}</h5>
                    <img src={this.props.picture} className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
        )
    }
}


export default IdCard;