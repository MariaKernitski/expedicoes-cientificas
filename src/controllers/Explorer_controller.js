import Explorer from "../models/Explorer_model.js"

export const store = async (req, res) => {
    try {
        const content = await Explorer.create(req.body);
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Explorer.find(req.query).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await Explorer.findById(req.params.id).populate(["name", "fieldOfStudy", "expeditionsParticipated"]).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const content = await Explorer.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const destroy = async (req, res) => {
    try {
        const content = await Explorer.findByIdAndDelete(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}