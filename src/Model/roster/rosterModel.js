import rosterSchema from "./rosterSchema.js"

export const insertRoster=(rosterDetails)=>{
    return rosterSchema(rosterDetails).save()
}

export const getRosterforAllstaff = ()=>{
    return rosterSchema.find()
}