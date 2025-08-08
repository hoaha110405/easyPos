import dotenv from "dotenv";
dotenv.config();


import app from "./app.ts";
import { connectDB } from "./config/database.ts";


const PORT = process.env.PORT || 3000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
})();
