const Transport = require("../models/transport")

const create = async (req) => {
    let { user_id, brand, type, cc } = req.body
    var insert_data = {
        user_id,
        brand,
        type,
        cc
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
    try {
        let query = await User.find({}).exec()
        let data = query.map((v, i) => {
            return {
                user_id: v.user_id,
                brand: v.brand,
                type: v.type,
                cc: v.cc
            }
        })

        return data
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let {user_id, brand, type, cc, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        user_id,
        brand,
        type,
        cc
    }

    try {
        let query = await User.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}
const destroy = async (id) => {
    try {
        let query = await User.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}
const getDetail = async (id) => {
    try {
        let query = await User.findOne({
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
