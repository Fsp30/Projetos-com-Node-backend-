import express from 'express'
const itemsRoutes = require('./routes/routes')

const app = express()
app.use(express.json())

app.use('/items', itemsRoutes)

app.listen(3000, () =>{
    console.log('Servidor rodando na porta http://localhost:3000')
})