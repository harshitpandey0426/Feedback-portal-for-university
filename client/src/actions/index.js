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

export const submitSurvey = (values , history ) => async dispatch =>
{
    // values is the data we want to send to the backend
    // history is used with push to navigate to /survey after request is successful i.e. after clicked on send survey
    const res = await axios.post('/api/surveys',values );
    history.push('/surveys');
    // fetuser to update credits
    dispatch({ type: FETCH_USER,payload: res.data});


};



export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');


    dispatch({ type: FETCH_SURVEYS , payload : res.data });
} ;
