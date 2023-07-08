const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const { 
	handleCreateData, 
	handleReadData,
	handleReadDataById,
	handleUpdateData,
	handleDeleteData,
} = require('./controller')


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

app.listen(port, () => {
	console.log(`Successfully running at ${port}`)
})