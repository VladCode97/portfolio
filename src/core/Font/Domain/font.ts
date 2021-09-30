interface IFont {
    content: string;
}

export interface IFontStyle {
    fontSize: string
    fontFamily: string;
    fontWeight: number;
    width: string;
    color: string;
}

export type TFont = IFont & IFontStyle;