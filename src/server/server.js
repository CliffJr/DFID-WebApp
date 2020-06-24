let Patient = require('./patient.model');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dirName = path.join(process.cwd(), './uploads/')
        console.log(dirName);
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }
        cb(null, dirName);
    }
}, {
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

var upload = multer({
    storage: storage,
    limits: {fileSize: 10000000},
}).single('leftImage1');

const dfidRoutes = express.Router();

app.use(express.static('uploads'));
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/dfidDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use('/dfidDb', dfidRoutes);
//retrieve a list of all todo items from the MongoDB database
dfidRoutes.route('/').get(function (req, res) {
    Patient.find(function (err, dfidDb) {
        if (err) {
            console.log(err);
        } else {
            res.json(dfidDb);
        }
    });
});

//Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set a static folder
    app.use(express.static('DFID_WEB_APP/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(_dirname, 'DFID_WEB_APP','build', 'index.html'));
    });
}

//retrieve dfidDb Item
dfidRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Patient.findById(id, function (err, patient) {
        res.json(patient);
    });
});

//add the route which is needed to be able to add new patient items
dfidRoutes.route('/add').post(upload, function(req, res) {
    console.log(req.file);
    let patient = new Patient(req.body);
    patient.save()
        .then(patient => {
            res.status(200).json({
                'patient': 'patient added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new patient failed');
        });
});

//update
dfidRoutes.route('/update/:id').post(function (req, res) {
    Patient.findById(req.params.id, function (err, patient) {
        if (!patient)
            res.status(404).send("data is not found");
        else
            patient.firstname = req.body.firstname;
        patient.lastname = req.body.lastname;
        patient.patientId = req.body.patientId;
        patient.yearOfDiabetes = req.body.yearOfDiabetes;
        patient.save().then(patient => {
                res.json('Patient updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});