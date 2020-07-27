
import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import NewPatientsList from "./NewPatientsList";
import PatientReferalDisplay from "./PatientDetailsDisplay";
import DoctorDiagnosisItem from "./DoctorDiagnosisItem";
import ImageDisplay from "./ImageDisplay";

const steps = [
    { id: "newPatientsList" },
    { id: "patientReferalDisplay" },
    { id: "imageDisplay"},
    { id: "doctorDiagnosisItem" },
    ];


const MultiStepFormDoctor = () => {

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "NewPatientsList":
      return  <NewPatientsList {...props} />;
    case "PatientReferalDisplay":
      return  <PatientReferalDisplay {...props} />;
    case "ImageDisplay":
        return <ImageDisplay {...props}/>;
    case "DoctorDiagnosisItem":
      return  <DoctorDiagnosisItem {...props} />;
    default:
      return null;
  }
};

export default MultiStepFormDoctor;
