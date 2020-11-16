const express = require('express')
const router = new express.Router()
const Word = require('../models/word')

router.post('/words', async (req, res) => {
    const word = new Word(req.body)

    try {
        await word.save()
        res.status(201).send(word)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/words', async (req, res) => {
    try {
        const words = await Word.find({})
        res.send(words)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/words/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const word = await Word.findById(_id)

        if (!word) {
            return res.status(404).send()
        }

        res.send(word)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/words/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'definition']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!word) {
            return res.status(404).send()
        }

        res.send(word)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/words/:id', async (req, res) => {
    try {
        const word = await Word.findByIdAndDelete(req.params.id)

        if (!word) {
            res.status(404).send()
        }

        res.send(word)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router