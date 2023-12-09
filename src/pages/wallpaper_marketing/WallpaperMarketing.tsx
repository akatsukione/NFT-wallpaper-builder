import * as React from 'react';
import {
    Box,
    Typography,
    Container,
    Link,
    Grid,
    Button,
} from '@mui/material';

import styled from "styled-components";

import useMediaQuery from '@mui/material/useMediaQuery';

import titleBg from '../../assets/images/title-bg-5.png'

import headerLeftMobile from '../../assets/images/header-left-300x433.png'
import headerRighttMobile from '../../assets/images/header-right-300x669.png'
import headerLeftBg from '../../assets/images/header-bg-left.png'
import headerRightBg from '../../assets/images/header-bg-right.png'

import wallpaperBuilderPreview from '../../assets/images/wallpaper-builder-preview.png'
import wallpaperFig from '../../assets/images/wallpaperFig.png'
import builderFig from '../../assets/images/builderFig.png'
import twMarketingFig from '../../assets/images/twitter-marketing-fig.png'

import nftdrip_logo from "../../assets/images/svg/nftdrip_logo.svg"
import { TwitterIcon, DiscordIcon } from '../../controls/Icons'
import {
    DiscordIcon2,
    TwitterIcon2,
    PlusIcon,
    ColorChangeIcon,
    PatternIcon,
    NFTLogoIcon,
    ImgPlacementIcon,
    WhitelabelIcon,
    BuildingIcon,
    TwMarketingIcon,
    SendIcon,
} from '../../assets/icon/icon_store'

import {
    TitleDrip
} from '../landing/Landing'


import Footer from '../../components/footer_nft/Footer';
import { discordLink } from "../../config";

import ReactGA from "react-ga4";
ReactGA.initialize("G-5C34TBYD0J");
ReactGA.send("pageview");





export const Img = styled.img.attrs(props => ({
    size: props.width || "1em",
}))`
  display: block;
  width: ${props => props.size};
`

interface IsMobile {
    $isMobile?: boolean  // Transient props 
}

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
                    <Grid container justifyContent="center" mb={"40px"}>
                        
                        {/* // AK Todo: make sure this heading looks good responsive  */}
                        <TitleDrip $isMobile={isMobile}>
                            Community <br/> Resource Builder
                        </TitleDrip>

                    </Grid>

                    <Grid container justifyContent="center" mb={"60px"}>

                        <Button variant="outlined" color="primary" href="/collection/0xapes-trilogy/twitter-wallpaper-builder/" >
                            Live Demo
                        </Button>

                    </Grid>

                    <Grid container justifyContent="center">

                        <Link href="/collection/0xapes-trilogy/twitter-wallpaper-builder/" 
                            sx={{ 
                                display: "inline-block", 
                                mb: "40px"
                            }}
                        >
                            <Img width={isMobile ? "100%" : "100%"}
                                src={wallpaperBuilderPreview} />
                        </Link>

                    </Grid>

                    {/* Contact Section */}
                    <Grid container justifyContent="center" mt="160px" mb="220px" columnSpacing={4} flexWrap="wrap">

                        <Grid item xs={12} md={5}>
                            
                            <Box mt={"-60px"} ml={"-10px"} >
                                <PlusIcon/>
                            </Box>

                            <Typography variant='h2' 
                                sx={{
                                    mb: "30px",
                                    fontSize: isMobile ? "3.5rem !important" : "2.5rem !important",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                }}
                            >
                                    Custom <br/> Twitter Covers & Wallpapers
                            </Typography>

                            <Typography paragraph sx={{ fontSize: "1.25rem !important", mb: "30px" }} >
                                Promote and grow your community!
                            </Typography>

                            <Button variant="text" color="primary" startIcon={<SendIcon />} href="https://twitter.com/NFTDripApp"> 
                                Contact Us on twitter
                            </Button>

                        </Grid>

                        <Grid item xs={12} md={6} alignItems="center">
                            <Img width={isMobile ? "100%" : "100%"} 
                                src={wallpaperFig } />
                        </Grid>

                    </Grid>

                    {/* Features Section */}
                    <Grid container justifyContent="center" mt="160px" mb="240px" columnSpacing={4} flexWrap="wrap">

                        <Grid item xs={12} sx={{ mb: isMobile ? "20px" : "30px", }} >

                            <Typography variant='h2' mb={"67px"}
                                sx={{
                                    mb: "20px",
                                    fontSize: isMobile ? "3.5rem !important" : "2.5rem !important",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                    textAlign: "center"
                                }}
                            >
                                    Twitter Banner & <br/> Wallpaper Customizations
                            </Typography>

                            <Typography paragraph 
                                sx={{ 
                                    color: "#9b9b9b", 
                                    fontSize: ".875rem !important",
                                    fontStyle: "italic",
                                    textAlign: "center"
                                }}>
                                *Additional customizable options availible upon request
                            </Typography>

                        </Grid>

                        <Grid item xs={10} md={4}>
                                
                            <Box sx={{ display: 'flex', mb: "10px" }}> 
                            
                                <Box>
                                    <ColorChangeIcon/>
                                </Box>

                                <Typography
                                    sx={{
                                        ml: "5px",
                                        pt: "13px",
                                        fontSize: "1.125rem !important",
                                        fontWeight: "500",
                                        fontStyle: "normal",
                                        lineHeight: 1,
                                    }}
                                >
                                    Change colors
                                </Typography>
                                
                            </Box>

                            <Box sx={{ display: 'flex', mb: "10px" }}> 
                            
                                <Box >
                                    <PatternIcon/>
                                </Box>

                                <Typography
                                    sx={{
                                        ml: "5px",
                                        pt: "12px",
                                        fontSize: "1.125rem !important",
                                        fontWeight: "500",
                                        fontStyle: "normal",
                                        lineHeight: 1,
                                    }}
                                >
                                    Choose patterns
                                </Typography>
                                
                            </Box>

                            <Box sx={{ display: 'flex', mb: "0px" }}> 
                            
                                <Box >
                                    <NFTLogoIcon/>
                                </Box>

                                <Typography
                                    sx={{
                                        ml: "5px",
                                        pt: "11px",
                                        fontSize: "1.125rem !important",
                                        fontWeight: "500",
                                        fontStyle: "normal",
                                        lineHeight: 1,
                                    }}
                                >
                                    NFT Collection Logo
                                </Typography>
                                
                            </Box>
                            
                        </Grid>

                        <Grid item xs={10} md={4} alignItems="center">

                            <Box sx={{ display: 'flex', mb: "10px" }}> 
                            
                                <Box >
                                    <ImgPlacementIcon/>
                                </Box>

                                <Typography
                                    sx={{
                                        ml: "5px",
                                        pt: "12px",
                                        fontSize: "1.125rem !important",
                                        fontWeight: "500",
                                        fontStyle: "normal",
                                        lineHeight: 1,
                                    }}
                                >
                                    NFT image placement
                                </Typography>
                                
                            </Box>

                            <Box sx={{ display: 'flex', mb: "0px" }}> 
                            
                                <Box >
                                    <WhitelabelIcon/>
                                </Box>

                                <Box>

                                    <Typography
                                        sx={{
                                            ml: "5px",
                                            mb: "10px",
                                            pt: "11px",
                                            fontSize: "1.125rem !important",
                                            fontWeight: "500",
                                            fontStyle: "normal",
                                            lineHeight: 1,
                                        }}
                                    >
                                        White-label option
                                    </Typography>

                                    <Typography paragraph 
                                        sx={{ 
                                            ml: "5px",
                                            color: "#9b9b9b", 
                                            lineHeight: 1.25,
                                    
                                        }}>
                                        *Additionaly we can remove all NFT Drip branding & host the Community Resource Builder on your site’s sub-domain.
                                    </Typography>
                                
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>

                    {/* Community Building Section */}
                    <Grid container justifyContent="center" mt="160px" mb="220px" columnSpacing={4} flexWrap="wrap">

                        <Grid item xs={12} md={6} alignItems="center">
                            <Img width={isMobile ? "100%" : "100%"} 
                                src={builderFig } />
                        </Grid>

                        <Grid item md={1}></Grid>

                        <Grid item xs={12} md={5}>
                            
                            <Box mt={"-20px"} ml={"-10px"} >
                                <BuildingIcon />
                            </Box>

                            <Typography variant='h2' 
                                sx={{
                                    mb: "30px",
                                    fontSize: isMobile ? "3.5rem !important" : "2.5rem !important",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                }}
                            >
                                Community Building
                            </Typography>

                            <Typography paragraph sx={{ fontSize: "1rem !important", mb: "30px" }} >
                                When community members customize a cover or wallpaper, they can tweet about it just to show it off or to gamify a contest or giveaway.
                                
                                It’s up to you how you want to utilize this resource for your community!
                            </Typography>

                        </Grid>

                    </Grid>

                    {/* Twitter Integration Section */}
                    <Grid container justifyContent="center" mt="160px" mb="220px" columnSpacing={4} flexWrap="wrap">

                        <Grid item md={1}></Grid>

                        <Grid item xs={12} md={4}>
                            
                            <Box mt={"20px"} ml={"-10px"} >
                                <TwMarketingIcon />
                            </Box>

                            <Typography variant='h2' 
                                sx={{
                                    mb: "30px",
                                    fontSize: isMobile ? "3.5rem !important" : "2.5rem !important",
                                    fontWeight: "700",
                                    fontStyle: "normal",
                                }}
                            >
                                Twitter Integration
                            </Typography>

                            <Typography paragraph sx={{ fontSize: "1rem !important", mb: "30px" }} >
                                Community owners can customize their own Twitter share popup window to generate even more buzz around the community.
                            </Typography>

                        </Grid>

                        <Grid item md={1}></Grid>

                        <Grid item xs={12} md={6} alignItems="center">
                            <Img width={isMobile ? "100%" : "100%"} 
                                src={twMarketingFig } />
                        </Grid>

                    </Grid>

                </Container>
            </Box>

            {/* Footer */}
            <Footer />
        </BgBox>
    );
}
