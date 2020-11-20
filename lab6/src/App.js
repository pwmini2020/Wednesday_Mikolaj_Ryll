import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import snakeReducer from './snakeReducer';
import Board from './Board'

const store = createStore(snakeReducer, composeWithDevTools());

function setFocus(){
  document.getElementById("mainDiv").focus();
}

function App() {
  return (
    <div onClick={setFocus} style={{"width":"100%", "height":"100%"}}>
      <Provider store = {store}>
        <Board/>
      </Provider>
    </div>
  )
}

export default App;
