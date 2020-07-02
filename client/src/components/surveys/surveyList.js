import React , { Component } from 'react';
import { connect  } from 'react-redux';
import { fetchSurveys } from '../../actions';// action cretor which is needed here


class SurveyList extends Component {
    
    // to call fetchsurveys action creator
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card  darken-1" key={survey._id}>
                    <div className="card-content ">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On : {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                         <a> Yes: {survey.yes} </a>
                         <a>No : {survey.no} </a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {/* this method is defined above */}
                {this.renderSurveys()}
            </div>
        );
    }
}
//to pull in the list of surveys from global store
function mapStateToProps({  surveys }) {
    return { surveys  };
}

export default connect(mapStateToProps, { fetchSurveys})(SurveyList); 