import { CONSTANTS } from "../configuration";

const genHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${CONSTANTS.BOT_ACCESS_TOKEN}`,
    },
  };
};

export { genHeaders };
