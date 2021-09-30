import {FC} from "react";
import {TFont} from "../Domain/font";
import {SpanStyle} from "../Domain/style";

export const Font: FC<TFont> = (props) => {
    return <>
        <SpanStyle style={{
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            width: props.width,
            fontWeight: props.fontWeight,
            color: props.color
        }}>{props.content}</SpanStyle>
    </>
}