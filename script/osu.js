const axios = require("axios");
module.exports.config = {
  name: "getstats",
  version: "1.1",
  hasPermssion: 0,
  credits: "Shen",
  description: "Get your osu mania signature!",
  commandCategory: "other",
  usages: "<Username> <std/mania/taiko/catch> <en/cn>",
  hasPrefix: false,
  cooldowns: 5,
  dependencies: {
    }
};

module.exports.run = async ({ event, api, args, }) => {
    const username = args[0];
    const mode = args[1];
    const language = args[2];
    
    if (!username) {
      return api.sendMessage("⚠️ | Please enter a username!", event.threadID, event.messageID);
    } else if (!["std", "taiko", "catch", "mania"].includes(mode)) {
      return api.sendMessage("⚠️ | Please enter a valid mode (std, taiko, catch, mania)!", event.threadID, event.messageID);
    } else if (!["en", "cn"].includes(language)) {
      return api.sendMessage("⚠️ | Please enter a valid language (cn, en)!", event.threadID, event.messageID);
    } else { 
      try {
        const BASE_URL = `https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/https://osu-sig.vercel.app/card?user=${username}&mode=${mode}&lang=${language}&w=2002&h=1165&animation=false`;
        const form = {
          body: "",
        };
        form.attachment = [];
        form.attachment[0] = await global.utils.getStreamFromURL(BASE_URL);
        api.sendMessage(form);
    }
    catch (e) {
      api.sendMessage("Unknown API error");
    }
  }
                             }
