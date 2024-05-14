import express from "express";
import { getDepartment, insertDepartment } from "../Model/department/departmentModel.js";
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

router.get('/',async(req,res)=>{
    try {
        const departments = await getDepartment()
        departments.length>0 ?
        res.json({
            status:"success",
            departments

        }):
        res.json({
            status:"error",
            message:"could not find any departments"
        })
    } catch (error) {
        console.log(error);
        
    }

})
export default router