import * as React from 'react';
import { useSpring, animated } from '@react-spring/web'
import {
    Box,
    Grid,
    Typography,
    Container,
    useMediaQuery
} from '@mui/material/';

// import buttonBg from '../../assets/images/ButtonBackground.png'

import TopHero from './TopHero'
import { TitleDrip, SubTitleDrip } from '../../pages/landing/Landing'
import { BuyButtonVip, BuyButtonEarly } from '../../controls/Icons'


// User Hook for hover effect
const useHover = () => {
    const [hovered, setHovered] = React.useState(false)

    const eventHandlers = React.useMemo(() => ({
        onMouseOver() { setHovered(true); },
        onMouseOut() { setHovered(false); }
    }), [])
    return [hovered, eventHandlers];
}

export default function HeroNFT() {

    const [hovered, eventHandlers] = useHover();

    // For Spring Effect
    const [state, toggle] = React.useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        // to: {x: hovered ? 1 : 0},
        to: { x: 1 },
        reset: true,
        reverse: state,
        delay: 2000,
        onRest: () => toggle(!state),
        config: { duration: 1000 },
    })

    // For Flip Effect
    const flip = useSpring({
        transform: `rotateX(${hovered ? 0 : 360}deg)`,
        from: {
            transform: "rotateX(0deg)"
        }
    })

    const isMobile = useMediaQuery('(min-width:455px)');

    return (
        <Container disableGutters sx={{ pt: isMobile ? 5 : 2 }}>

            {/* Top  */}
            <TopHero />

            {/* Title */}
            <Grid container justifyContent="center">

                <TitleDrip $isMobile={isMobile}>
                    Blockchain Backed Community
                </TitleDrip>

            </Grid>

            {/* Subtitle  */}
            <Grid container justifyContent="center">

                <SubTitleDrip $isMobile={isMobile}>
                    NFT Trading Tools Backed by DAO and Community Wallets
                </SubTitleDrip>

            </Grid>


            {/*Buttons "BUY VIP & "BUY EARLY BIRD"" */}
            <Grid container>
                <Box
                    display='flex'
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        mt: isMobile ? '57px' : '30px',
                        width: "100%",
                        height: '180px',
                        flexDirection: isMobile ? "row" : "column",
                    }}>
                    <Box m={"16px"}
                    // {...eventHandlers}
                    >
                        <animated.div
                            style={{
                                opacity: x.to({ range: [0, 0.5, 1], output: [1, 0.2, 1] }),
                                scale: x.to({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                }),
                            }}>
                            <BuyButtonVip $isMobile={isMobile} >
                                Buy VIP
                            </BuyButtonVip>

                        </animated.div>

                        <Typography
                            component='div'
                            sx={{
                                mt: isMobile ? '12px' : '6px',
                                fontSize: '14px',
                                color: '#FFFFFF',
                                fontWeight: 600,
                                textAlign: 'center',
                                lineHeight: '21px',
                                width: isMobile ? '250px' : '200px',
                            }}
                        >
                            2 sol 10 left
                        </Typography>
                    </Box>

                    <Box mx={"16px"}
                        {...eventHandlers}
                    >
                        <animated.div
                            style={flip}
                        >
                            <BuyButtonEarly $isMobile={isMobile} >
                                Buy Early Bird
                            </BuyButtonEarly>
                        </animated.div>

                        <Typography
                            component='div'
                            sx={{
                                mt: isMobile ? '12px' : '6px',
                                fontSize: '14px',
                                color: '#FFFFFF',
                                fontWeight: 600,
                                textAlign: 'center',
                                lineHeight: '21px',
                                width: isMobile ? '250px' : '200px',
                            }}
                        >
                            1 sol 100 left
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
}
