//list of dependencies

const MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/school')
mongoose.Promise = global.Promise;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var request = require('request');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('something is happening');
    next();
})
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.listen(port);
console.log('Magic happens on the port' + port);

router.route('/schools')

    .post(function (req, res) {
        var schoolReview = new School();

        schoolReview.schoolName = req.body.schoolName,
        schoolReview.schoolCity = req.body.schoolCity
        schoolReview.schoolType = req.body.schoolType
        schoolReview.schoolPublic = req.body.schoolPublic
        schoolReview.schoolDistrict = req.body.schoolDistrict
        schoolReview.writtenReview = req.body.writtenReview
        schoolReview.reviewersName = req.body.reviewersName
        schoolReview.rating = req.body.rating
        schoolReview.dateAttended = req.body.dateAttended
        schoolReview.artProgram = req.body.artProgram
        schoolReview.musicProgram = req.body.musicProgram
        schoolReview.athleticProgram = req.body.athleticProgram
        schoolReview.strongTeachers = req.body.strongTeachers
        schoolReview.collegePrep = req.body.collegePrep
        schoolReview.strongAdministration = req.body.strongAdministration
        schoolReview.safeArea = req.body.safeArea
        schoolReview.schoolSecurity = req.body.schoolSecurity
        schoolReview.niceCampus = req.body.niceCampus

        schoolReview.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'School Review created!' });
        });
    })

    //creating the ability to GET and query the API 

    .get(function (req, res) {
        School.find(function (err, school) {
            if (err)
                res.send(err);
            
            else if (req.query.name) {
                School.find(function (err, school) {

                    var matchingName = [];

                    if (err)
                        res.send(err);

                    for (var i = 0; i < school.length; i++) {
                        
                        
                        if (school[i].schoolName.toLowerCase().includes(req.query.name)) {
                            matchingName = matchingName.concat(school[i])
                        }
                    }
                    res.json(matchingName);
                });
            }
           
            else if (req.query.city) {
                School.find( function (err, school) {

                    var matchingCity = []

                    if (err)
                        res.send(err);

                    for (var i = 0; i < school.length; i++) {

                        if (school[i].schoolCity.toLowerCase().includes(req.query.city)) {
                            matchingCity = matchingCity.concat(school[i])
                        }
                    }
                    res.json(matchingCity);
                });
            }

            else if (req.query.type) {
                School.find(function (err, school) {

                    var matchingType = []

                    if (err)
                        res.send(err);

                    for (var i = 0; i < school.length; i++) {
                        if (school[i].schoolType.toLowerCase().includes(req.query.type)) {
                            matchingType = matchingType.concat(school[i])
                        }
                    }  
                    res.json(matchingType);    
                });
            }
            else {
                res.json(school);
            }
        })
    })


app.use('/api', router);

var app = express();

var School = mongoose.model('School', {
    schoolName: {
        type: String
    },
    schoolCity: {
        type: String
    },
    schoolType: {
        type: String
    },
    schoolPublic: {
        type: Boolean
    },
    schoolDistrict: {
        type: String
    },
    writtenReview: {
        type: String
    },
    reviewersName: {
        type: String
    },
    rating: {
        type: Number
    },
    dateAttended: {
        type: String
    },
    artProgram: {
        type: Boolean
    },
    musicProgram: {
        type: Boolean
    },
    athleticProgram: {
        type: Boolean
    },
    strongTeachers: {
        type: Boolean
    },
    collegePrep: {
        type: Boolean
    },
    strongAdministration: {
        type: Boolean
    },
    safeArea: {
        type: Boolean
    },
    schoolSecurity: {
        type: Boolean
    },
    niceCampus: {
        type: Boolean
    },

})

//creation of the database

MongoClient.connect('mongodb://localhost:27017/school', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // var individualSchool = new School({
    //     schoolName: "Peters Canyon",
    //     schoolCity: "Tustin",
    //     schoolType: "Elementary",
    //     schoolPublic: true,
    //     schoolDistrict: "Tustin Unified",
    //     review: {
    //         writtenReview: "This school is great",
    //         reviewersName: "",
    //         rating: 4.5,
    //         dateAttended: "1998 - 2004",
    //         artProgram: true,
    //         musicProgram: true,
    //         athleticProgram: false,
    //         strongTeachers: true,
    //         collegePrep: false,
    //         strongAdministration: true,
    //         safeArea: true,
    //         schoolSecurity: false,
    //         niceCampus: true
    //     },
    // })

    // individualSchool.save().then((doc) => {
    //     console.log('Saved school', doc);
    // }), (e) => {
    //     console.log('unable to save school')
    // }

})
