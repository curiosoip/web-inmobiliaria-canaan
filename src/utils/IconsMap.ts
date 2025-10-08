import { WebIcons } from "./icons/WebIcons.ts";
import { ResourceIcons } from "./icons/ResourceIcons.ts";

export const IconsMap:Record<string, (size?: number) => Record<string, string>> = {
  WebIcons,
  ResourceIcons,
};
