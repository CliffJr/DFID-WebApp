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
    const [dobPatient, setDobPatient] = useState(new Date());
    const [yearDMPatient, setYearDMPatient] = useState(new Date());

    //StepTwo
    const [pictureR1, setPictureR1] = useState(null);
    const [pictureR2, setPictureR2] = useState(null);
    const [pictureL1, setPictureL1] = useState(null);
    const [pictureL2, setPictureL2] = useState(null);

    const [dateElectronicReferal, setDateElectronicReferal] = useState(new Date());

    //StepThree
    const [dateImagesTaken, setDateImagesTaken] = useState(new Date());
    const [dateHbA1ctaken, setDateHbA1ctaken] = useState(new Date());
    const [dateReviewNurse, setDateReviewNurse] = useState(new Date());

    const props = {formData, setForm, dobPatient, setDobPatient, yearDMPatient, setYearDMPatient, pictureR1, setPictureR1, pictureR2, setPictureR2, pictureL1, setPictureL1, pictureL2, setPictureL2, dateImagesTaken, setDateImagesTaken, dateElectronicReferal, setDateElectronicReferal, dateHbA1ctaken, setDateHbA1ctaken, dateReviewNurse, setDateReviewNurse};

  return(
      <StepWizard  {...props}>
        <StepOne   {...props}/>
        <StepTwo   {...props}/>
        <StepThree   {...props}/>
        <ReviewNewPatientDetails {...props}/>
        <SubmitPatientForm   {...props}/>
      </StepWizard>
    );
}

export default MultiStepForm;