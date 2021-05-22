import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux' //1

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
//import { titleReducer } from './reducers/titleReducer';//2
import reducer from './reducers'


const store = createStore(reducer)//3

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);//4
