const express = require('express');
const router = express.Router();
const controller = require('../controllers/recordcontroller.js');

router.get('/',controller.getRecords);
router.post('/',controller.createRecord);
router.put('/:id',controller.updateRecord);
router.delete('/:id',controller.deleteRecord);

module.exports = router;
