import React from 'react';
import { connect } from 'react-redux';
import { fetchGlobalCases } from '../actions/globalActions';

const Global = props => {
    if (props.isFetching) {
        return <div className='error'>Just a minute while we gather your data...</div>
    }
    return (
        <>
        <div><h1>Covid-19 Cases</h1></div>
        <button className='case-button' onClick={ () => props.fetchGlobalCases() }>Update Case Count</button>
        <div className='global-cases'>
            <div className='new-cases'>
                <h3>New Cases: <span className='case-numbers'>{props.globalCases.NewConfirmed}</span></h3>
                <h3>New Deaths: <span className='case-numbers'>{props.globalCases.NewDeaths}</span></h3>
                <h3>New Recovered: <span className='case-numbers'>{props.globalCases.NewRecovered}</span></h3>
            </div>
            <div className='total-cases'>
                <h3>Total Confirmed: <span className='case-numbers'>{props.globalCases.TotalConfirmed}</span></h3>
                <h3>Total Deaths: <span className='case-numbers'>{props.globalCases.TotalDeaths}</span></h3>
                <h3>Total Recovered: <span className='case-numbers'>{props.globalCases.TotalRecovered}</span></h3>
            </div>
        </div>

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
    {fetchGlobalCases}
)(Global)