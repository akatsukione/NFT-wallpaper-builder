import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import nftdrip_logo from "../../assets/images/svg/nftdrip_logo.svg"
import { Container } from '@mui/material';
import { Discord, Twitter } from '../../pages/landing/Landing'



const ImgLogo = styled('img')({
    display: 'block',
})

export default function Footer() {
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Container>
            <Box sx={{ flexGrow: 1, marginTop: isMobile ? '-120px' : "-120px", }}>
                <Grid container spacing={isMobile ? 2 : 0}>
                    <Grid item xs={12}>
                        <Box sx={{
                            // marginTop: isMobile ? '160px' : "60px",
                            // marginBottom: isMobile ? '40px' : "15px",
                            border: '1px solid #FFFFFF',
                            opacity: '0.3',
                        }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12} mt={"20px"}>
                        <Box display={isMobile ? "none" : "flex"} justifyContent="center" mt={"40px"}>
                            <ImgLogo sx={{ width: "100px" }} src={nftdrip_logo} />
                        </Box>
                        <Box
                            display="flex"
                            sx={{
                                marginBottom: isMobile ? '60px' : "0px",
                                flexDirection: isMobile ? 'row' : 'row',
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

                            <Box display='flex'>
                                <Typography variant='body1'
                                    sx={{
                                        display: 'block',
                                        fontWeight: 500,
                                        fontSize: isMobile ? "14px" : "11px",
                                        mt: isMobile ? 0 : "-1px",
                                        mr: "10px",
                                    }}>
                                    © NFT Drip
                                </Typography>
                                <Typography variant='body1'
                                    sx={{
                                        display: 'block',
                                        fontWeight: 500,
                                        fontSize: isMobile ? "14px" : "11px",
                                    }}>
                                </Typography>
                            </Box>


                            <Box display="flex" mt={isMobile ? 0 : 0}  >
                                <Discord sizex={"29px"} sizey={"24px"} />

                                <Twitter sizex={"27px"} sizey={"27px"} />
                            </Box>


                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}
