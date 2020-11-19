import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import snakeReducer from './snakeReducer';
import Board from './Board'

const store = createStore(snakeReducer, composeWithDevTools());

function App() {
  return (
    <Provider store = {store} >
      <Board/>
    </Provider>
  );
}

export default App;
