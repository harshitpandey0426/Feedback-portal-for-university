import { FETCH_USER } from '../actions/types';


//we will have three states null - if not sure
//return usermodel if logged in
// return false if unable to logged in
//state equal to null means we are not sure if user is logged in or not may be beacause of slow connection and return default untill we know clearly
export default function( state = null , action ){
    switch(action.type){
        case FETCH_USER:
            return action.payload || false ;
        default:
            return state;
    }

}
