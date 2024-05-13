import mongoose from "mongoose";
import departmentSchema from "./departmentSchema.js";

export const insertDepartment = (department) => {
  return departmentSchema(department).save();
};
