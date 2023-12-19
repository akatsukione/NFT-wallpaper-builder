import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import Group1 from '../../assets/images/Group5330.png'
import Group2 from '../../assets/images/Group5329.png'
import Group3 from '../../assets/images/Group5328.png'
import Group4 from '../../assets/images/Group5327.png'
import ZigZag from '../../assets/images/Union.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const TitleBox = styled(
    (props: any) => <Typography variant="h3" {...props} />
)({
    paddingTop: 24,
    paddingBottom: 8,
    marginLeft: 32,
    marginRight: 28,
});


const CheckBox = ({ text }: any) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            sx={{
                typography: 'h4',
                marginLeft: isMobile ? "32px" : "12px",
                paddingTop: "8px",
                marginRight: "12px",
            }}>

            <CheckBoxOutlineBlankOutlinedIcon
                sx={{
                    fontSize: matches ? "1rem" : "24px",
                    mr: 1
                }} />
            {text}

        </Box>

    )
}

const BlockBox = styled(
    (props: any) => <Box
        my={4}
        pb={4}
        {...props} />
)({
    background: "#18181E",
    // background: '#FFFFFF',
    borderRadius: "16px",
    position: 'relative',
    overflow: 'hidden'
})
const Shadow = styled(Box)`
    opacity: 0.6;
    filter: blur(50px);
    width: 220px;
    height: 220px;
    position: absolute;
    left: -110px;
    top: -110px;
    background-color: ${(props: any) => props.color ?? '#53FE36'};
`


const ImgGroup = styled('img')({
    display: 'block',
    width: '70%',
});

const ImgZig = styled('img')({
    // margin: 30,
    // marginTop: 40,
    display: 'block',
    maxWidth: '100%',
    // maxHeight: '100%',
});


export const RoadmapNFT = () => {
    const isMobile = useMediaQuery('(min-width:455px)');
    const is1240 = useMediaQuery('(min-width:1240px)');
    return (
        <Box id="roadmap">
            {/* <Box sx={{ position: 'relative' }}> */}
            <Box sx={{ position: 'relative', flexGrow: 1 }}>
                <Grid container spacing={isMobile ? 2 : 0}>
                    <Grid item
                        container xs={12}
                        alignItems="center"
                        sx={{ justifyContent: isMobile ? "flex-start" : "center" }}
                    >
                        <Box mt={isMobile ? "140px" : "60px"}>
                            <Typography variant="h1">Roadmap</Typography>
                        </Box>
                    </Grid>

                    {/* Section I */}
                    <Grid item xs={12} sm={8} md={6}>

                        <BlockBox children={<>
                            {/* First  block */}
                            <Shadow color='#FF008D' />
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <TitleBox children='Founder Roles & Wallets' />
                                <CheckBox text="Setup Founder Roles & Wallets" />
                                <CheckBox text="Transparency is everything. Post Project Wallets Publicly" />
                            </Box>
                        </>} />

                        <BlockBox children={<>
                            {/* Second  block */}
                            <Shadow color='#FF00F6' />
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <TitleBox children='NFT Drip Beta' />
                                <CheckBox text="Invite Founders to do beta testing" />
                                <CheckBox text="Founders recruit 12 VIPs to do beta testing" />
                            </Box>
                        </>} />

                    </Grid>
                    {/* Group I */}

                    <Grid item sm={4} md={6}>
                        <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}>
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                mr={4}
                                mt={4}
                            >
                                <ImgGroup src={Group1} />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Group II */}
                    <Grid item sm={4} md={6}>
                        <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                            mt={10}
                        >
                            <ImgGroup  sx={{ width: "60%"}} src={Group2} />
                        </Box>

                    </Grid>

                    {/* Section II */}
                    <Grid item xs={12} sm={8} md={6}>
                        <BlockBox sx={{ mt: isMobile ? 4 : 0 }} children={<>
                            {/* First  block */}
                            <Shadow color='#703FF8' />
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <TitleBox children='VIP Beta Access Opens' />
                                <CheckBox text="All VIPs get Beta Access to NFT Drip Beta" />
                                <CheckBox text="VIPs get additional license air dropped (to HODL, gift, or sell)" />
                            </Box>
                        </>} />

                        <BlockBox children={<>
                            {/* Second  block */}
                            <Shadow color='#256DFF' />
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <TitleBox children='NFT Drip APP Launch' />
                                <CheckBox text="Release 100 Early Bird keys @1Sol" />
                                <CheckBox text="Release 10 VIP keys @2Sol" />
                                <CheckBox text="10 Keys will be given out randomly on Discord" />
                                <CheckBox text="10 Keys will be given out randomly on Twitter" />
                                <CheckBox text="Keys become temporarly transferable in User Settings" />
                                <CheckBox text="Create promo/ affiliate wallets & Links" />
                            </Box>
                        </>} />

                    </Grid>
                    {/* III */}
                  
                        {/* Section III */}
                        <Grid item xs={12} sm={8} md={6}>
                            <BlockBox sx={{ mt: isMobile ? 7 : 0 }} children={<>
                                {/* First  block */}
                                <Shadow color='#1AB9FF' />
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <TitleBox children='Release keys in waves of 100' />
                                    <Typography variant="h5"
                                        sx={{ fontWeight: 400, color: "#FFFFFF", ml: 4, mt: -1 }}
                                    >
                                        500 keys sold! No more keys til we get to 2.0
                                    </Typography>
                                    <CheckBox text="Continue to improve the app" />
                                </Box>
                            </>} />

                            <BlockBox children={<>
                                {/* Second  block */}
                                <Shadow color='#42FEE8' />
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <TitleBox children='Release feature voting ' />
                                    <CheckBox text="Launch microsite for feature voting" />
                                    <CheckBox text="Keys are converted into Discord Role NFT’s!" />
                                </Box>
                            </>} />

                        </Grid>

                        {/* Group III */}
                        <Grid item sm={4} md={6}>
                            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                                mt={9}
                                ml={20}
                            >
                                <ImgGroup src={Group3} />
                            </Box>

                        </Grid>
                 


                    {/* Group IV */}
                    <Grid item sm={4} md={6}>
                        <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', }, }}
                            mt={25}
                        >
                            <ImgGroup  sx={{ width:"60%"}}src={Group4} />
                        </Box>

                    </Grid>
                    {/* Section IV */}
                    <Grid item xs={12} sm={8} md={6}>
                        <BlockBox id="royalties" sx={{ mt: isMobile ? 14 : 0 }} children={<>
                            {/* First  block  */}
                            <Shadow color='#53FE36' />
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <TitleBox children='NFT Drip Role Royalties' />
                                <CheckBox text="Setup royalties based on Roles & Contributions" />
                                <CheckBox text="Create web service that pays all DAO shareholders
                                automatically from community wallets"/>
                            </Box>
                        </>} />

                        <BlockBox children={<>
                            {/* Second  block */}
                            <Shadow color='#F3C506' />
                            <Box sx={{ position: 'relative', zIndex: 2 }}>
                                <TitleBox children='NFT Drip APP 2.0' />
                                <CheckBox text="Interactive Charts & NFT Analytics" />
                                <CheckBox text="New features & components based on voting system" />
                            </Box>
                        </>} />

                    </Grid>

                </Grid>
            </Box>

            <Box sx={{
                display: is1240?'block':'none',
                position: 'absolute',
                top: 0,
                zIndex: 1,
                mt: "986px",
                // mt: "243px",
                ml: "-67px",
                transform: "scale(0.9, 0.9)",

            }}>
                <ImgZig src={ZigZag} />
            </Box>

        </Box>
    )
}
