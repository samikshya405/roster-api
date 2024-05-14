import express from "express";
import { insertRoster } from "../Model/roster/rosterModel.js";
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

export default router
