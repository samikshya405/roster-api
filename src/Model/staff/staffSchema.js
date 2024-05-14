import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({
    department:{
        type:String,
        required:true

    },
    fName:{
        type:String,
        requird:true
    },
    lName:{
        type:String,
        requird:true
    },
    phone:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        requird:true
    }

})

export default mongoose.model("Staff", staffSchema )