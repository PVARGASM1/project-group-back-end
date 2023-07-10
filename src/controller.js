const { 
	createData,
	readData, 
	readDataById,
	updateData,
	deleteData,
} = require('./model')

const handleCreateData = (req, res) => {
	try {
		const { body } = req
		const response = createData({...body})
		res.status(201).json({message: "User is created", data: response})
	} catch (error){
		res.status(400).json({message: error.message})
	}
}

const handleReadData = (req, res) => {
	try {
		const response = readData()
		res.status(200).json({message:"Users found it", data: response})
	} catch(error) {
		res.status(400).json({message: error.message})
	}
}

const handleReadDataById =  (req, res) => {
	try {
		const { id } = req.params
		const response = readDataById(id)
		res.status(200).json({mesagge: "User found it successufully", data: response })
	} catch(error) {
		res.status(400).json({message: error.message}) 
	}
}   

const handleUpdateData = (req, res) => {
    try {
        const { id } = req.params
        const { body } = req

        const response = updateData(id, {...body})

        res.status(200).json({message: "User was updated", data: response})
    } 
    catch(error) {
        res(400).json({mesagge: error.mesagge})
    }
}

const handleDeleteData =  (req, res) => {
	try {
		const id = req.params.id
		const response = deleteData(id)
		res.status(200).json({message: "User was deleted", data: response})
	} 
	catch(error) {
		res.status(400).json({message: error.message})
	}
}

module.exports = {
	handleCreateData,
	handleReadData, 
	handleReadDataById,
	handleUpdateData,
	handleDeleteData,
}