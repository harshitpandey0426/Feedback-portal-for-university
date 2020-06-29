import axios from 'axios';
import { FETCH_USER } from './types';



export const fetchUser = () => async dispatch => {
       const res =  await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER,payload: res.data});
    };

export const handleToken = (token) => async dispatch => {// action for payments
    const res = await axios.post('./api/stripe',token);  //it will get data from this url,post request to send some information
    dispatch({ type: FETCH_USER,payload: res.data}); // send back same data model
} ;
