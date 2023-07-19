import { BotInstance } from "../configuration";
import { Markup } from "telegraf";

const installTgUidController = async () => {
  // BotInstance.on("message", async (ctx) => {
  //   // console.log(ctx.state);
  // });

  BotInstance.on("message", async (ctx) => {
    // console.log(ctx.message?.location);
    // ctx.replyWithLocation()
    // ctx.telegram.sendLocation(chat id , latitude, longitude)
    // ctx.reply(
    //   "Special buttons keyboard",
    //   Markup.keyboard([
    //     Markup.button.locationRequest("Send location"),
    //   ]).resize(),
    // );

    const option: any = {
      parse_mode: "Markdown",
      reply_markup: {
        one_time_keyboard: true,
        keyboard: [
          [
            {
              text: "My location",
              request_location: true,
            },
          ],
          ["Cancel"],
        ],
      },
    };

    ctx.sendMessage("How can we contact you?", option).then((r) => {
      // handle user phone
      console.log(r);
    });
  });
};

export { installTgUidController };
