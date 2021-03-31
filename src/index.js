import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk' // usado para funções async nas actions quando for fazer o dispatch
// import reducers from './store/reducers/reducers'


// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

 const store = configureStore()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);