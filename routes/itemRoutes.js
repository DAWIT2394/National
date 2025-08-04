const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.put('/:id', itemController.updateItem);  // for edit
router.delete('/:id', itemController.deleteItem); // for delete

module.exports = router;
