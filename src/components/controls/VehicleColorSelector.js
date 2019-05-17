import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {List as ImmutableList} from "immutable";

import {getAvailableVehicleColors, getCurrentVehicleColor} from "../../reducers/index-reducer";
import {changeVehicleColorSelection} from '../../actions/meister-form-actions';
import BaseListSelector from "./BaseListSelector";

const VehicleColorSelector = (props) => {
    return (
        <div className="Selector VehicleColorSelector">
            <BaseListSelector label="Vehicle Color"
                              options={props.colors}
                              value={props.selectedColor}
                              onChange={props.changeVehicleColorSelection} />
        </div>
    );
};

VehicleColorSelector.propTypes = {
    colors: PropTypes.instanceOf(ImmutableList).isRequired,
    selectedColor: PropTypes.string,
    changeVehicleColorSelection: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        selectedColor: getCurrentVehicleColor(state),
        colors: getAvailableVehicleColors(state),
    };
};

const mapDispatchToProps = {
    changeVehicleColorSelection,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehicleColorSelector);
