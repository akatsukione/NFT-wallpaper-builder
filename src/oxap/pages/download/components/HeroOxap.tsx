import * as React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material/';
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';
import TopHero from '../../../components/TopHeroOxap'
import rank_line from '../../../assets/images/svg/rank_line.svg';
import twitter_profile from '../../../assets/images/svg/twitter_profile.svg';
import tweet_page from '../../../assets/images/svg/tweet_page.svg';
import generate from '../../../assets/images/svg/generate.svg';

interface LayoutProps {
    $isMobile?: boolean;
    $is1300?: boolean
}

const ContainerHero = styled(Container) <LayoutProps>`
    background: linear-gradient(180deg, #FFD430 0%, #FFCA00 100%);
    /* transform: matrix(1, 0, 0, -1, 0, 0); */
    /* height: 800px;   */
    height: ${({ $isMobile }) => $isMobile ? "800px" : "640px"}; 
`
const Title = styled(Typography) <LayoutProps>`
   
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
export const SubButtonText = styled(Typography) <LayoutProps>`
    /* font-family: Aeonik; */
    font-style: italic;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
    /* text-align: left; */
    text-align: ${({ $isMobile }) => $isMobile ? "left" : "center"};
    margin-top: 10px;
`

const ButtonHero = styled(Button) <LayoutProps>`
    height: 50px;
    /* margin-top: 46px; */
    margin-top: ${({ $isMobile }) => $isMobile ? "46px" : "20px"};
    border: 1px solid #000000;
    border-radius: 6px;
    color: #000000;
    font-weight: bold;
    font-size: 14px;
    padding-left: 40px;
    padding-right: 40px;
    width: ${({ $isMobile }) => $isMobile ? "initial" : "230px"};;
    z-index: 2;
`
const RankIcon = styled.img.attrs({
    src: rank_line,
})`
    max-width: 100%;
    width: 20px;
    height: 17px;
  `;

const GenerateIcon = styled.img.attrs({
    src: generate,
})`
    max-width: 100%;
    width: 20px;
    height: 17px;
  `;

const TwitterProfile = styled.img.attrs({
    src: twitter_profile,
}) <LayoutProps>`
    /* max-width: 213.64px; */
    max-width: ${({ $isMobile }) => $isMobile ? "213.64px" : "113.64px"};
    /* height: 462.37px; */
    display: block;
    position: absolute;
    /* right: 550px;
    top: 100px; */
    right: ${({ $isMobile }) => $isMobile ? "550px" : "389px"};
    top: ${({ $isMobile }) => $isMobile ? "100px" : "166px"};
    box-shadow: 0px 34.367px 124.971px rgba(211, 140, 0, 0.46);
    /* filter: drop-shadow(0px 34.367px 124.971px rgba(211, 140, 0, 0.46)) !important; */
    border-radius: 12.5px;
  `;

const TweetPage = styled.img.attrs({
    src: tweet_page,
}) <LayoutProps>`
    /* max-width: 673px; */
    max-width: ${({ $isMobile }) => $isMobile ? "673px" : "473px"};
    /* height: 492px; */
    display: block;
  `

export default function HeroOxap() {
    const $is1300 = useMediaQuery('(min-width:1300px)');
    const $is900 = useMediaQuery('(min-width:900px)');
    const $isMobile = useMediaQuery('(min-width:455px)');

    return (
        <ContainerHero $isMobile={$is1300} disableGutters maxWidth={false}>
            <Container>
                <TopHero />
                <Box mt={$is1300 ? "178px" : $isMobile ? "130px" : '80px'}>
                    <Title $isMobile={$isMobile} $is1300={$is1300}>
                        Custom 0XAP3S Covers & Wallpapers
                    </Title>
                    <SubTitle $isMobile={$isMobile}>
                        Generate your custom 0XAPE wallpaper!
                    </SubTitle>
                    <Box display="flex"
                        flexDirection={$isMobile ? 'row' : 'column'}
                        justifyContent={$isMobile ? 'flex-start' : 'center'}
                        alignItems={$isMobile ? 'flex-start' : 'center'}
                    >
                        <Box>
                            <ButtonHero $isMobile={$isMobile} sx={{ marginRight: $isMobile ? '20px' : 0 }}
                                variant="outlined" startIcon={<GenerateIcon />}
                                onClick={(e) => ScrollToHref_W(e)} data-href="#twitter_banner">
                                Generate
                            </ButtonHero>
                            {/* <SubButtonText>free forever</SubButtonText> */}
                        </Box>
                        <Box sx={{ display: 'none' }} >
                            <ButtonHero $isMobile={$isMobile} variant="outlined" startIcon={<RankIcon />}>
                                view rankings
                            </ButtonHero>
                            <SubButtonText $isMobile={$isMobile} >extension coming soon</SubButtonText>
                        </Box>
                    </Box>
                </Box>
            </Container>
            {$is900
                ? <Box display="flex" justifyContent="end" mt={$is1300 ? '-450px' : '-340px'} position={'relative'}>
                    <TwitterProfile $isMobile={$is1300} />
                    <TweetPage $isMobile={$is1300} />
                </Box>
                : ''
            }
        </ContainerHero>
    )
}


const ScrollToHref_W = (event: any) => {
    const href = (event.target as any).closest('button').dataset.href
    const $anchor = document.querySelector(href);
    $anchor && window.scroll({
        top: $anchor.offsetTop,
        left: 0,
        behavior: 'smooth',
    });
}
