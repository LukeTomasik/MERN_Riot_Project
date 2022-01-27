const express = require('express')
const router = express.Router()
const championsController= require('../controllers/champions')



router.get('/FullChampionList', championsController.fullChampionList)

module.exports = router