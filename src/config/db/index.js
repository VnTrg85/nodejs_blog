import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/coding_course");
    console.log("Connect Successfully");
  } catch (error) {
    console.log("Connect Failed: ");
  }
}

export { connect };
