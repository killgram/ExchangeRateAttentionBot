import { BotInstance } from "../configuration";
import { ReplyEnum } from "../enums";

const startController = async () => {
  BotInstance.start((ctx) => {
    console.log(ctx.message.from.language_code);
    ctx.reply(ReplyEnum.START);
  });
};

export { startController };
