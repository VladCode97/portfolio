import {
    ContainerHome,
    ContentImages, ContentInformationImages,
    InformationItem,
} from "../DOMAIN/style";
import ImageSource from '../background.png';
import {ContentData} from "./content-data";


export const HomeUi = () => {
    return (
        <ContainerHome configurationColumnsGridTemplate={'600px 1fr'}>
            <ContentImages>
                <ContentInformationImages>
                    <img style={{width: "57.8%", height: "70.005vh"}}
                         src={ImageSource} alt="background"/>
                    <ContentData/>
                </ContentInformationImages>
            </ContentImages>
            <InformationItem/>
        </ContainerHome>
    )
}