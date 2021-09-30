import {ContainerFont} from "../DOMAIN/style";
import {Font} from "../../../core/Font/UI/font";
import {EPaletteColors} from "../../../core/PaletteColors/palette-colors";

export const ContentData = () => {
    return <>
        <ContainerFont>
            {/** Font I'm **/}
            <Font width={'40%'} content={'Hello, I’m Luis' +
            ' Bonilla and'}
                  fontSize={'4rem'} fontFamily={'Arial'}
                  fontWeight={600} color={'WHITE'}/>
            {/** Font Engineer Software **/}
            <Font width={'40%'} content={' I’m Engineer software'}
                  fontSize={'4rem'} fontFamily={'Arial'}
                  fontWeight={600}
                  color={EPaletteColors.YELLOW_PRINCIPAL}/>
            {/** Font Born **/}
            <div style={{marginTop: '23px'}}>
                <Font width={'40%'} content={'Born'}
                      fontSize={'2rem'} fontFamily={'Arial'}
                      fontWeight={600}
                      color={'WHITE'}/>
                <br/>
                <Font width={'40%'} content={'Santiago' +
                ' de' +
                ' Cali,' +
                ' Colombia'}
                      fontSize={'2rem'} fontFamily={'Arial'}
                      fontWeight={100}
                      color={'WHITE'}/>
                <br/>
                <Font width={'40%'} content={'Lives and work in Colombia'}
                      fontSize={'1.5rem'} fontFamily={'Arial'}
                      fontWeight={100}
                      color={'WHITE'}/>
            </div>
        </ContainerFont>
    </>
}