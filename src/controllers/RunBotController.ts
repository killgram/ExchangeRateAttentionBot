import { BotInstance } from "../configuration";
import { startController } from "./StartController";
import { installTgUidController } from "./InstallTgUidController";

const runBotController = async () => {
  // messages
  await startController();
  await installTgUidController();

  // runner
  await BotInstance.launch();
};

export { runBotController };
