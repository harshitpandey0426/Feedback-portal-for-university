import React , { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Logo from "./req.jpg";


import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';




class App extends Component {
    componentDidMount(){
        this.props.fetchUser();

    }



// container will give us margin(of our concern, vaise to aur bhi kaam hai)
    render(){
        return (
            
            
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <img src={Logo} alt="website logo"/>
                    </div>
                </BrowserRouter>

        );
    }
};


export default connect(null,actions )(App);
