import * as React from 'react';
import { useState } from "react";
import {
    Box,
    Divider,
    useMediaQuery,
    Typography
} from '@mui/material/';
import styled from "styled-components";
import logo_cover from '../../../assets/images/svg/logo_cover.svg'
import { SectionTitle, MonkeyOnBanner, IdAPE, SubSection, DownloadIcon } from './TwitterBanner'
import { RoundBtn } from '../../../components/controls/Buttons'
import CustomizeBanner from './CustomizeBanner'
import { AnimateDiscord, Discord } from './TwitterBanner'
import { SubButtonText } from './HeroOxap'
import useDownloadPng from '../../../../hooks/useDownloadPng'
import ornament4yellow from '../../../assets/images/svg/ornament_desktop_yellow.svg'
import ornament4black from '../../../assets/images/svg/ornament_desktop_black.svg'
import ornament4white from '../../../assets/images/svg/ornament_desktop_white.svg'

import { AssembleBanner, converter } from './AssembleBanner'

const DesktopBox = styled(Box)`
  max-width: 946px;
  height: 399px;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
  background-repeat: no-repeat; 
  background-position: 0% 50%;
`
const LogoCoverDesktop = styled.img.attrs({
    src: logo_cover,
}) <any>`
  filter: ${({ invert }) => invert ? 'invert(1)' : 'none'};
  width: 134px;
  width: ${({ widthLogo }) => widthLogo};
  /* height: 35px; */
  margin-top: 20px;
  margin-top:  ${({ mtLogo }) => mtLogo};
`;

const MonkeyOnDesktop = styled(MonkeyOnBanner)`
  width: 146px;
  height: 146px;
  position: unset;
`

function DesktopWall() {
    const isMobile = useMediaQuery('(min-width:455px)');

    const [settings, setSettings] = useState({
        ape: '10000',
        color: '#FFD430',
        pattern: 'true',
        logo: 'true',
        img: '',
        display: "monitor",
        type: "desktop"
    });

    const ref = React.useRef<HTMLDivElement>(null)

    let attr = converter(settings, 'desktop')
    const widthEl = attr?.get("widthBanner")
    const heightEl = attr?.get("heightBanner")
    const name = settings.ape
    const typeCover = 'desktop-wallpaper'
    const [isDownload, doDownload] = useDownloadPng({ ref, widthEl, heightEl, name, typeCover })

    return (
        <Box>
            <DesktopBox sx={{ backgroundImage: getBannerBackground(settings), backgroundColor: settings?.color }} mb='10px'>
                <Box width='146px'
                    display='flex' position='absolute' flexDirection='column' alignItems='center'
                    sx={{ left: "121px", top: '68px', }}>
                    <MonkeyOnDesktop monkeyImg={settings.img} />
                    {settings.logo === 'true' ?
                        <LogoCoverDesktop isMobile={isMobile} invert={settings.color === '#000'} /> : null}
                </Box>
                <IdAPE sx={{
                    color: settings.color === '#000' ? '#fff!important' : "#000"
                }}> #{settings?.ape} </IdAPE>
            </DesktopBox>

            < AssembleBanner settings={settings} typeWallpaper={'desktop'} ref={ref} />

            <Box display={isMobile ? 'block' : 'flex'} flexDirection='column' alignItems='center'>
                <SubSection> Customize Wallpaper </SubSection>

                <CustomizeBanner settingsChanged={setSettings} layout={'row'} desktop={true} />

                <Box display='flex' mt='40px' flexDirection={isMobile ? 'row' : 'column'}
                    alignItems={isMobile ? 'initial' : 'center'}>

                    <RoundBtn
                        onClick={doDownload}
                        variant="outlined" startIcon={<DownloadIcon />}>
                        Download Wallpaper
                    </RoundBtn>

                    <AnimateDiscord ml={isMobile ? '40px' : 0} display={isDownload ? 'flex' : "none"}
                        mt={isMobile ? 'initial' : '25px'}>
                        <Discord />
                        <Box ml='15px'>
                            <SubButtonText $isMobile={isMobile}>Like what we’re doing?</SubButtonText>
                            <Typography sx={{ color: '#000000' }}> Join the NFT Drip Community! </Typography>
                        </Box>
                    </AnimateDiscord>
                </Box>
            </Box>
        </Box>
    )
}


export default function DesktopWallpaper() {
    const isMobile = useMediaQuery('(min-width:455px)');

    return (
        <Box>
            <SectionTitle sx={{ textAlign: isMobile ? 'left' : 'center', marginBottom: '30px' }}> Desktop Wallpaper </SectionTitle>
            <Box>
                <DesktopWall />
            </Box>
            {/* <Divider sx={{ my: "50px" }} /> */}
        </Box>
    )
}


const getBannerBackground = (settings: any) => {
    if (settings.pattern === "false") {
        return 'none';
    }
    switch (settings.color) {
        case '#FFD430':
            return `url(${ornament4yellow}) `;
        case '#000':
            return `url(${ornament4black}) `;
        case '#fff':
            return `url(${ornament4white})`;
        default:
            return 'none';
    }
}


