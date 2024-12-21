import express from 'express'
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/itemsController')

const router = express.Router()

router.post('/',createItem)
router.get('/',getItems)
router.put('/',updateItem)
router.delete('/',deleteItem)

module.export = router;