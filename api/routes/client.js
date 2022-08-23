const router = require("express").Router();
const db = require("../database");
const dotenv = require("dotenv");
dotenv.config();

//crud operations for user

//get client
router.get("/get-clients",async (req,res)=>{
    try {
        db.query("select * from client;",(err,result)=>{
            if(err){
                console.log(err);
                res.status(500).send(err);
                return;
            }
            res.status(200).send(result);
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//modify client
router.post("/update-client",async (req,res)=>{
    try {
        let {status,id} = req.body;
        console.log(req.body);
        let query = 'update client set status = ? where id = ?';values = [status,id];
        db.query(query,values,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send(err);
                return;
            }
        })
        res.status(200).send("client updated successfully")
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete client
router.delete("/delete-client",async (req,res)=>{
    try {
        let {id} = req.query;
        let query = 'delete from  client where id = ?';values = [id];
        db.query(query,values,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send(err);
                return;
            }
        })
        res.status(200).send("client deleted successfully")

    } catch (error) {
        res.status(500).send(error);
    }
})

//add client
router.post("/add-client",async (req,res)=>{
    try {
        let {name,info,status} = req.body;
        let query = 'insert into client values (null,?,?,?);';values = [name,info,status];
        db.query(query,values,(err)=>{
            if(err){
                console.log(err);
                res.status(500).send(err);
                return;
            }
        })
        res.status(200).send("client added successfully")
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;