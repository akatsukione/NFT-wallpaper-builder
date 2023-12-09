import * as React from 'react';
import {
    Box,
    Container,
    useMediaQuery,
} from '@mui/material/';

import FooterOxap from '../../components/TopHeroOxap'
import HeroOxapRankings from './components/HeroOxapRankings'
import MonkeyContent from './components/MonkeyContent'
import HeroOxap from '../download/components/HeroOxap'


export default function Ranking() {
    const isMobile = useMediaQuery('(min-width:455px)');

    return (
        <Container disableGutters maxWidth={false} className='bg-white'>
            < HeroOxapRankings />
            <Container>
                <Box mx={isMobile ? "40px" : "0px"}>
                    <MonkeyContent />
                </Box>
            </Container>
            <HeroOxap />
            <FooterOxap />
        </Container>
    )
}
