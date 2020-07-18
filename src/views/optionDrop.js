import React from "react";

const optionsGender = [
    ["", ""],
    ["Male", "Male"],
    ["Female", "Female"]
];

const OptionsDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionsGender.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsDrop;
