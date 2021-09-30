import StyledComponent from 'styled-components'
import { IFontStyle} from "./font";
/**
 * Font
 */
export const SpanStyle:any = StyledComponent.span`
    font-family: ${(props: IFontStyle) => (props.fontFamily) ? props.fontFamily : 'auto'};
    font-weight: ${(props: IFontStyle) => (props.fontWeight) ? props.fontWeight : 'auto'};
    font-size: ${(props: IFontStyle) => (props.fontSize) ? props.fontSize : 'auto'};
    color: ${(props: IFontStyle) => (props.color) ? props.color : 'auto'};
`;