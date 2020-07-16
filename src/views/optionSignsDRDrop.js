import React from "react";

const optionsSignsDR = [
    ["Yes", "Male"],
    ["No", "Female"],
    ["Don't Know", "Don't Know"]
];

const OptionsSignsDRDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionsSignsDR.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsSignsDRDrop;
