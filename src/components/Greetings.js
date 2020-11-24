import React from 'react';

class Greetings extends React.Component {
    render() {
let greeting = 'Olá'
if(this.props.lang === 'de') {
    greeting = 'Hallo'
} else if(this.props.lang === 'fr') {
    greeting = 'Bonjour' 
} else if(this.props.lang === 'en') {
    greeting = 'Hello'
} else if(this.props.lang === 'es') {
    greeting = 'Hola'
}

        return (
            <div>
                <h4>{greeting} {this.props.children}</h4>
            </div>
        )
    }
}

export default Greetings;