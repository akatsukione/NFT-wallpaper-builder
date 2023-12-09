import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';

import nftdrip_logo from "../assets/images/svg/nftdrip_logo_black.svg"
import { Container } from '@mui/material';
import { TwitterBlack, DiscordBlack } from './TopHeroOxap'

const ImgLogo = styled('img')({
    display: 'block',
    // width: '100%'
})

export default function FooterOxap() {
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={isMobile ? 2 : 0}>
                    <Grid item xs={12}>
                        <Box sx={{
                            marginTop: isMobile ? '60px' : "60px",
                            marginBottom: isMobile ? '20px' : "15px",
                            border: "1px solid #000000",
                            opacity: '0.1',
                        }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display={isMobile ? "none" : "flex"} justifyContent="center" my={"40px"}>
                            <ImgLogo src={nftdrip_logo} />
                        </Box>
                        <Box
                            display="flex"
                            sx={{
                                marginBottom: '40px',
                                flexDirection: isMobile ? 'row' : 'column',
                                alignItems: isMobile ? "center" : 'center',
                                justifyContent: isMobile ? "space-between" : 'space-between',
                            }}
                        >

                            <Box display={isMobile ? 'block' : "none"}>
                                <Link onClick={() => {
                                    console.info("I'm a button.");
                                }} component="button">
                                    <ImgLogo sx={{ width: "100px" }} src={nftdrip_logo} />
                                </Link>
                            </Box>

                            <Box display="flex" >
                                <DiscordBlack $isMobile={isMobile} />
                                <TwitterBlack $isMobile={isMobile} />
                            </Box>


                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}
