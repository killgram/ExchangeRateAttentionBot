import { BotInstance } from "../configuration";
import { startController } from "./StartController";

const runBotController = async () => {
  // messages
  await startController();

  // runner
  await BotInstance.launch();
};

export { runBotController };
