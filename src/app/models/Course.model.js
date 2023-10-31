import mongoose from "mongoose";
import slug from "mongoose-slug-updater";

//Mongoose slug generator
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    thoiLuong: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

const course = mongoose.model("Course", Course);

export { course };
