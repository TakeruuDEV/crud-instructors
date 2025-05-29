const express = require("express")
const instructors = require("./controlllers/instructors")

const routes = express()

routes.get("/instructors", instructors.listIntructors)
routes.get("/instructors/:id", instructors.getInstructor)
routes.post("/instructors", instructors.createInstructor)
routes.put("/instructors/:id", instructors.updateInstructor)
routes.patch("/instructors/:id/status", instructors.patchInstructor)
routes.delete("/instructors/:id", instructors.deleteInstructor)

module.exports = routes