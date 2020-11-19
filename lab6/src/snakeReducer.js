export default function snakeReducer(state={snake: [{x:1, y:1},{x:1, y:2},{x:1, y:3}], width: 12, height: 10}, action){
    let newState;
    switch(action.type){
        case 'MOVE_LEFT':
            newState = {snake: [], width: state.width, height: state.height}
            if(state.snake[0].y>0){
                newState.snake.push({x:state.snake[0].x,y:state.snake[0].y-1})
                for(let i=1; i<state.snake.length; i++){
                    newState.snake.push({x:state.snake[i-1].x, y:state.snake[i-1].y})
                }
                return newState;
            }
            else{
                return state;
            }
        case 'MOVE_RIGHT':
            newState = {snake: [], width: state.width, height: state.height}
            if(state.snake[0].y<state.height-1){
                newState.snake.push({x:state.snake[0].x,y:state.snake[0].y+1})
                for(let i=1; i<state.snake.length; i++){
                    newState.snake.push({x:state.snake[i-1].x, y:state.snake[i-1].y})
                }
                return newState;
            }
            else{
                return state;
            }
        case 'MOVE_UP':
            newState = {snake: [], width: state.width, height: state.height}
            if(state.snake[0].x>0){
                newState.snake.push({x:state.snake[0].x-1,y:state.snake[0].y})
                for(let i=1; i<state.snake.length; i++){
                    newState.snake.push({x:state.snake[i-1].x, y:state.snake[i-1].y})
                }
                return newState;
            }
            else{
                return state;
            }
        case 'MOVE_DOWN':
            newState = {snake: [], width: state.width, height: state.height}
            if(state.snake[0].x<state.width-1){
                newState.snake.push({x:state.snake[0].x+1,y:state.snake[0].y})
                for(let i=1; i<state.snake.length; i++){
                    newState.snake.push({x:state.snake[i-1].x, y:state.snake[i-1].y})
                }
                return newState;
            }
            else{
                return state;
            }
        default:
            return state;
    }
}