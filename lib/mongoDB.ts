import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Base_Store", // 👈 YOUR USERS COLLECTION LIVES HERE
      serverSelectionTimeoutMS: 10000, // 💡 Explicit timeout for clarity
    });

    isConnected = true;
    console.log("✅ MongoDB is connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
};
