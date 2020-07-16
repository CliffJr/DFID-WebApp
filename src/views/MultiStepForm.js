import React from "react";
import {useForm, useStep } from "react-hooks-helper";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import ReviewNewPatientDetails from "./ReviewNewPatientDetails";
import SubmitPatientForm from "./submitPatientForm";


const steps = [
    {id: "stepOne"},
    {id: "stepTwo"},
    {id: "stepThree"},
    {id: "reviewNewPatientDetails"},
    {id: "submitPatientForm"}
];

const defaultData = {
    firstnamePatient: "",
    lastnamePatient: "",
    ncdNumberPatient: "",
    dfidStudyNumberPatient: "",
    optionsGender: "",
    optionTypeDiabetes: "",
    dobPatient: "",
  };

const MultiStepForm = () => {
    
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation } = useStep({initialStep: 0, steps });
    const { id } = step;

    const props = {formData, setForm, navigation};

    switch (id) {
        case "stepOne":
            return <StepOne {...props}/>;
        case "stepTwo":
            return <StepTwo {...props}/>;
        case "stepThree":
            return <StepThree {...props}/>;
        case "reviewNewPatientDetails":
            return <ReviewNewPatientDetails {...props}/>;
        case "submitPatientForm":
            return <SubmitPatientForm {...props}/>;
        default:
            return null;
    }
};

export default MultiStepForm;