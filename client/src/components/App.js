import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //Browserrouter tells the react router how to behave ,it sees the current url and then changes the set of component that are visible on the screen
//Route will form a relationship between url and actual component ot display
// Browserrouter can have just one children i.e one tag within itself
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions'; // take all actions and assign it to object name action
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                <div>
                    <Header />
                    <Route exact={ true } path="/" component={Landing}/>
                    <Route exact={ true } path="/Surveys" component={Dashboard}/>
                    <Route path="/Surveys/new" component={SurveyNew}/>

                </div>
                </BrowserRouter>
            
            </div>
        );
    }
};
export default connect(null, actions)(App);