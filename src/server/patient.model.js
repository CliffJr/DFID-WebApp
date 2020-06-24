const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Patient schema
let Patient = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    patientId: {
        type: String
    },
    yearOfDiabetes: {
        type: Number
    },
    gender: {
        type: String
    },
    visualAcuityLeft: {
        type: String
    },
    visualAcuityRight: {
        type: String
    },
    recentHbA1c: {
        type: String
    },
    dateTakenHbA1c: {
        type: String
    },
    leftImage1: {
        type: String
    }

});

module.exports = mongoose.model('Patient', Patient);