import React from 'react';
import {connect} from "react-redux";
import {getAvailableVehicleColors, getCurrentVehicleColor} from "../../reducers/index-reducer";
import {changeVehicleColorSelection} from '../../actions/meister-form-actions';

import Dropdown from "./Dropdown";


const VehicleColorSelector = (props) => {
    return (
        <div className="Selector VehicleColorSelector">
            <Dropdown label="Vehicle Color"
                      options={props.colors}
                      value={props.selectedColor}
                      onChange={props.changeVehicleColorSelection} />
        </div>
    );
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
