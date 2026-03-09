import mongoose from "mongoose";
import { mongoDBURL } from "../Config.js";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(mongoDBURL);
        console.log("Database connected");
    } catch (error) {
        console.log(error)
    }
}
