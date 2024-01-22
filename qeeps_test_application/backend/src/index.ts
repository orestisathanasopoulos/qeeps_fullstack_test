import { createServer } from "http";
import "./helpers/env.load";
import mongoose from "mongoose";
import expressApp from "./index.app";
import "./helpers/env.load";

export const httpServer = createServer(expressApp);
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI || "");
mongoose.connection.on("error", (error: Error) => console.log(error));

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
