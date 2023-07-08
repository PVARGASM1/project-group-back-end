const dataBase = require("@makeitrealcamp/db-mock")

const createData = (data) => {
    const user = dataBase.insert(data)

      return user
}

const readData  = () => {
    const users = dataBase.findAll()

    return users
}

const readDataById = (id) => {
    const user = dataBase.findById(id)
      return user
}

const updateData = (id, data) => {
    const user = dataBase.update({id, data})
      return user
}

const deleteData = (id) => {
    const user = dataBase.remove(id)
        return user
}

module.exports = {
    createData,
    readData,
    readDataById, 
    updateData,
    deleteData
}