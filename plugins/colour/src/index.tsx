import { findByStoreName } from "@vendetta/metro";
import { after } from "@vendetta/patcher";
import { decode3y3, is3y3 } from "./3y3";

const patches = [];
const colorRegex = /\[(\#[0-9a-fA-F]{6})\s*,\s*(\#[0-9a-fA-F]{6})\]/;
const globalColorRegex = new RegExp(colorRegex, "g");

const UserProfileStore = findByStoreName("UserProfileStore");

export function onLoad() {
  patches.push(
    after("getUserProfile", UserProfileStore, (args, resp) => {
      if (!resp) return;

      try {
        if (!is3y3(resp.bio)) return;

        const decoded = decode3y3(resp.bio);

        const colors = decoded.match(colorRegex);
        if (!colors) return;

        colors.shift();

        resp.themeColors = colors.map((c) => parseInt("0x" + c.slice(1)));
        resp.premiumType = 2;
        resp.bio = decoded.replaceAll(globalColorRegex, "");
      } catch {}
    })
  );
}

export const onUnload = () => patches.forEach((u) => u());