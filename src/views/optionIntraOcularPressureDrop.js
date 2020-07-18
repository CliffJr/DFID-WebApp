import React from "react";

const optionsIntraOcularPressure = [
    ["", ""],
    ["mmHg", "mmHg"],
    ["Not Done", "Not Done"]
];

const OptionsIntraOcularPressureDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionsIntraOcularPressure.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsIntraOcularPressureDrop;
