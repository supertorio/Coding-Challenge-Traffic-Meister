import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {List as ImmutableList} from "immutable";

import {getCurrentVehicleType, getAvailableVehicleTypes} from "../../reducers/index-reducer";
import {changeVehicleTypeSelection} from "../../actions/meister-form-actions";
import BaseListSelector from "./BaseListSelector";

const VehicleTypeSelector = (props) => {
    return (
        <div className="Selector VehicleTypeSelector">
            <BaseListSelector label="Vehicle Type"
                              value={props.selectedType}
                              options={props.vehicles}
                              onChange={props.changeVehicleTypeSelection} />
        </div>
    );
};

VehicleTypeSelector.propTypes = {
    vehicles: PropTypes.instanceOf(ImmutableList).isRequired,
    selectedType: PropTypes.string,
    changeVehicleTypeSelection: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        vehicles: getAvailableVehicleTypes(state),
        selectedType: getCurrentVehicleType(state),
    };
};

const mapDispatchToProps = {
    changeVehicleTypeSelection
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehicleTypeSelector);
