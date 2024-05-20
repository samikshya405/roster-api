import express from "express";
import { getRosterBydeptAndDate, getRosterforAllstaff, insertRoster } from "../Model/roster/rosterModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await insertRoster(req.body);
    result?._id
      ? res.json({
          status: "succes",
          message: "shift added to the roster",
        })
      : res.json({
          status: "error",
          message: "something went wrong try again later",
        });
  } catch (error) {
    console.log(error);
  }
});

router.get('/',async(req,res)=>{
  try {
    const result = await getRosterforAllstaff()
    result?.length>0 ?
    res.json({
      status:"success",
      result
    })
    :
    res.json({
      status:"error",
      message:"could not fetch data something went wrong or there is not data available"
    })
  } catch (error) {
    console.log(error);
    
  }
})

router.get('/rosterByDate',async(req,res)=>{
  try {
    const department = req.body.department;
    const date = req.body.date;
    const result=await getRosterBydeptAndDate(department,date)
    result?.length>0 ?
    res.json({
      status:"success",
      result
    })
    :
    res.json({
      status:"error",
      message:"could not fetch data something went wrong or there is not data available"
    })
    

  } catch (error) {
    console.log(error);
    
  }

})
export default router
