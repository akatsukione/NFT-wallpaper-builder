import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import logo from '../../assets/icon/logo.svg'
import photo from '../../assets/images/cards/contemplative-reptile.jpeg'

import { AppProps } from '../../types/AppProps'

 
export default function CardDrip( props:any) {
    return (
        <Card 
            sx={{ maxWidth: 486 }} 
            variant='elevation'
            elevation={0}
            >
            <CardActionArea sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <CardMedia
                    component="img"
                    height="98"
                    image= {props.url}
                    alt="placeholder"
                    sx={{ p: 2, width: 146 }}
                />
                <CardContent >
                    <Box sx={{
                        typography: 'h6',
                        fontSize: 16,
                        textDecoration: 'underline',
                        mt: '-5px'
                    }}>
                        {props.sectionTitle}
                    </Box>
                    <Box sx={{
                        typography: 'body2',
                        fontSize: 14,
                        mt: '5px'
                    }}>
                        {props.featureName}
                    </Box>
                    <Box sx={{
                        typography: 'body2',
                        fontSize: 12,
                        color: 'text.secondary',
                        whiteSpace: 'pre-line',
                    }}>
                        {props.featureDescription}
                  </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
