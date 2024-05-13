import staffSchema from "./staffSchema.js";

export const insertNewStaff=(staffDetails)=>{
    return staffSchema(staffDetails).save()

}

export const getAllStaff = ()=>{
    return staffSchema.find()
}