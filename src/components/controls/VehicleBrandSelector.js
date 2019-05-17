import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {List as ImmutableList} from "immutable";

import {getAvailableVehicleBrands, getCurrentVehicleBrand} from "../../reducers/index-reducer";
import {changeVehicleBrandSelection} from "../../actions/meister-form-actions";
import BaseListSelector from "./BaseListSelector";

const VehicleBrandSelector = (props) => {
    return (
        <div className="Selector VehicleBrandSelector">
            <BaseListSelector label="Vehicle Brand"
                              options={props.brands}
                              value={props.selectedBrand}
                              onChange={props.changeVehicleBrandSelection} />
        </div>
    );
};

VehicleBrandSelector.propTypes = {
    brands: PropTypes.instanceOf(ImmutableList).isRequired,
    selectedBrand: PropTypes.string,
    changeVehicleBrandSelection: PropTypes.func,
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
