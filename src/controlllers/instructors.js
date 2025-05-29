let { instructors } = require("../database")
let { idInstructor } = require("../database")

const listIntructors = (req, res)=>{
    return res.status(200).json(instructors)
}

const getInstructor = (req, res)=>{
    const { id } = req.params

    const instructor = instructors.find((instructor)=>{
        return instructor.id === Number(id)
    })

    if(!instructor){
        return res.status(404).json("Instructor not found")
    }else{
        return res.status(200).json(instructor)
    }
}

const createInstructor = (req, res)=>{
    const {name, email, status } = req.body

    if(!name){
        return res.status(400).json("The field 'name' is mandatory")
    }
    if(!email){
        return res.status(400).json("The field 'email' is mandatory")
    }
    if(typeof status !== "boolean"){
        return res.status(400).json("The field 'status' is mandatory")
    }

    const instructor = {
        id: idInstructor++,
        name: name,
        email: email,
        status: status
    }

    instructors.push(instructor)
    return res.status(201).json(instructor)
}

const updateInstructor = (req, res)=>{
    const {id} = req.params
    const {name, email, status } = req.body

    if(!name){
        return res.status(400).json("The field 'name' is mandatory")
    }
    if(!email){
        return res.status(400).json("The field 'email' is mandatory")
    }
    if(status === undefined || status === null || status === ''){
        return res.status(400).json("The field 'status' is mandatory")
    }

    const instructor = instructors.find((instructor)=>{
        return instructor.id === Number(id)
    })

    if(!instructor){
        return res.status(404).json("Instructor not found")
    }else{
        instructor.name = name
        instructor.email = email
        instructor.status = status

        return res.status(204).send("Instructor updated")
    }
}
const patchInstructor = (req, res)=>{
    const {id} = req.params
    const { status } = req.body

    const instructor = instructors.find((instructor)=>{
        return instructor.id === Number(id)
    })

    if(!instructor){
        return res.status(404).json("Instructor not found")
    }else{
        instructor.status = status

        return res.status(204).send("Instructor status updated")
    }
}

const deleteInstructor = (req, res)=>{
    const {id} = req.params
    const instructor = instructors.find((instructor)=>{
        return instructor.id === Number(id)
    })

    if(!instructor){
        return res.status(404).json("Instructor not found")
    }else{
        instructors = instructors.filter((instructor) => {
            return instructor.id !== Number(id)
    })

        return res.status(200).send("Instructor deleted")
    }
}

module.exports = {
    listIntructors,
    getInstructor,
    createInstructor,
    updateInstructor,
    patchInstructor,
    deleteInstructor
}