// Importaciones
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(thunk));

// El thunk sirve para que podamos hacer acciones con promesas. Notita ya que no sabía eso

export default store;