import { Telegraf } from "telegraf";
import { CONSTANTS } from "./Contsants";

const BotInstance = new Telegraf(CONSTANTS.BOT_TOKEN);

export { BotInstance };
