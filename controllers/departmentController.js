const express = require('express');
const router = express.Router();
const db = require('../config/connection');

function getDepartment(){
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
                 console.table(data);
                 console.log("!")
            }
        })
    });
}
function addDepartment(){
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
}
function deleteDepartment(){
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
}

exports.getDepartment = getDepartment;
exports.addDepartment = addDepartment;
exports.deleteDepartment = deleteDepartment;

module.exports = router;