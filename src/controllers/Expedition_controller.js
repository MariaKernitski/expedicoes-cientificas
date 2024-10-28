import Expedition from "../models/Expedition_model.js"

export const store = async (req, res) => {
    try {
        const content = await Expedition.create(req.body);
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Expedition.find(req.query).populate(["participants", "speciesFound"]).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await Expedition.findById(req.params.id).populate(["participants", "speciesFound"]).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const content = await Expedition.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const destroy = async (req, res) => {
    try {
        const content = await Expedition.findByIdAndDelete(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}