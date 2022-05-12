const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]){
        res.render('Show', {
            bread:Bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
    /*res.render('Show',
    {
        bread: Bread[req.params.arrayIndex]
    })*/
  // res.send(Bread)
})


module.exports = breads