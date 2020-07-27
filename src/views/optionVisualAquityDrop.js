import React from "react";

const optionsVisualAquity = [
    ["", ""],
    ["6/6", "6/6"] , 
    ["6/9", "6/9"], 
     ["6/12", "6/12"],
      ["6/18", "6/18"], 
      ["6/24", "6/24"] ,
      ["6/36", "6/36"], 
      ["/6/60", "/6/60"] , 
      ["5/60", "5/60"],
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
