import loggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const allReducers = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer
})

export default allReducers;