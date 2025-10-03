const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();
router.get('/users', controller.getUsers);
router.get('/user/:id', controller.getUser);
router.post('/user', controller.createUser);
router.delete('/user/:id', controller.deleteUser);
router.put('/user/:id', controller.updateUser)

module.exports = router