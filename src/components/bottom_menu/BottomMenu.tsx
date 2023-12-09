import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    Grid,
    Button,
} from '@mui/material/';

import useMediaQuery from '@mui/material/useMediaQuery';


import {
    RoadmapIcon,
    KoronaIcon,
    RoayaltesIcon,
} from '../../assets/icon/icon_store'
import StarPng from '../../assets/images/star.png'

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const ImgGroup = styled('img')({
    display: 'block',
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: "-5px",
    left: "-5px",
});

const StarBox = () => {
    return (
        <Box sx={{
            position: 'relative',
            boxShadow: `
                0px 0px 40px 5px #E30685,
                0px 0px 50px 15px #EB064E;
                `,
        }}>
            <ImgGroup src={StarPng} />
        </Box>
    )
}


export default function BottomMenu(props: any) {
    const matches_900 = useMediaQuery('(min-width:800px)');
    const matches_300 = useMediaQuery('(min-width:100px)');
    const matches_500 = useMediaQuery('(min-width:500px)');
    // const isMobile = useMediaQuery('(min-width:455px)');

    if (matches_500) {
        return (
            <Box>
                    {/* Bottom menu */}
                    <Grid item xs={12}>

                        <Box
                            mt={10}
                            display="flex"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{
                                background: "#18181E",
                                boxShadow: "0px 17px 60px #000000",
                                borderRadius: "11.5268px",
                                height: "75px",
                            }}>

                            <Box >
                                <Button
                                    data-href="#roadmap"
                                    onClick={(e) => ScrollToHref(e)}
                                    variant="text"
                                    startIcon={matches_900 ? <RoadmapIcon /> : ''}
                                    sx={{ color: '#FFFFFF', fontSize: matches_900 ? '16px' : '15px' }}
                                >
                                    <span style={{ display: matches_300 ? 'block' : 'none' }}>Roadmap </span>
                                </Button>
                            </Box>
                           
                            
                            <Box>

                                <Button
                                    data-href="#features"
                                    onClick={(e) => ScrollToHref(e)}
                                    variant="text"
                                    // startIcon={matches_900 ? <StarIcon /> : ''}
                                    startIcon={
                                        <StarBox />
                                    }
                                    sx={{ 
                                        color: '#FFFFFF', 
                                        fontSize: matches_900 ? '16px' : '15px',
                                        ".MuiButton-startIcon": {
                                            mr: '25px',
                                            mb: '11px',
                                        }
                                     }}
                                >
                                    <span style={{ display: matches_300 ? 'block' : 'none' }}>NFT Drip Features </span>
                                </Button>
                            </Box>

                            <Box>
                                <Button
                                    data-href="#discordRoles"
                                    onClick={(e) => ScrollToHref(e)}
                                    variant="text"
                                    startIcon={matches_900 ? <KoronaIcon /> : ''}
                                    sx={{ color: '#FFFFFF', fontSize: matches_900 ? '16px' : '15px' }}
                                >
                                    <span style={{ display: matches_300 ? 'block' : 'none' }}>Discord Roles NFT </span>
                                </Button>
                            </Box>

                            <Box>
                                <Button
                                    data-href="#royalties"
                                    onClick={(e) => ScrollToHref(e)}
                                    variant="text"
                                    startIcon={matches_900 ? <RoayaltesIcon /> : ''}
                                    sx={{ color: '#FFFFFF', fontSize: matches_900 ? '16px' : '15px' }}
                                >
                                    <span style={{ display: matches_300 ? 'block' : 'none' }}>Royalties </span>
                                </Button>
                            </Box>


                        </Box>

                    </Grid>

            </Box>

        )
    }
    return <SimpleBottomNavigation roadmap={props.roadmap} />
}



const StyledBottomNavigationAction = styled(BottomNavigationAction)({
    color: '#FFFFFF',
    '&:hover': {
        // backgroundColor: '#fff',
        color: "#FFD700",
    },
    '.Mui-selected': {
        color: "#FFD700",
    }
})

const ScrollToHref = (event: any) => {
    const href = (event.target as any).closest('button').dataset.href;
    const $anchor = document.querySelector(href);
    console.log($anchor)
    $anchor && window.scroll({
        top: $anchor.offsetTop + 90,
        left: 0,
        behavior: 'smooth',
    });
}


function SimpleBottomNavigation(props: any) {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }} elevation={3}>
            <Box
                sx={{ maxWidth: 500 }}
            >
                <BottomNavigation
                    showLabels
                    sx={{
                        background: "#000000",
                        borderColor: "#FFFFFF",
                        borderWidth: 2,
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                        ScrollToHref(event)
                        setValue(newValue);
                    }}
                >
                    <StyledBottomNavigationAction
                        label="Roadmap"
                        data-href="#roadmap"
                    // onClick={() => {
                    //     props.roadmap.current.scrollIntoView();
                    // }}
                    // icon={<RoadmapIcon /> }
                    />
                    <StyledBottomNavigationAction
                        label="Features"
                        data-href="#features"
                    // icon={<StarIcon />}
                    />
                    <StyledBottomNavigationAction
                        label="Discord Roles"
                        data-href="#discordRoles"
                    // icon={<KoronaIcon  />}
                    />
                    <StyledBottomNavigationAction
                        label="Royalties"
                        data-href="#royalties"
                    // icon={ <RoayaltesIcon />}
                    />
                </BottomNavigation>
            </Box>
        </Paper>
    );
}
