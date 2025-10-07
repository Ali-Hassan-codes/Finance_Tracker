const transicationController = require('../controllers/transicationController');
const express = require('express');
const router = express.Router();

router.post('/transication', transicationController.createTransication);

router.get  ('/transication/:id', transicationController.getTransications);
router.get('/transication', transicationController.getTransication);
router.put('/transication/:id', transicationController.updateTransication);
router.delete('/transication/:id', transicationController.deleteTransication);

module.exports = router;