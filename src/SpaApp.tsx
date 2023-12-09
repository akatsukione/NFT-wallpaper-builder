import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

import HeroNFT from './components/hero/Hero';
import FeaturesNFT from './pages/features_nft/FeaturesNFT';
import MissionNFT from './pages/missions_nft/MissionNFT';
import FooterNFT from './components/footer_nft/FooterNFT';
import BottomMenu from './components/bottom_menu/BottomMenu'
import { RoadmapNFT } from "./components/roadmap_nft/RoadmapNFT";

import headerLeftBg from './assets/images/header-bg-left.png'
import headerRightBg from './assets/images/header-bg-right.png'

import headerLeftMobile from './assets/images/header-left-300x433.png'
import headerRighttMobile from './assets/images/header-right-300x669.png'
import styled from "styled-components";
import ReactGA from "react-ga4";

ReactGA.initialize("G-5C34TBYD0J");
ReactGA.send({ hitType: "pageview", page: "/secret-landing" });

interface BgBoxProps {
    isMd: boolean
}

const BgBox = styled(Box) <BgBoxProps>`
  background-image: url(${({ isMd }) => isMd ? headerLeftBg : headerLeftMobile}),
  url(${({ isMd }) => isMd ? headerRightBg : headerRighttMobile});
  background-repeat: no-repeat, no-repeat;
  background-position: top left, top right;
  ${({ isMd }) => !isMd ? 'background-size: 300px, 250px' : ''}
`

function SpaApp() {
    const isMd = useMediaQuery('(min-width:900px)');
    return (
        <BgBox isMd={isMd}>
            <Container>
                <HeroNFT />

                <Box sx={{ mx: "30px" }}>
                    <BottomMenu />
                    <RoadmapNFT />
                </Box>
                
                <FeaturesNFT />
                <FeaturesNFT />
                <MissionNFT />
                <FooterNFT />
            </Container>
        </BgBox>
    );
}

export default SpaApp;
