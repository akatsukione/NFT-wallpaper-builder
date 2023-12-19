import * as React from 'react';

import styled from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import discord_logo from '../../assets/icon/Subtract1.svg'
import tweet_logo from '../../assets/icon/Subtract2.svg'
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';


interface ImgProps {
    isMatch: boolean
}

const ImgDrip = styled.img<ImgProps>`
    margin-left: 15px;
    margin-right: 15px;
    display: block;
    max-width: ${({isMatch}) => isMatch ? '22px' : '20px'};
`

export default function FooterNFT() {
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={isMobile ? 2 : 0}>
                
                {/* Bottom Line */}
                <Grid item xs={12}>                    
                    <Box sx={{
                        marginTop: isMobile ? '160px' : "60px",
                        marginBottom: isMobile ? '40px' : "15px",
                        border: '1px solid #FFFFFF',
                        opacity: '0.3',
                    }} >
                    </Box>
                </Grid>
                
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        sx={{
                            marginBottom: '60px',
                            flexDirection: isMobile ? 'row' : 'column-reverse',
                            alignItems: isMobile ? "flex-end" : 'center',
                            justifyContent: isMobile ? "space-between" : 'space-between',
                        }}
                    >

                        <Typography variant='body1' 
                            sx={{ display: 'block', fontWeight: 500, fontSize: isMobile ? "14px" : "11px", mt:isMobile?0:-1}}>
                            © NFT Drip
                        </Typography>

                        <Box>

                            <Typography variant='body1' sx={{ display: 'block', fontWeight: 500, fontSize: isMobile ? "14px" : "11px" }}>
                                <Link
                                    onClick={() => { console.info("I'm a button."); }}
                                    underline="hover" color='#C4C4C4' sx={{ cursor: "pointer" }}>
                                    Terms
                                </Link>
                                &nbsp;|&nbsp;
                                <Link
                                    onClick={() => { console.info("I'm a button."); }}
                                    underline="hover" color='#C4C4C4' sx={{ cursor: "pointer" }}>
                                    Privacy
                                </Link>
                            </Typography>

                        </Box>

                        <Box>
                            <Link onClick={() => { console.info("I'm a button."); }} component="button">
                                <ImgDrip isMatch={isMobile} src={discord_logo} />
                            </Link>

                            <Link onClick={() => { console.info("I'm a button."); }} component="button">
                                <ImgDrip isMatch={isMobile} src={tweet_logo} />
                            </Link>
                        </Box>


                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}
