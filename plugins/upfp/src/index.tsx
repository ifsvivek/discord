import { logger } from "@vendetta";
import patcher from "./stuff/patcher";
import { stopPlugin } from "@vendetta/plugins";
import { id } from "@vendetta/plugin";

export const dataURL = "https://ifsvivek.github.io/discordpfp/pfp.json";

export let enabled = false;

let unpatch: () => void;
export default {
  onLoad: async () => {
    enabled = true;
    try {
      unpatch = await patcher();
    } catch (e) {
      logger.error(`Errored while patching!\n${e.stack}`);
      stopPlugin(id);
    }
  },
  onUnload: () => {
    enabled = false;
    unpatch?.();
  },
};