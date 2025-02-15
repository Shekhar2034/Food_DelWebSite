import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Shekhar:Shekhar24@cluster0.4malg.mongodb.net/food-del').then(() => console.log("DB Connected"));
}