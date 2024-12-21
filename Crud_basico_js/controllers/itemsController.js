import { uuidv4 } from "uuid";
const v4 = uuidv4()
const items = require("../data/items")

const createItem = (req,res) =>{
    const {name} = req.body
    if (!name)
        return res.status(400).json({error: "O item deve conter um nome "})
    const id = uuidv4()
    const newItem = { id, name }
    items.push(newItem)
    res.status(201).json({message: 'Novo item criado 😁', item:newItem})
}

const getItems = (req,res) =>{
    res.status(200).json(items)
}

const updateItem = (req,res) =>{
    const {id} = req.params
    const {name} = req.body
    const item = items.find(item => item.id === id)
    if (!item) return res.status(404).json({error: 'Item não encontrado '})
    if (!name) return res.status(400).json({error: 'O item deve conter um nome  '})
    res.status(203).json({message: "Item atualizado com sucesso", item})
}

const deleteItem = (req,res) =>{
    const {id} = req.params
    const idx = items.findIndex(item => item.id === id)
    if (idx === -1 ) return res.status(404).json({error: "Item não encontrado "})
    items.splice(idx, 1)
    res.status(204).json({message: "Item deletado com sucesso 💣"})
}


module.exports = {createItem, getItems,updateItem,deleteItem}