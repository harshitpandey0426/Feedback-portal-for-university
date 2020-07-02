//survey form shows a form for a user to add input
//redux form is very similar to the connect function , it allows our componenet to communicate to the redux store at the top of our application that is enclosed by provider tag

// this.props.handleSubmitprovided by rex-form
import _ from 'lodash'; //has some helper functions
import React , { Component } from 'react';
import { reduxForm , Field } from 'redux-form';//filed comp prvided by redux for anytype of html form element
import { Link } from 'react-router-dom';//will use if user clicks on cancel
import SurveyField from './SurveyField';
import validateEmails from  '../../utils/validateEmails';
import formFields from './formFields';
// either we can write the same code 4 times with these labels and name or do it the way it is done below
// if the type changes it can also be included, here itis all text
//  has put tthis in another file ND IMPORTED
// const FIELDS =[
// {label : "Survey Title"   , name : "title"      },
// {label : "Subject Line"   , name : "subject"    },
// {label : "Email Body"     , name : "body"       },
// {label : "Recipient List" , name : "emails"     }
// ];

class SurveyForm extends Component {
    //made one single function to make text box with componenet of 'surveyfield'(custom input) rather than 'input',map will map the label and fields with the ones given above
    // underscore.map to use lodash
    renderField(){
       return _.map(formFields , ({ label , name  }) => {
           //it will put all text in an array
        //    key is name to avoid react warning and since name in unique we have put it
            return (
            < Field key = {name} component={SurveyField}  type="text" label={label} name={name} />
            );
       });

    }



    render() {
        return (
           <div>
               <form 
               onSubmit={this.props.handleSubmit( this.props.onSurveySubmit)}>
                {this.renderField()}
                <Link to="/surveys" className="red btn-flat white-text">
                Cancel
                </Link>
                <button type = "submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i> 
                </button>
               </form>
               
           </div> 
        );
    }
}

// doing fields validation here
function validate(values) {
    const errors = {};
       
    // if email is not in the correct format
    errors.recipients = validateEmails(values.recipients || '');// call function from ../../utils/validateEmails


    // if fields are left empty , writing three different if case will also work
    // we need only names from field
    _.each(formFields , ({ name }) => {
        if(!values[name]){
            errors[name] = 'You must provide a value:';
        }

    });



    return errors;
}

// it requires only one option to be passed inside it
export default reduxForm({
    // to call this function validate, instead we would have written validate:validate but since key and value are same therefore written just validate
    validate,
    form : 'surveyForm',
    destroyOnUnmount:false // this will ensure that if the user comes back to confirm the values its values are present in the text box that is it wont be dumped
})(SurveyForm);