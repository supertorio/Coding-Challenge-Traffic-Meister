import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadTrafficMeisterData } from '../../actions/meister-form-actions';
import {getMeisterDataLoading, getMeisterDataReady} from "../../reducers/index-reducer";

import VehicleTypeSelector from '../controls/VehicleTypeSelector';
import VehicleBrandSelector from '../controls/VehicleBrandSelector';
import VehicleColorSelector from '../controls/VehicleColorSelector';
import LoadingIndicator from '../LoadingIndicator';
import ResultsDisplay from '../ResultsDisplay';

import './MeisterForm.css';

class MeisterForm extends Component{

    componentDidMount() {
        this.props.loadTrafficMeisterData();
    }

    render() {
        return(
            <div className="MeisterForm">
                <h1>Traffic Meister</h1>
                {this.props.loading && <LoadingIndicator />}
                {this.props.ready &&
                    <Fragment>
                        <div className="SelectorGroup">
                            <VehicleTypeSelector />
                            <VehicleBrandSelector />
                            <VehicleColorSelector />
                        </div>
                        <ResultsDisplay />
                    </Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: getMeisterDataLoading(state),
        ready: getMeisterDataReady(state),
    };
};

const mapDispatchToProps = {
    loadTrafficMeisterData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeisterForm);
