import {
    Box,
    Grid,
    Pagination,
    Stack,
    PaginationItem,
} from '@mui/material/';

import { Twitter, Discord, WWW, Ship, OxapLogo } from './controls/IconsForOxap'


export default function TopSectionOxap() {

    return (
        <Grid container xs={12} md={10} m={'0 auto'}
            sx={{ 
                marginBottom: '50px',
                alignItems: 'center',
                justifyContent: "space-between",
            }}
        >
            <OxapLogo />

            <Box sx={{ display: 'inline-flex' }}>
                <Ship />
                <WWW />
                <Discord />
                <Twitter />
            </Box>
        </Grid>
    )
}