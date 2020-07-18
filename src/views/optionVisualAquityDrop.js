import React from "react";

const optionsVisualAquity = [
    ["", ""],
    ["Light Perception", "Light Perception"],
    ["No Light Perception", "No Light Perception"],
    ["Not Done", "Not Done"]
];

const OptionsVisualAquityDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionsVisualAquity.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsVisualAquityDrop;
