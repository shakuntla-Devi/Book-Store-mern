// 

// import mongoose from "mongoose";

// export const ConnectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected ✅");
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//     throw error;
//   }
// };


import mongoose from "mongoose";

export const ConnectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) throw new Error("MONGO_URI is not defined!");

  try {
    // ✅ No extra options
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
};