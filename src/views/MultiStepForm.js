import React, {useState} from "react";
import StepWizard from 'react-step-wizard';
import {useForm, useStep } from "react-hooks-helper";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import ReviewNewPatientDetails from "./ReviewNewPatientDetails";
import SubmitPatientForm from "./submitPatientForm";

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
    const [dobDate, setDobDate] = useState(new Date());
    const [formData, setForm] = useForm(defaultData);
    const props = {formData, setForm, dobDate, setDobDate };
  

return(
<StepWizard  {...props}>
  <StepOne   {...props}/>
  <StepTwo   {...props}/>
  <StepThree   {...props}/>
  <ReviewNewPatientDetails {...props}/>
  <SubmitPatientForm   {...props}/>
</StepWizard>
)

};

export default MultiStepForm;