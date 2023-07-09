require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { 
	handleCreateData, 
	handleReadData,
	handleReadDataById,
	handleUpdateData,
	handleDeleteData,
} = require('./controller')


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/',  (req, res) => {
	res.json('OK')
})

app.post('/data', handleCreateData)

app.get('/data', handleReadData) 
// GET BY ID
app.get('/data/:id', handleReadDataById)

//PUT - UPDATE

app.put('/data/:id', handleUpdateData) 


//DELETE
app.delete('/data/:id', handleDeleteData )

app.listen(PORT, () => {
	console.log(`Successfully running at ${PORT}`)
})