const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/track', (req, res) => {
  const data=['Hola', ' Tracks']
  res.send((data))

})





module.exports = router;