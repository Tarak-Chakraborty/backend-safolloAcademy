import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tarak:9647491409@cluster0.0c6u6ec.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
