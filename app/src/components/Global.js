import React from 'react';
import { connect } from 'react-redux';
import { fetchGlobalCases } from '../actions/globalActions';

const Global = props => {
    return (
        <>
        <div><h1>Global</h1></div>
        <button onClick={ () => fetchGlobalCases()}>Show Cases</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        globalCases: state.globalCases,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(Global)