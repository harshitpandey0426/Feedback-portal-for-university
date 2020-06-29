import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { STATES } from 'mongoose';

class Header extends Component {
    renderContent(){
        switch(this.props.auth){
           case null: //deciding what to do
               return ;
           case false:
                return ( // login to our application
               <li>
                   <a href="/auth/google">
                        LogIn With Google
                   </a>
               </li>     
                );
           default: //logout should be displayed then
               return (
               <li>
                   <a href="/api/logout">
                       Logout
                   </a>

               </li>
               );
            }
    }
    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily

                    </a>
                    <ul className="right">
                        <li>
                            <a>Login with Google</a>
                        </li>
                    </ul>

                </div>
            </nav>

        )
    }
    
}
function mapStateToProps({ auth }) {
    return { auth };
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs
export default connect(mapStateToProps)(Header);
