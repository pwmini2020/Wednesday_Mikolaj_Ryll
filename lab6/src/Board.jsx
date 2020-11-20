import React from 'react'
import {connect} from 'react-redux'
import Tile from './Tile'

const mapStateToPros = (state) => {
    return{
        snake: state.snake,
        width: state.width,
        height: state.height
    }
}

const move_left = {
    type: "MOVE_LEFT"
  }
  
const move_right = {
    type: "MOVE_RIGHT"
}

const move_up = {
    type: "MOVE_UP"
}

const move_down = {
    type: "MOVE_DOWN"
}


const mapDispatchToProps = (dispatch) => {
    return {
        pickKeyPressed: (event) => {
            console.log(event.key)
            if(event.key === 'w')
                dispatch(move_up)
            else if(event.key === 's')
                dispatch(move_down)
            else if(event.key === 'a')
                dispatch(move_left)
            else if(event.key === 'd')
                dispatch(move_right)
        }
    }
}

class Board extends React.Component{
    constructor(props){
        super(props)
        this.i = 0;
    }
    render(){
        return (
            <button id="mainDiv" onKeyPress={this.props.pickKeyPressed} autoFocus={true} style={{"backgroundColor":"white", "outline":"none"}}>
                {this.paint().map( (col) => <div key={this.i++} style={{"margin":"0,0,0,0"}}> {col.map((color) => <Tile key={this.i++} color={color} style={{"margin":"0"}}></Tile>)} </div>)}
            </button>     
        )
    }
    paint() {
        let grid = new Array(this.props.width);
        for (var i = 0; i < grid.length; i++) { 
            grid[i] = new Array(this.props.height);
            for (let j = 0; j < grid[i].length; j++)
                grid[i][j] = "white"
        }
        for (let s in this.props.snake) {
            grid[this.props.snake[s].x][this.props.snake[s].y] = "green"
        }
        return grid
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Board)