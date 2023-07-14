import { BotInstance } from "../configuration";
import { ReplyEnum } from "../enums";

const startController = async () => {
  BotInstance.start((ctx) => {
    ctx.reply(ReplyEnum.START);
  });
};

export { startController };
