import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect( process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });
    mongoose.connection.on("connected", () => console.log("✅ Mongoose connected"));
     } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default dbConnect;