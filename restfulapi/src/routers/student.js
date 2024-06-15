const express = require("express")
const router = new express.Router()
const Student = require("../models/student")

// router.get("/thapa", (req, res) => {
//     res.send("Hello whatsUp guys")
// })

router.get("/", (req, res) => {
    res.send("hello this is home page")
})
// router.post("/student",express.json(),(req,res)=>{ //express.json() is compulsory because we post data through postman is in json format.so we can recognize the data by this method called middleware

// using promisis
// router.post("/students",(req,res)=>{ //another way of writing if we use router.use for express.json()
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
//     // res.send("hello this is student page")
// })

// 1 create new router
// const router = new express.Router()

// 2 we need to define router
// router.get("/thapa",(req,res)=>{
//     res.send("Hello whatsUp guys")
// })

// 3 we need to register router
// router.use(router)

// using async await
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.status(200).send(studentsData)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(req.params);
        // res.send(req.params.id);
        const studentData = await Student.findById(_id)
        console.log(studentData);
        if (!studentData) {
            return res.status(404).send()
        } else {
            res.send(studentData)
        }

    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        // console.log(updateStudent);
        res.status(200).send(updateStudent)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send()
        }
        res.status(200).send(deleteStudent)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router;