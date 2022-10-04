const { Router } = require('express')
const BucketListItem = require('../../models/BucketListItem')

const router = Router()

// API get method
router.get('/', async (req, res) => {
  try {
    const bucketListItems = await BucketListItem.find()
    if (!bucketListItems) throw new Error('No bucketListItems')
    const sorted = bucketListItems.sort((a, b) => {
      let dateDiff = new Date(a.date).getTime() - new Date(b.date).getTime()
      return dateDiff
    })
    res.status(200).json(sorted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// API post method
router.post('/', async (req, res) => {
  const newBucketListItem = new BucketListItem(req.body)

  try {
    const bucketListItem = await newBucketListItem.save()
    if (!bucketListItem) throw new Error('Something went wrong savimg the bucketListItem')
    res.status(200).json(bucketListItem)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// API put method
router.put('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const response = await BucketListItem.findByIdAndUpdate(id, req.body)
    if (!response) throw Error('Something went wrong')
    const updated = { ...response._doc, ...req.body }
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
