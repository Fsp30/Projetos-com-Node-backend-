import express from 'express'
const app = express()

app.use(express.json())


// Define your routes here  

// GET all products

app.get('', (req, res) => {
  return 'Primeiro servidor do projeto 😁'
})

app.listen(3000 , ()=>{
    console.log('Servidor na porta http://localhost:3000')
})