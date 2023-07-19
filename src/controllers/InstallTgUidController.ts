import { BotInstance } from "../configuration";
import { connectUserService } from "../services";
import { ReplyEnum } from "../enums";
import { getStaticImg } from "../utils";

const installTgUidController = async (): Promise<void> => {
  BotInstance.on("text", async (ctx) => {
    const imei: string = ctx.message.text;
    const tgUid: number = ctx.message.chat.id;
    if (imei.length > 0 && tgUid) {
      try {
        const result = await connectUserService(imei, tgUid);
        if (result) {
          await ctx.replyWithPhoto(
            {
              source: getStaticImg(1),
            },
            { caption: ReplyEnum.SUCCESS_CONNECTION },
          );
        }
      } catch (e) {
        await ctx.replyWithPhoto(
          {
            source: getStaticImg(0),
          },
          { caption: ReplyEnum.ERROR_CONNECTION },
        );
      }
    }
  });
};

export { installTgUidController };
