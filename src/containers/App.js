import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import 'containers/App.css';

import AppComponent from 'components/App';
import Loading from 'components/Loading';

import { makeAssessmentActive } from 'redux/actions/App';

class App extends Component{


    render() {
        <AppComponent/>
    }
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps)(App);
