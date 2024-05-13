import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({
    department:{
        type:String,
        required:true

    },
    firstName:{
        type:String,
        requird:true
    },
    lastName:{
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