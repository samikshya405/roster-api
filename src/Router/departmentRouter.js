import express from "express";
import { insertDepartment } from "../Model/department/departmentModel.js";
const router = express.Router()

router.post('/',async(req,res)=>{
    try {
        const result = await insertDepartment(req.body)
        result._id ?
        res.json({
            status:"success",
            message:"department added successfully"
        })
        :
        res.json({
            status:"error",
            message:"failed to add department. Try again later"
        })
        
    } catch (error) {
        console.log(error);
        
    }
})

export default router