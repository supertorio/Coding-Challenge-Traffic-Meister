import React from 'react';
import {connect} from "react-redux";

import {getAvailableVehicleBrands, getCurrentVehicleBrand} from "../../reducers/index-reducer";
import {changeVehicleBrandSelection} from "../../actions/meister-form-actions";
import Dropdown from "./Dropdown";

const VehicleBrandSelector = (props) => {
    return (
        <div className="Selector VehicleBrandSelector">
            <Dropdown label="Vehicle Brand"
                      options={props.brands}
                      value={props.selectedBrand}
                      onChange={props.changeVehicleBrandSelection} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        brands: getAvailableVehicleBrands(state),
        selectedBrand: getCurrentVehicleBrand(state)
    };
};

const mapDispatchToProps = {
    changeVehicleBrandSelection
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VehicleBrandSelector);
