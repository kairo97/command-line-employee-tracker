const express = require('express');
const router = express.Router();
const db = require('../config/connection');


    router.get('/', (req,res)=>{
        db.query('SELECT * FROM department', (err,rows)=>{
            if(err){
                console.log(err);
                return res.status(500).json({msg: 'error occured', err:err})
            }else{
                res.json({
                    message: 'success',
                    data: rows
                })
                // console.table(data);
            }
        })
    });

router.post('/', (req,res)=>{
    db.query('INSERT INTO department(name)VALUES(?)', [req.body.name],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:'error occured', err:err})
        }else{
            res.json(data);
        }
    })
    
});
router.delete('/:id',(req,res)=>{
    db.query('DELETE FROM department WHERE id = ?', [req.params.id],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:'error occurred',err:err})
        }else{
            res.json(data);
        }
    })
})



module.exports = router;