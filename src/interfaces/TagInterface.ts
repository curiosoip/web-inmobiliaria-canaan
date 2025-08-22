import type { IconInterface } from "./IconInterface";
import type { TextInterface } from "./TextInterface";

export interface TagInterface {
    name: TextInterface;
    icon?: IconInterface;
    stylesClass: string;
}