import * as React from 'react';
import {
    Box,
    Container,
    useMediaQuery,
} from '@mui/material/';
import HeroOxap from './components/HeroOxap'
import TwitterBanner from './components/TwitterBanner'
import Extention from './components/Extention'
import FooterOxap from '../../components/FooterOxap'
import PhoneWallpaper from './components/PhoneWallper'
import DesktopWallerpaper from './components/DesktopWallpaper'
import ReactGA from "react-ga4";

ReactGA.initialize("G-5C34TBYD0J");
ReactGA.send({hitType: "pageview", page: "/collection/0xapes-trilogy/downloads"});

export default function Download() {
    const isMobile = useMediaQuery('(min-width:455px)');

    return (
        <Container disableGutters maxWidth={false} className='bg-white'>
            <HeroOxap/>
            <Container>
                <Box mx={isMobile ? "40px" : "0px"}>
                    <TwitterBanner/>
                    <PhoneWallpaper/>
                    <DesktopWallerpaper/>
                    {/* <Extention /> */}
                </Box>
            </Container>
            <FooterOxap/>
        </Container>
    )
}
