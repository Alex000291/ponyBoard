const express = require('express')
const router = express.Router()


router.get('/mlp', (req, res) => {
  res.render('mlp')
})


module.exports = router