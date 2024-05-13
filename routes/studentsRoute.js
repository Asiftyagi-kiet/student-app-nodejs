var express = require('express');
var router = express.Router();
var studentRecord = require('./../models/studentSchema');


//post method....

router.post('/', async (req, res) => {
    try {
        var stud = req.body;
        var newstud = new studentRecord(stud);
        var studRecord = await newstud.save();

        if (!studRecord) {
            console.log("Data not saved properly..")
        }

        console.log("Data saved successfully insert in database...")
        res.status(200).json(studRecord);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error !" })
    }
})

// get method ..

router.get('/', async (req, res) => {
    try {
        var stud = req.body;
        var studRec = await studentRecord.find(stud);
        if (!studRec) {
            console.log("Not fetch data..");
        }
        console.log("Student all recod fetch successfully..");
        res.status(200).json(studRec);


    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error !" })

    }
})

//get method with roll...

router.get('/:roll', async (req, res) => {
    try {
        var roll = req.params.roll

        var studRec = await studentRecord.find({ roll: roll });
        if (!studRec) {
            console.log("Not fetch data..");
        }
        console.log("Student recod fetch with rollNumber successfully..");
        res.status(200).json(studRec);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error !" })

    }
})
// delete method...with id

router.delete('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        var stud = await studentRecord.findByIdAndDelete(id)
        if (!stud) {
            return res.status(404).json({ error: "id not found" })
        }
        console.log("Student recod delete with id successfully..");
        res.status(200).json(stud);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error !" })

    }
})



// update method .... with id


router.put('/:id', async (req, res) => {
    try {
        var stud = req.params.id
        var studupdate = req.body;

        var studreco = await studentRecord.findByIdAndUpdate(stud, studupdate, {
            new: true,
            runValidators: true
        })
        if (!studreco) {
            return res.status(404).json({ error: "not found !" })
        }
        res.status(200).json(studreco);


    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error !" })

    }
})


module.exports = router;