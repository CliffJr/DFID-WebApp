import React from "react";

const SubmitPatientForm = ({navigation}) => {
    const { go } = navigation;
  return (
    <div>
      <h3>Thank you for submitting.</h3>
      New Form -> <button onClick={() => go("names")}>New</button>
    </div>
  );
};

export default SubmitPatientForm