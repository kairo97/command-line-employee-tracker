const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const inquirer = require('inquirer');

router.get('/', (req,res)=>{
    db.query('SELECT * FROM employee', (err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg: 'error occured', err:err})
        }else{
            res.json(data);
        }
    })
});
router.post('/', (req,res)=>{
    db.query('INSERT INTO employee(name)VALUES(?)', [req.body.name],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:'error occured', err:err})
        }else{
            res.json(data);
        }
    })
    
});
router.delete('/:id',(req,res)=>{
    db.query('DELETE FROM employee WHERE id = ?', [req.params.id],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:'error occurred',err:err})
        }else{
            res.json(data);
        }
    })
})



module.exports = router;