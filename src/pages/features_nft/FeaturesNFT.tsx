import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import FGroup1 from '../../assets/images/Group5368.png'
import FGroup2 from '../../assets/images/Group5347.png'
import FGroup3 from '../../assets/images/Rectangle2887.png'



const Line = ({match}: any) => {
    return(
        <Box sx={{display: "flex",justifyContent: match?'flex-start':'center'}}>
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


const TitleFeatures = ({ text, match }: any) => {
    return (
        <Typography variant="h2" 
            sx={{
                paddingTop: match? "100px" :"30px",
                paddingBottom: "8px",
                textAlign: match?"left":"center"
            }}>
                {text}
            </Typography>
    )
}



const SubTitleFeatures = ({ text, match }: any) => {
    return (
        <Typography variant="subtitle1" 
            sx={{
                textAlign: match?"left":"center"
            }}>
                {text}
            </Typography>
    )
}

const ImgGroup = styled('img')({
    // margin: -100,
    marginTop: 120,
    display: 'block',
    width: "90%",
    // maxWidth: '100%',
    // maxHeight: '100%',
});

export default function FeaturesNFT() {
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Box id="features" sx={{ flexGrow: 1, }} >
            <Grid container spacing={isMobile?2:0}>
                <Grid container item xs={12} alignItems="center" justifyContent="center">
                    <Box mt={isMobile ? "140px" : "40px" }>
                        <Typography variant="h1"> NFT Drip App </Typography>
                    </Box>
                </Grid>

                {/* Section I */}
                <Grid item sm={4} md={6} >
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                        display="flex"
                        // alignItems="flex-end"
                        justifyContent="flex-end">
                        <ImgGroup sx={{ mr: 20 }} src={FGroup1} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} >
                    <Box>
                        <Box>
                            <TitleFeatures   match={isMobile} text='Features 1.0' />
                        </Box>
                        <Box>
                            <SubTitleFeatures  match={isMobile} text='Watch URLs for countdowns and marketplace listing' />
                        </Box>

                        <Line match={isMobile}/>

                        <Box sx={{ textAlign: isMobile?"left":"center"}}>
                            <Typography variant='h6' paragraph>
                                A better description of how this works -
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't look even slightly believable .
                                If you ar e going to use a passage of Lorem Ipsum, you need to be sure
                            </Typography>
                        </Box>
                    </Box>


                </Grid>

                {/* Section II */}
                <Grid item xs={12} sm={8} md={6} >
                    <Box>
                        <Box>
                            <TitleFeatures  match={isMobile} text='Collection Stats' />
                        </Box>
                        <Box>
                            <SubTitleFeatures match={isMobile} text='for countdowns and marketplace listingWatch stats on collections and send alerts for specified triggers' />
                        </Box>

                        <Line match={isMobile}/>

                        <Box sx={{ textAlign: isMobile?"left":"center"}}>
                            <Typography variant='h6' paragraph>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that
                                it has a more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content here.
                            </Typography>
                            <Typography variant='h6' paragraph>
                                Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text
                            </Typography>
                        </Box>
                    </Box>


                </Grid>
                <Grid  item xs={6} sm={4} md={6}>
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                        display="flex"
                        // alignItems="flex-end"
                        justifyContent="centre">
                            
                        <ImgGroup sx={{ ml: 5 }} src={FGroup2} />
                    </Box>
                </Grid>

                {/* <Grid sm={4} md={6} >
                    <Box sx={{
                        display: { xs: 'none', sm: 'block', md: 'block', },
                        mt: "120px",
                        ml: 15,
                        backgroundImage: `url(${FGroup2})`,
                        backgroundSize: "cover",
                        height: "50vh",
                        // height: "auto",
                        // color: "#f5f5f5"
                    }}>

                    </Box>
                </Grid> */}



                {/* Section III */}
                <Grid item sm={4} md={6} >
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                        display="flex"
                        // alignItems="flex-end"
                        justifyContent="flex-end"
                    >
                        <ImgGroup sx={{ mr: 20 }} src={FGroup3} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} >
                    <Box>
                        <Box>
                            <TitleFeatures   match={isMobile} text='Features 2.0' />
                        </Box>
                        <Box>
                            <SubTitleFeatures match={isMobile} text='' />
                        </Box>

                        <Line match={isMobile} />

                        <Box sx={{ textAlign: isMobile?"left":"center"}}>
                            <Typography variant='h5' paragraph> User Accounts </Typography>

                            <Typography variant='h5'> Ability to sell ur license </Typography>
                            <Typography variant='h6'> If you sell your key to the nftdrip.app </Typography>
                            <Typography variant='body1'>
                                <li> Selling ur app license removes your from your Role on Discord </li>
                                <li> Prev VIPs can reactivate the app in at $50 per mo any time via email auth  </li>
                                <li> Prev Early Birds can reactivate the app at $100 per mo anytime via email auth </li>
                            </Typography> <br />

                            <Typography variant='h5'> Pretty Intuative Graphs </Typography>
                            <Typography variant='h6' paragraph> You have some aweome data collected, lets start drooling over it! </Typography>
                            <Typography variant='h5' paragraph> Create your custom dashboard </Typography>
                            <Typography variant='h5' paragraph> Connect wallet to see rarities </Typography>
                            <Typography variant='h5' paragraph> Discord Webhooks </Typography>
                        </Box>
                    </Box>


                </Grid>

            </Grid>
        </Box>
    )
}