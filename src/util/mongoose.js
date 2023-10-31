function multipleMongooseToObject(mongooses) {
  return mongooses.map((mongoose) => mongoose.toObject());
}
function mongooseToObject(mongooses) {
  return mongooses.toObject();
}

export { multipleMongooseToObject };
export { mongooseToObject };
