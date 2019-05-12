import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index-reducer';

const configureStore = () => {
    const middleware = applyMiddleware(thunk);
    return createStore(rootReducer, middleware);
};

export default configureStore;
