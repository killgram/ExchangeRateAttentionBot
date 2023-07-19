import axios from "axios";
import { ResourcesEnum } from "../enums";
import { genHeaders } from "../utils";

const connectUserService = async (imei: string, tgUid: number) => {
  const userData = await axios.post(
    ResourcesEnum.CONNECT_USER_TO_BOT_LINK,
    {
      imei: imei,
      tgUid: tgUid,
    },
    {
      ...genHeaders(),
    },
  );

  return userData.data?.success;
};

export { connectUserService };
