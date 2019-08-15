const Transport = require("../models/transport")
const User = require("../models/user")

const create = async (req) => {
    let { brand, type, cc, user_id } = req.body
    var insert_data = {
        brand,
        type,
        cc,
        user_id
    }

    let data = new Transport(insert_data)

    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

const getAll = async () => {
    let query = await Transport.find({})
    .populate([
        {
            path: 'user_id',
            model: User
        }
    ]).exec()
    console.log(`Result ${query}`)

    return query
    }

const update = async (id, updated_data) => {
    let { brand, type, cc, fresh,user_id} = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        brand,
        type,
        cc,
        user_id
    }

    try {
        let query = await Transport.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}
const destroy = async (id) => {
    try {
        let query = await Transport.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}
const getDetail = async (id) => {
    try {
        let query = await Transport.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    update,
    destroy,
    getDetail
}
