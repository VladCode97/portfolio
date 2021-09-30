import StyledComponent from 'styled-components'
import {EPaletteColors} from "../../../core/PaletteColors/palette-colors";

export const ContainerHome: any = StyledComponent.div`
    position: relative;
    display: grid;
    grid-template-columns: ${(props: any) => (props.configurationColumnsGridTemplate)};
    height: 100vh;
`;

export const ContentImages: any = StyledComponent.div`
    position: relative;
`;
export const ContentInformationImages: any = StyledComponent.div`
    position: absolute;
    background: ${EPaletteColors.BLACK_PRINCIPAL};
    width: 173%;
    height: 70vh;
    top: 30%;
`;

export const ContainerFont = StyledComponent.div`
    position: absolute;
    width: 70%;
    top: 30%;
    left: 70%;
`;

export const InformationItem: any = StyledComponent.div`
    background: ${EPaletteColors.BLUE_PRINCIPAL};
`;