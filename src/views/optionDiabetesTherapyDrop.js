import React from "react";

const optionsDiabetesTherapy = [
    ["Diet", "Diet"],
    ["None", "None"]
];

const OptionsDiabetesTherapyDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionsDiabetesTherapy.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsDiabetesTherapyDrop;
