const express = require('express');
const router = express.Router();
const db = require('../config/connection');

router.get('/', (req,res)=>{
    db.query('SELECT * FROM department', (err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg: 'error occured', err:err})
        }else{
            res.json(data);
        }
    })
})



module.exports = router;