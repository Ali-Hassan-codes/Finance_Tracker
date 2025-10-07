const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();
router.get('/read', controller.getUsers);
router.get('/read/:id', controller.getUser);
router.post('/create', controller.createUser);
router.delete('/delete/:id', controller.deleteUser);
router.put('/update/:id', controller.updateUser)

module.exports = router