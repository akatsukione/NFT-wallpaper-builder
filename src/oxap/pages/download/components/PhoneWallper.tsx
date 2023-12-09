import * as React from 'react';
import { useState } from "react";
import {
    Box,
    Divider,
    useMediaQuery,
    Typography,
} from '@mui/material/';
import styled from "styled-components";
import monkey_clear from '../../../assets/images/svg/monkey_clear.svg'
import logo_cover from '../../../assets/images/svg/logo_cover.svg'
import { DownloadIcon, SectionTitle, SubSection, AnimateDiscord, Discord } from './TwitterBanner'
import { RoundBtn } from '../../../components/controls/Buttons'
import CustomizeBanner from './CustomizeBanner'
import useDownloadPng from '../../../../hooks/useDownloadPng'
import { SubButtonText } from './HeroOxap'
import ornament4yellow from '../../../assets/images/svg/ornament_phone_yellow.svg'
import ornament4black from '../../../assets/images/svg/ornament_desktop_black.svg'
import ornament4white from '../../../assets/images/svg/ornament_desktop_white.svg'

import { AssembleBanner } from './AssembleBanner'

const MobileBox = styled(Box)`
  max-width: 235.99px;
  height: 510px;
  display: flex;f
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;

`

const LogoCover = styled.img.attrs({
    src: logo_cover,
}) <any>`
  filter: ${({ invert }) => invert ? 'invert(1)' : 'none'};
  width: 134.19px;
  height: 34.24px;
  margin-top: 215px;
`;

export const MonkeyOnMobile = styled.img.attrs(({ monkeyImg }: any) => ({
    src: monkeyImg || monkey_clear,
})) <any>`
  width: 213px;
  height: 213px;
`;

const StubLogoCover = styled(Box)`
  width: 134.19px;
  height: 34.24px;
  margin-top: 215px;
`


export default function PhoneWallpaper() {
    const isMobile = useMediaQuery('(min-width:455px)');
    const [settings, setSettings] = useState({
        ape: '10000',
        color: '#FFD430',
        pattern: 'true',
        logo: 'true',
        img: ''
    });

    const ref = React.useRef<HTMLDivElement>(null)

    const widthEl = 1080
    const heightEl = 1920
    const name = settings.ape
    const typeCover = 'phone-wallpaper'
    const [isDownload, doDownload] = useDownloadPng({ ref, widthEl, heightEl, name, typeCover })

    return (
        <Box>
            <SectionTitle sx={{ textAlign: isMobile ? 'left' : 'center', marginBottom: '40px' }}> Phone Wallpaper </SectionTitle>
            <Box display='flex' flexDirection={isMobile ? 'row' : 'column'} alignItems={isMobile ? 'unset' : 'center'} >

                <MobileBox
                    // ref={ref}
                    sx={{
                        backgroundImage: getBannerBackground(settings),
                        backgroundColor: settings?.color
                    }}>
                    {settings.logo === 'true' ? <LogoCover invert={settings.color === '#000'} /> : <StubLogoCover />}
                    <MonkeyOnMobile monkeyImg={settings.img} />
                </MobileBox>

                < AssembleBanner settings={settings} typeWallpaper={'phone'} ref={ref} />
                <Box ml={isMobile ? '95px' : "0px"}
                    display='flex'
                    flexDirection="column"
                    alignItems={isMobile ? 'start' : 'center'}
                >
                    <SubSection sx={{ marginTop: isMobile ? "0px !important" : "20px" }}>Customize Wallpaper</SubSection>
                    <Box sx={{ flexGrow: 1 }} ml={"20px"}>
                        <CustomizeBanner settingsChanged={setSettings} layout={isMobile ? 'column' : 'row'}
                            mobile={true} />
                    </Box>


                    <Box display='flex' mt='20px' flexDirection={isMobile ? 'row' : 'column'}
                        alignItems={isMobile ? 'initial' : 'center'}>

                        <RoundBtn onClick={doDownload} variant="outlined" startIcon={<DownloadIcon />}>
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
            <Divider sx={{ my: "50px" }} />
        </Box>
    )
}

export const getBannerBackground = (settings: any) => {
    if (settings.pattern === "false") {
        return 'none';
    }
    switch (settings.color) {
        case '#FFD430':
            return `url(${ornament4yellow})`;
        case '#000':
            return `url(${ornament4black})`;
        case '#fff':
            return `url(${ornament4white})`;
        default:
            return 'none';
    }
}
