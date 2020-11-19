import React from 'react'

class Tile extends React.Component {
    render() {
        return <div style={{"width": 30, "height": 30, "backgroundColor": this.props.color,
                    "border": "2px solid black", "display": "inline-block"}}></div>
    }

}

export default Tile