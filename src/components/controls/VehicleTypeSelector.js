import React from 'react';
import {connect} from "react-redux";

import {getCurrentVehicleType, getAvailableVehicleTypes} from "../../reducers/index-reducer";
import {changeVehicleTypeSelection} from "../../actions/meister-form-actions";
import Dropdown from "./Dropdown";

const VehicleTypeSelector = (props) => {
    return (
        <div className="Selector VehicleTypeSelector">
            <Dropdown label="Vehicle Type"
                      value={props.selectedType}
                      options={props.vehicles}
                      onChange={props.changeVehicleTypeSelection} />
        </div>
    );
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
