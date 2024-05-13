import express from "express";
import { getAllStaff, insertNewStaff } from "../Model/staff/staffModel.js";
const router = express.Router()


//add staff to database
router.post('/',async(req,res)=>{
    try {
        const result = await insertNewStaff(req.body)
        result?._id
        ? res.json({
            status: "success",
            message: "New staff has been added",
          })
        : res.json({
            status: "error",
            message: "Unabel to process your request try again later",
          });
    } catch (error) {
        let code = 500;
        if (error.message.includes("E11000 duplicate key error collection")) {
          code = 200;
          error.message =
            "There is already another account associated to this email. Use different email to sigup";
        }
        res.status(code).json({
          status: "error",
          message: error.message,
        });
        
    }

})



//get staff from database
router.get('/',async(req,res)=>{
    try {
        const staffs=await getAllStaff()
        
        staffs.length>0 ? 
        res.json({
            status:"success",
            staffs
        })
        :
        res.json({
            status:"error",
            message:"no staff found"
        })
    } catch (error) {
        console.log(error)

        
    }

})

export default router