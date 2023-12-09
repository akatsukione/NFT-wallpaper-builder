import * as React from 'react';
import {
    Box,
    Typography,
    Container,
    Link,
    Grid,
    Button,
}
    from '@mui/material';

import styled from "styled-components";
import { shadows } from '@mui/system';

import useMediaQuery from '@mui/material/useMediaQuery';
import titleBg from '../../assets/images/title-bg-5.png'
import headerLeftMobile from '../../assets/images/header-left-300x433.png'
import headerRighttMobile from '../../assets/images/header-right-300x669.png'
import headerLeftBg from '../../assets/images/header-bg-left.png'
import headerRightBg from '../../assets/images/header-bg-right.png'

import nftdrip_logo from "../../assets/images/svg/nftdrip_logo.svg"
import { TwitterIcon, DiscordIcon } from '../../controls/Icons'
import lavadrip_logo from "../../assets/images/svg/lavadrip_logo.svg"
import discord_icon from "../../assets/images/svg/discord_icon.svg"
import twitter_icon from "../../assets/images/svg/twitter_icon.svg"


import InfoCards from './InfoCards';
import EmailSubmit from "./components/EmailSubmit"
import Footer from '../../components/footer_nft/Footer';
import { discordLink, twitterLink } from "../../config";
import ReactGA from "react-ga4";

ReactGA.initialize("G-5C34TBYD0J");
ReactGA.send("pageview");

interface IconProps {
    sizex?: string
    sizey?: string
}
export const Discord = styled.a.attrs({
    href: discordLink,
    target: '_blank',
    rel: 'nofollow'
}) <IconProps>`
  width: ${({ sizex }) => sizex};
  height: ${({ sizey }) => sizey};
  background-color: #fff;
  -webkit-mask-image: url(${discord_icon});
  mask-image: url(${discord_icon});
  mask-size: cover;
  /* transition: all 300ms;
  transform-style: preserve-3d; */

  &:hover {
    background: linear-gradient(82.34deg, #BB29FF -5.56%, #15E2A8 105.13%);
    /* transform: rotateY(360deg); */
  }
`;

export const Twitter = styled.a.attrs({
    href: twitterLink,
    target: '_blank',
    rel: 'nofollow'
}) <IconProps>`
  width: ${({ sizex }) => sizex};
  height: ${({ sizey }) => sizey};
  margin-top: -2px;
  margin-left: 25px;
  background-color: #fff;
  -webkit-mask-image: url(${twitter_icon});
  mask-image: url(${twitter_icon});
  mask-size: cover;
  /* transition: all 300ms;
  transform-style: preserve-3d; */

  &:hover {
    background: linear-gradient(82.34deg, #BB29FF -5.56%, #15E2A8 105.13%);
    /* transform: rotateY(360deg); */
  }
`;



export const Img = styled.img.attrs(props => ({
    size: props.width || "1em",
}))`
  display: block;
  width: ${props => props.size};
`

interface IsMobile {
    $isMobile?: boolean  // Transient props 
}


export const TitleDrip = styled(Typography) <IsMobile>`
  && {
    font-size: ${({ $isMobile }) => $isMobile ? '72px' : '42px'};
    color: transparent;
    font-weight: 800;
    max-width: 760px;
    text-align: center;
    line-height: 110%;
    margin-top: ${({ $isMobile }) => $isMobile ? '140px' : '100px'};
    background-image: url(${titleBg});
    background-repeat: no-repeat;
    background-size: ${({ $isMobile }) => $isMobile ? '900px 900px' : '400px 900px'};
    background-position: 0 0;
    -webkit-background-clip: text;
    background-clip: text;
  }
`

export const SubTitleDrip = styled(Typography) <IsMobile>`
  && {
    font-size: ${({ $isMobile }) => $isMobile ? '20px' : '28px'};
    color: #FFFFFF;
    font-weight: 500;
    text-align: center;
    line-height: 120%;
    display: 'block';
  }
`


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


export default function Landing() {
    const isMobile = useMediaQuery('(min-width:455px)');
    const isMd = useMediaQuery('(min-width:900px)');

    var intFrameHeight = window.innerHeight;

    const onClickDiscord = () => window.open(discordLink, '_blank')?.focus();

    return (
        <BgBox isMd={isMd}
        // sx={{ minHeight: 'calc(100vh - 70px)' }}
        >

            {/* Main */}
            <Box
                sx={{ minHeight: 'calc(100vh - 0px)' }}
            // sx={{ height: intFrameHeight }}
            >
                <Container>
                    {/* TopHero  */}
                    <Grid container
                        justifyContent="space-between"
                        pt={isMobile ? "60px" : "40px"}
                        flexWrap="nowrap">

                        <Link href="/">
                            <Img width={isMobile ? "180px" : "90px"}
                                src={nftdrip_logo} />
                        </Link>

                        <Box
                            display={isMobile ? 'flex' : "none"}
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <DiscordIcon />
                            <TwitterIcon />
                        </Box>
                        
                    </Grid>

                    {/* Title */}
                    <Grid container justifyContent="center">
                        
                        {/* // AK Todo: make sure this heading looks good responsive  */}
                        <TitleDrip $isMobile={isMobile}>
                            Community Building Tools &amp; Resources
                        </TitleDrip>

                    </Grid>

                    {/*Buttons "Join the Community" HIDE HIDE HIDE HIDE HIDE HIDE HIDE HIDE HIDE*/}
                    <Grid container
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        display="flex"
                        mt={"70px"}
                        mb={"70px"}>
                        <Button variant="text" startIcon={<Discord sizex={"51px"} sizey={"43px"} />}
                            sx={{
                                color: "#FFFFFF",
                                textTransform: 'none',
                                fontWeight: 500,
                            }}
                            onClick={onClickDiscord}
                        >
                            <Typography
                                ml={"5px"}
                            >
                                Join our Community
                            </Typography>
                        </Button>
                        
                    </Grid>

                    {/* Subtitle  */}
                    <Grid container justifyContent="center">

                        <SubTitleDrip>
                            Promote and grow your NFT community!
                        </SubTitleDrip>

                    </Grid>
                
                    {/* <InfoCards /> */}
                    
                        <InfoCards />
                    

                    {/* Join the wait list /EmailForm   HIDE HIDE HIDE HIDE HIDE HIDE HIDE HIDE HIDE */}
                    <Grid item container xs={12}
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="center"
                        display="none"
                        mt={"50px"}
                    >
                        <Box
                            sx={{
                                textTransform: 'capitalize',
                                fontWeight: 500,
                                fontSize: isMobile ? "24px" : "20px",
                                color: "#FFFFFF"
                            }}
                        >
                            join the wait list
                        </Box>
                        <Box
                            sx={{
                                mt: "40px",
                                maxWidth: "100%",
                                width: "600px"
                            }}
                        >
                            <EmailSubmit />
                        </Box>
                    </Grid>


                </Container>
            </Box>

            {/* Footer */}
            <Footer />
        </BgBox>
    );
}
