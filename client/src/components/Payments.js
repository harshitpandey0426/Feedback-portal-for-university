import React,{ Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Payments extends Component{
    render(){
        return(
            <StripeCheckout 
            name = "Emaily"
            description=  "5$ for  email credits"
            amount = {500}
            //token is expecting to receive a callback function here, and that call back function will be called after we have succefully rerieved a autherization token from stripe API
            token = {token => this.props.handleToken(token)} //will call this action
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">
                Add Credits
            </button>
            </StripeCheckout>
        );
    }
}


export default connect(null,actions) (Payments); // to let action work, connecting react and redux