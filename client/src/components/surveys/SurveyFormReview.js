// survey form review show users about their review
// for this form we used redux
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields  from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


const SurveyFormReview = ({ onCancel , formValues , submitSurvey , history }) => {
    // formfields iis imported from another file
    // map works as written before
    const reviewFields = _.map(formFields , field => {
        return (
            <div key = {field.name}>
                <label>{field.label}</label>
                <div>
                    {/* values that user enetered */}
                    {formValues[field.name]}
                </div>
            </div>
        ); 
    });
    
    
    return (
        <div>
            <h5>Please confirm your Entries:</h5>
            {reviewFields}
            {/* show this review field */}
            {/* oncancel is passed as prop */}
            <button className = "yellow darken-3 white-text btn-flat" onClick = {onCancel}>
            Back
            </button>
            <button 
            onClick = {() => submitSurvey(formValues , history )}
            // history object passed to our action creator
            className="green  btn-flat right white-text"
            >
               Send Survey
               <i className="material-icons right">email</i> 
            </button>
        </div>
    );
};
//to pull out values from the redux store
function mapStateToProps(state) {
    // our all form values are here  state.form.surveyForm.values 
    // this values came from the 'form:surveyForm' put in reduxform, that was the purpose of using it
   return { formValues : state.form.surveyForm.values };
}
// whenever we call mapStateToProps function and pass it to connect function, whatever we return(return { formValues : state.form.surveyForm.values } will show as prop to our component(SurveyFormReview)
//  in other words 'formValues' this is passed as prop to SurveyFormReview
export default connect(mapStateToProps , actions )( withRouter(SurveyFormReview));
//  withRouter(SurveyFormReview is passed to let surveyformreview know about history object
// history object can be used to navigate around the application