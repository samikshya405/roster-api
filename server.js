import express from "express";

import 'dotenv/config.js'
import morgan from "morgan";
import cors from 'cors'
import { connectMongo } from "./src/config/connectMongo.js";
import staffRouter from './src/Router/staffRouter.js';
import departmentRouter from './src/Router/departmentRouter.js'
import rosterRouter from './src/Router/rosterRouter.js'


const app = express()

app.use(cors())

connectMongo()

const port = process.env.PORT || 8000;
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use('/api/v1/staffs',staffRouter)
app.use('/api/v1/departments',departmentRouter )
app.use('/api/v1/rosters', rosterRouter)


app.listen(port, (error)=>{
    error ? console.log(error): console.log("server running in port ", port);

})
