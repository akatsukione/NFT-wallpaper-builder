import React  from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import MGroup1 from '../../assets/images/Group5348.png'
import MGroup2 from '../../assets/images/Rectangle2888.png'


const TitleFeatures = ({ text, match }: any) => {
    return (
        <Typography variant="h2"
            sx={{
                paddingTop: match ? "100px" : "30px",
                paddingBottom: "8px",
                textAlign: match ? "left" : "center"
            }}>
            {text}
        </Typography>
    )
}

const SubTitleFeatures = ({ text, match }: any) => {
    return (
        <Typography variant="subtitle1"
            sx={{
                textAlign: match ? "left" : "center"
            }}>
            {text}
        </Typography>
    )
}

const ImgGroup = styled('img')({
    marginTop: 120,
    display: 'block',
    width: "70%",
});


const Line = ({ match }: any) => {
    return (
        <Box sx={{ display: "flex", justifyContent: match ? 'flex-start' : 'center' }}>
            <Box
                sx={{
                    marginTop: ' 30px',
                    marginBottom: '25px',
                    width: '102px',
                    height: '0',
                    opacity: '0.3',
                    border: '2px solid #FFFFFF'
                }} />
        </Box>
    )
}

const MissionNFT = () => {
    
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Box id="discordRoles" sx={{ flexGrow: 1, }}>
            <Grid container spacing={isMobile?2:0}>
                <Grid item container xs={12} alignItems="center" justifyContent="center">
                    <Box 
                        mt={isMobile ? "140px" : "40px"}>
                        
                        <Typography variant="h1"> NFT Our Mission </Typography>
                    </Box>
                </Grid>

                {/* Section I */}
                <Grid item xs={12} sm={8} md={6} >
                    <Box>
                        <Box>
                            <TitleFeatures match={isMobile} text='Full Transparency' />
                        </Box>
                        <Box>
                            <SubTitleFeatures match={isMobile} text='' />
                        </Box>

                        <Line match={isMobile} />

                        <Box sx={{ textAlign: isMobile ? "left" : "center" }}>
                            <Typography variant='h6' paragraph>
                                We'll provide full transparency into our operating funds,
                                so that you can see how the money is being spent.
                                We'll be delivering features only once the funds are available,
                                but we'll display our wallets so you know where all
                                the money is being spent.
                            </Typography>
                            <Typography variant='h6' paragraph>
                                We want to help people make smart decisions about nft trading...
                            </Typography>
                            <Typography variant='h6' paragraph>
                                Show how much the project is making and how we’re spending it
                                (no quick cash out schemes here)
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={4} md={6} >
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}>
                        <Box
                            display="flex"
                            // alignItems="flex-end"
                            justifyContent="flex-end">
                            <ImgGroup sx={{}} src={MGroup1} />
                        </Box>
                    </Box>
                </Grid>

                {/* Section II */}
                <Grid item sm={4} md={6} >
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                        display="flex"
                        // alignItems="flex-end"
                        justifyContent="flex-end">
                        <ImgGroup sx={{ mr: 20 }} src={MGroup2} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} >
                    <Box>
                        <Box>
                            <TitleFeatures match={isMobile} text='Whitepaper' />
                        </Box>
                        <Box>
                            <SubTitleFeatures match={isMobile} text='The whole plan. Hope you like spreadsheets!' />
                        </Box>

                        <Line match={isMobile} />

                        <Box display='flex' flexDirection='column'
                        sx={{ 
                            textAlign: isMobile ? "left" : "center" ,
                            alignItems: isMobile ? "left" : "center" 
                        }}
                        >
                            <Typography variant='h6' paragraph component='div'>
                                Just kidding, the full plan for NFT Drip is still being designed.
                            </Typography>
                            <Typography variant='h6' paragraph component='div'>
                                Our technical experts is working on getting all the specifications
                                to  structure it in a clear collected way any human can understand.
                            </Typography>
                            <Typography variant='h6' paragraph component='div'>
                                Then we will redeisgn it into a beautiful peice of art that it deserves.
                                Availible for print and download.
                            </Typography>

                           
                                <Box display='flex' justifyContent='center' flexDirection='column'>
                                    <Button
                                        variant="outlined"
                                        component='div'
                                        sx={{
                                            color: '#67E5C6',
                                            borderRadius: 5,
                                            borderWidth: 1,
                                            borderColor: '#67E5C6',
                                            fontWeight: 700,
                                            width: isMobile ? "318px" : "250px",
                                            marginTop: '36px',
                                            marginBottom: '12px',
                                            '&:hover': {
                                                backgroundColor: "#67c5e5",
                                                color: "#FFFFFF"
                                              }
                                        }}>
                                        Whitepaper Download
                                    </Button>
                                    <Typography
                                        component='div'
                                        sx={{
                                            fontSize: '14px',
                                            color: '#FFFFFF',
                                            fontWeight: 400,
                                            textAlign: 'center',
                                            lineHeight: '21px',
                                            fontStyle: 'italic',
                                            width: isMobile ? "318px" : "250px",
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Coming soon
                                    </Typography>
                                </Box>
                           

                        </Box>

                    </Box>


                </Grid>


            </Grid>
        </Box>
    )
}


export default MissionNFT