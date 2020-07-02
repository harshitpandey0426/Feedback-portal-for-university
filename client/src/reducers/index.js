import { combineReducers } from 'redux';
import {reducer as reduxForm} from 'redux-reducer';
import authReducer from './authReducer';

export default combineReducers({

    auth : authReducer,
    form: reduxForm
}); 
