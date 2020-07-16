import React from "react";

const optionTypeDiabetes = [
    ["DM 1", "DM 1"],
    ["DM 2", "DM 2"],
    ["Gestational", "Gestational"],
    ["Other", "Other"]
];  

const OptionsTypeDiabetesDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionTypeDiabetes.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsTypeDiabetesDrop;
