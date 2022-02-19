/*import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//import {configureStore} from "@reduxjs/toolkit"
//import { Provider } from 'react-redux'
import userReducer from './reducers/user'
const store=configureStore(
    {
        reducer:{
            user:userReducer
        }
    }
)
ReactDOM.render(
<>
<Provider store={store}>
<App/>
</Provider>
<App></App>
</>,
document.getElementById("root"))*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import App from './App';


const store = createStore(
   reducer
)
render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)





