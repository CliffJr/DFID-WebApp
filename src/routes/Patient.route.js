 // Importing important packages
 const express = require('express');
 
 // Using express and routes
 const app = express();
 const patientRoute = express.Router();

  // Employee module which is required and imported
  let patientModel = require('../server/patient.model');

 // To Get List Of patients
 patientRoute.route('/').get(function (req, res) {
     patientModel.find(function (err, patient) {
         if (err) {
             console.log(err);
         } else {
             res.json(patient);
         }
     });
 });

 // To Add New patient
 patientRoute.route('/addPatient').post(function (req, res) {
     let patient = new patientModel(req.body);
     patient.save()
         .then(game => {
             res.status(200).json({
                 'patient': 'patient Added Successfully'
             });
         })
         .catch(err => {
             res.status(400).send("Something Went Wrong");
         });
 });

 // To Get patient Details By patient ID
 patientRoute.route('/editPatient/:id').get(function (req, res) {
     let id = req.params.id;
     patientModel.findById(id, function (err, patient) {
         res.json(patient);
     });
 });

 // To Update The patient Details
 patientRoute.route('/updatePatient/:id').post(function (req, res) {
     patientModel.findById(req.params.id, function (err, patient) {
         if (!patient)
             return next(new Error('Unable To Find patient With This Id'));
         else {
             patient.firstame = req.body.firstName;
             patient.lastName = req.body.lastName;
             patient.email = req.body.email;
             patient.phone = req.body.phone;

             patient.save().then(emp => {
                     res.json('patient Updated Successfully');
                 })
                 .catch(err => {
                     res.status(400).send("Unable To Update patient");
                 });
         }
     });
 });

 // To Delete The patient
 patientRoute.route('/deletepatient/:id').get(function (req, res) {
     patientModel.findByIdAndRemove({
         _id: req.params.id
     }, function (err, patient) {
         if (err) res.json(err);
         else res.json('patient Deleted Successfully');
     });
 });

 module.exports = patientRoute;