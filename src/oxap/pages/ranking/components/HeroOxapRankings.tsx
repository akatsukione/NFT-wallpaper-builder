import * as React from 'react';
import {
    Box,
    Container,
    Typography,
} from '@mui/material/';
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';
import TopHero from '../../../components/TopHeroOxap';
import monkey_group from '../../../assets/images/monkey_group2.png'

import { DownloadIcon, ButtonHero, ChromeIcon } from '../../../components/controls/Buttons'

interface LayoutProps {
    $isMobile?: boolean;
    $is1300?: boolean
}

const ContainerHero = styled(Container) <LayoutProps>`
    background: linear-gradient(180deg, #FFD430 0%, #FFCA00 100%);
    /* transform: matrix(1, 0, 0, -1, 0, 0); */
    height: 540px;  
    /* height: ${({ $isMobile }) => $isMobile ? "443px" : "640px"};  */
`
const Title = styled(Typography) <LayoutProps>`
    /* font-family: Aeonik; */
    font-style: normal;
    font-weight: bold;
    /* font-size: 64px; */
    font-size: ${({ $is1300 }) => $is1300 ? "64px" : "42px"};
    line-height: 110%;
    color: #000000;
    /* margin-top: 178px; */
    /* margin-top: ${({ $is1300 }) => $is1300 ? "178px" : "130px"}; */
    display: block;
    max-width: 490px;
    text-align: ${({ $isMobile }) => $isMobile ? "left" : "center"};
`
const SubTitle = styled(Typography) <LayoutProps>`
    /* font-family: Aeonik; */
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-top: 20px;
    display: block;
    text-align: ${({ $isMobile }) => $isMobile ? "left" : "center"};
`

const MonkeyBand = styled.img.attrs({
    src: monkey_group,
}) <LayoutProps>`
    width: 405px;
    height: 273px;
    display: block;
  `;

export default function HeroOxapRankings() {
    const $is1300 = useMediaQuery('(min-width:1300px)');
    const $isMobile = useMediaQuery('(min-width:455px)');

    return (
        <ContainerHero $isMobile={$is1300} disableGutters maxWidth={false}>
            <Container>
                <TopHero />
                <Box display='flex' justifyContent='space-between'>
                    <Box mt={$is1300 ? "80px" : $isMobile ? "80px" : '80px'}>
                        <Title $isMobile={$isMobile} $is1300={$is1300}>
                            0xApes Rankings
                        </Title>
                        <SubTitle $isMobile={$isMobile}>
                            There are no duplicates. 0xApes Trilogy are driving uniqueness...
                        </SubTitle>
                        <Box display="flex"
                            flexDirection={$isMobile ? 'row' : 'column'}
                            justifyContent={$isMobile ? 'flex-start' : 'center'}
                            alignItems='center'
                        >
                            <Box>
                                <ButtonHero $isMobile={$isMobile} sx={{ marginRight: $isMobile ? '20px' : 0 }} variant="outlined" startIcon={<ChromeIcon />}>
                                    download the extension
                                </ButtonHero>
                            </Box>
                            <Box>
                                <ButtonHero $isMobile={$isMobile} variant="outlined" startIcon={<DownloadIcon />}>
                                    Downloads
                                </ButtonHero>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <MonkeyBand />
                    </Box>
                </Box>
            </Container>
        </ContainerHero>
    )
}