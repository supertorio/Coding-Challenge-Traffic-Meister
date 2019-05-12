import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadTrafficMeisterData } from '../../actions/meister-form-actions';
import Dropdown from '../controls/Dropdown';

class MeisterForm extends Component{

    componentDidMount() {
        this.props.loadTrafficMeisterData();
    }

    render() {
        return(
            <div className="MeisterForm">
                <p>Traffic Meister</p>
                <p>Loading: {this.props.loading ? "Yes" : "No"}</p>

                <Dropdown label="Vehicle Type" />
                <Dropdown label="Brand" />
                <Dropdown label="Colors" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.meister.get('loading')
    }
};

const mapDispatchToProps = {
    loadTrafficMeisterData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeisterForm);
