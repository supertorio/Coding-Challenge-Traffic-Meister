import React from 'react';
import Grid from "@material-ui/core/Grid";
import VehicleTypeSelector from "./VehicleTypeSelector";
import VehicleBrandSelector from "./VehicleBrandSelector";
import VehicleColorSelector from "./VehicleColorSelector";

const VehicleSelectorGroup = () => {
    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                    <VehicleTypeSelector/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <VehicleBrandSelector/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <VehicleColorSelector/>
                </Grid>
            </Grid>
        </div>
    );
};

export default VehicleSelectorGroup;
