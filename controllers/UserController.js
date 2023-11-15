const { Router } = require('express')
const m$user = require('../modules/user.module')
const response = require('../helpers/response')

const UserController = Router()

UserController.get('/', async (req, res) => {
    const list = await m$user.listUser()


    //helper response
    response.sendResponse(res, list)
})


module.exports = UserController