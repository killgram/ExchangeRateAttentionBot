import { BotInstance } from "../configuration";
import { ReplyEnum } from "../enums";
import { getStaticImg } from "../utils";

const startController = async () => {
  BotInstance.start(async (ctx) => {
    await ctx.replyWithPhoto(
      {
        source: getStaticImg(2),
      },
      { caption: ReplyEnum.START },
    );
  });
};

export { startController };
