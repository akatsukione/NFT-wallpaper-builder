import * as React from 'react';
import styled from "styled-components";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';


import Typography from '@mui/material/Typography';

import wallpaperBuilderFig from '../../assets/images/nft-wallpaper-builder.png';
import gear_icon from "../../assets/images/svg/discord_icon.svg";


import {
    GearIcon,
    RankingsIcon,
    StatsIcon,
    WalletIcon,
} from '../../assets/icon/icon_store'



export const Img = styled.img.attrs(props => ({
    size: props.width || "1em",
}))`
  display: block;
  width: ${props => props.size};
`


interface IsMobile {
    $isMobile?: boolean  // Transient props 
}


interface IconProps {
    sizex?: string
    sizey?: string
}

export const Icon = styled.a.attrs({
    
}) <IconProps>`
  width: ${({ sizex }) => sizex};
  height: ${({ sizey }) => sizey};
  background-color: #fff;
  -webkit-mask-image: url(${gear_icon});
  mask-image: url(${gear_icon});
  mask-size: cover;
  /* transition: all 300ms;
  transform-style: preserve-3d; */

  &:hover {
    background: linear-gradient(82.34deg, #BB29FF -5.56%, #15E2A8 105.13%);
    /* transform: rotateY(360deg); */
  }
`;






export default function InfoCards() {

    const isMobile = useMediaQuery('(min-width:455px)');

    return (

        <Grid container justifyContent="center" mt="160px" pb="240px" columnSpacing={4} flexWrap="wrap">

            <Grid item md={1}></Grid>

            <Grid item xs={12} md={5} 
                sx={{
                    
                }}
            > 
                <Box
                    sx={{
                        height: "100%",
                        padding: "40px",
                        backgroundColor: "rgba(24, 24, 30, 0.5)",
                        boxShadow: "0px 17px 60px #000000",
                        borderRadius: "12px",
                    }}
                >
                    <Typography variant='h2' 
                        sx={{
                            mb: "40px",
                            fontSize: "1rem !important",
                            fontWeight: "600",
                            fontStyle: "normal",
                            lineHeight: 1,
                            color: "#9E9E9F",
                            textTransform: "uppercase",
                        }}
                    >
                        Wallpaper Builder
                    </Typography>

                    <Link href="/collection/0xapes-trilogy/twitter-wallpaper-builder/" 
                        sx={{ 
                            display: "inline-block", 
                            mb: "40px"
                        }}
                    >
                        <Img width={isMobile ? "348px" : "100%"}
                            src={wallpaperBuilderFig} />
                    </Link>

                    <Typography variant='h3' mb={"14px"} sx={{ fontSize: "1.625rem !important" }}>
                        Twitter Covers & Wallpapers
                    </Typography>

                    <Typography paragraph sx={{ fontSize: "1rem !important", m: "0 !important" }} >
                        Allow your community members customize and share their own Twitter Banner or Wallpaper. &nbsp;
                        
                        <Link href="/collection/0xapes-trilogy/twitter-wallpaper-builder/" color="inherit">Live Demo</Link>.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={5} >
                <Box
                    sx={{
                        height: "100%",
                        padding: "40px",
                        backgroundColor: "rgba(24, 24, 30, 0.5)",
                        boxShadow: "0px 17px 60px #000000",
                        borderRadius: "12px",
                    }}
                >
                    <Typography variant='h2' 
                        sx={{
                            mb: "40px",
                            fontSize: "1rem !important",
                            fontWeight: "600",
                            fontStyle: "normal",
                            lineHeight: 1,
                            color: "#9E9E9F",
                            textTransform: "uppercase",
                        }}
                    >
                        Upcoming Tools & Resources
                    </Typography>

                    <Box sx={{ display: 'inline-flex', mb: "32px" }}> 
                        <GearIcon/>
                        <Typography
                            sx={{
                                ml: "15px",
                                fontSize: "1.5rem !important",
                                fontWeight: "600",
                                fontStyle: "normal",
                                lineHeight: 1,
                            }}
                        >
                            Wallpaper Builder 2.0
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'inline-flex', mb: "32px" }}> 
                        <RankingsIcon/>
                        <Typography
                            sx={{
                                ml: "15px",
                                fontSize: "1.5rem !important",
                                fontWeight: "600",
                                fontStyle: "normal",
                                lineHeight: 1,
                            }}
                        >
                            Rankings Index & Extenstion
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'inline-flex', mb: "32px" }}> 
                        <StatsIcon/>
                        <Typography
                            sx={{
                                ml: "15px",
                                fontSize: "1.5rem !important",
                                fontWeight: "600",
                                fontStyle: "normal",
                                lineHeight: 1,
                            }}
                        >
                            NFT Collection Stats
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'inline-flex', mb: "32px" }}> 
                        <WalletIcon/>
                        <Typography
                            sx={{
                                ml: "15px",
                                fontSize: "1.5rem !important",
                                fontWeight: "600",
                                fontStyle: "normal",
                                lineHeight: 1,
                            }}
                        >
                            Wallet Evaluations & Stats
                        </Typography>
                    </Box>

                    <Box>
                        <Typography paragraph sx={{ fontSize: "1rem !important", }} >
                            If you would like to license one of our tools for your community, check out our <Link href="/twitter-wallpaper-builder/" color="inherit">Community Resource Builder</Link> for more info.
                        </Typography>
                    </Box>

                    
                    
                </Box>
            </Grid>

            <Grid item md={1}></Grid>

        </Grid>


    )
}