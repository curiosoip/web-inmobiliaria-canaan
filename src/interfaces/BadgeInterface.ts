import type { IconInterface } from "./IconInterface";

export interface BadgeInterface{
    active:boolean,
    text?:string,
    icon?: IconInterface,
    stylesClass?:string
}