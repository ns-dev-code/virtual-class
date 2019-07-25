import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/index'


//const middleware = [thunk];

const store = createStore(
    rootReducer, 
    // initialState, 
    // applyMiddleware(...middleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default preloadedState => {
    return createStore(rootReducer, preloadedState, process.browser && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
};