const Router = require('express')
const router = new Router()
const userController = require("../controllers/user.controllers")

const professionController = require("../controllers/profession.controller")

router.post("/user", userController.createUser)
router.get("/user", userController.getUsers)
router.get("/user/:id", userController.getOneUser)
router.put("/user", userController.updateUser)
router.delete("/user/:id", userController.deleteUser)

router.post("/profession", professionController.createProfession)
router.get("/profession", professionController.getProfession)
router.delete("/profession/:id", professionController.deleteProfession)

module.exports = router