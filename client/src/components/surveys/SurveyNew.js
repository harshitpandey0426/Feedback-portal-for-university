//survey new shows surveyform 
//  and surveyformreview
import React , { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

    // this initialises state
    state = { showFormReview : false };//this is equivalent to making a consturctr and super and using this.state as done on react side

    renderContent() {
        if(this.state.showFormReview === true){
            return <SurveyFormReview onCancel = {() => this.setState({ showFormReview : false  })}/>;
        }
        // else
        return <SurveyForm 
        onSurveySubmit = {() => this.setState({ showFormReview : true })}// after clicking submit showFormReview will be true and showFormReview page will be called 
         />;
    } 
    render() {
        return (
           <div>
               {this.renderContent()}
           </div> 
        );
    }
}

// if we goto any other page or press cancel all the values should be dumped that is what we are doing here
// if the user goes away from survetNew we will clear all the values
export default redux({
    form: 'survetForm'
})(SurveyNew);