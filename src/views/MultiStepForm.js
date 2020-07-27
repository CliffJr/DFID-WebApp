import React, {useState} from "react";
import StepWizard from 'react-step-wizard';
import {useForm } from "react-hooks-helper";

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
    yearDMPatient: "",

    additionalCommentsPatient: "", 
    optionsSignsDR: "",

    optionsSymptoms: "", 
    otherSymptoms: "", 
    optionsDiabetesTherapy: "", 
    mostRecentHbA1c: "", 
    optionsVisualAquity: "", 
    optionsIntraOcularPressure: "", 
    otherOccularFindings: ""
  };

const MultiStepForm = () => {
    //StepOne
    const [formData, setForm] = useForm(defaultData);
    const [dobPatient, setDobPatient] = useState();

    //StepTwo
    const [pictureR1, setPictureR1] = useState(null);
    const [pictureR2, setPictureR2] = useState(null);
    const [pictureL1, setPictureL1] = useState(null);
    const [pictureL2, setPictureL2] = useState(null);

    const [dateElectronicReferal, setDateElectronicReferal] = useState();

    //StepThree
    const [dateImagesTaken, setDateImagesTaken] = useState();
    const [dateHbA1ctaken, setDateHbA1ctaken] = useState();
    const [dateReviewNurse, setDateReviewNurse] = useState();
    const [dateReviewDoctor, setDateReviewDoctor] = useState();

    const props = {formData, setForm, dobPatient, setDobPatient, pictureR1, setPictureR1, pictureR2, setPictureR2, pictureL1, setPictureL1, pictureL2, setPictureL2, dateImagesTaken, setDateImagesTaken, dateElectronicReferal, setDateElectronicReferal, dateHbA1ctaken, setDateHbA1ctaken, dateReviewNurse, setDateReviewNurse, dateReviewDoctor, setDateReviewDoctor};

  return(
      <StepWizard  {...props}>
        <StepOne   {...props}/>
        <StepThree   {...props}/>
        <StepTwo   {...props}/>
        <ReviewNewPatientDetails {...props}/>
        <SubmitPatientForm   {...props}/>
      </StepWizard>
    );
}

export default MultiStepForm;


