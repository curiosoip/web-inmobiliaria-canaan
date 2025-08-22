import type { IconInterface } from "./IconInterface";
import type { TextInterface } from "./TextInterface";

export interface ButtonInterface {
    active: boolean,
    text?: TextInterface,
    stylesClass: string,
    iconLeft?: IconInterface,
    iconRight?: IconInterface,
    onClick?: () => void,
    type?: "button" | "submit" | "reset"
}
