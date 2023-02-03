const express = require('express');
const router = express.Router();
const db = require('../config/connection');

function getRole(){
router.get('/', (req,res)=>{
    db.query('SELECT * FROM role', (err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg: 'error occured', err:err})
        }else{
            res.json(data);
        }
    })
});
}
function addRole(){
router.post('/', (req,res)=>{
    db.query('INSERT INTO role(name)VALUES(?)', [req.body.name],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:'error occured', err:err})
        }else{
            res.json(data);
        }
    })
    
});
}
function deleteRole(){
router.delete('/:id',(req,res)=>{
    db.query('DELETE FROM role WHERE id = ?', [req.params.id],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:'error occurred',err:err})
        }else{
            res.json(data);
        }
    })
})
}

exports.getRole = getRole;
exports.addRole = addRole;
exports.deleteRole = deleteRole;

module.exports = router;