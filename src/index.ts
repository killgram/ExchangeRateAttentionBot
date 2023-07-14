import express, { Application } from "express";
import cors from "cors";
import { runBotController } from "./controllers";

const app: Application = express();
const PORT = process.env.PORT || 9987;

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

runBotController().then(() => {});

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
