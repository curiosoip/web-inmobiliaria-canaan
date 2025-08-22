import type { ButtonInterface } from "./ButtonInterface";
import type { IconInterface } from "./IconInterface";
import type { TextInterface } from "./TextInterface";

enum TypeContent {
    WEB_CATEGORIA = "web_categoria",
    NOVEDAD = "novedad",
    BLOG = "blog",
    RECURSO = "recurso",
    PROYECTO = "proyecto"
}

export interface CardInterface{
    iconTitle?: IconInterface | null,
    title: TextInterface,
    bannerTitle?:TextInterface,
    description: TextInterface,
    image?: string | null,
    actions?: ButtonInterface[] | null,
    sourceUrl?: string | null,
    type: TypeContent,
    stylesClass: string,
}