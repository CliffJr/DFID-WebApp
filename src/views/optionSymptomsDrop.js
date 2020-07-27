import React from "react";

const optionsSymptoms = [
    ["", ""],
    ["Blurred vision", "Blurred vision"],
    ["Change of spectacles", "Change of spectacles"],
    ["Dark empty areas in your vision", "Dark empty areas in your vision"],
    ["Discharge", "Discharge", "Change of spectacles"],
    ["Dryness of eyes", "Dryness of eyes"], 
    ["Flashes of light", "Flashes of light"], 
    ["Floaters", "Floaters"], 
    ["Fluctuating vision", "Fluctuating vision"], 
    ["Impaired color vision", "Impaired color vision"], 
    ["Itchiness", "Itchiness"], 
    ["Pain","Pain"], 
    ["Poor vision", "Poor vision"],
    ["Redness", "Redness"],
    ["Stys", "Stys"] 
];

const OptionsSymptomsDrop = ({ label, ...others}) =>(
    <>
    <label>{label}</label>
    <select {...others}>
        {optionsSymptoms.map(([value, name]) =>(
            <option value={value}>{name}</option>
        )
        )}
    </select>
    </>
);

export default OptionsSymptomsDrop;
