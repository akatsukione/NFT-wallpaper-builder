import * as React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Button,
    Typography,
    CardActions,
    Box,
} from '@mui/material';

import styled from "styled-components";


interface NftProps {
    rank?: string
}

const Title = styled(Typography)`
    font-style: normal;
    font-weight: 500;
    font-size: 16.875px;
    line-height: 20px;
    color: #000000;
`

const Rank = styled(Typography)`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #999999;
`

const ButtonRank = styled(Button) <NftProps>`
    border-radius: 22px;
    font-weight: 500;
    font-size: 10.7642px;
    line-height: 13px;
    color: #FFFFFF;
    padding: 2px 12px;
    margin-left: 12px;
`

const Band = styled(Box) <NftProps>`
    height: 12px;
    width: 269px;
    border-radius: 0px;
    margin-top: -10px;
    position: relative;
    transition: transform 1s;
`
const OneCard = styled(Card)`
    max-width: 269px;
    border-radius: 12px;
    &:hover  #band {  transform: scale(5) translateY(-40%) }
`

export default function MankeyCard({ img, rank, ape, level }: any) {
    let rankColor = setColor(level)
    return (
        <OneCard id='container'>
            <CardMedia
                component="img"
                height="269"
                image={img}
                alt="monkey1"
            />
            <Band id='band' sx={{background: rankColor}}> </Band>
            <CardContent sx={{ paddingBottom: '2px' }}>
                <Title> 0xApe #{ape} </Title>
            </CardContent>
            <CardActions>
                <Rank> RANK </Rank>
                <ButtonRank sx={{background: rankColor}}>
                #{rank} &nbsp; {level}
                </ButtonRank>
            </CardActions>
        </OneCard>
    );
}

const setColor = (level: string) => {

    switch (level) {
        case 'LEGENDARY':
            return "#FFA800"
        case 'EPIC':
            return "#8F00F0"
        case 'RARE':
            return "#2248D0"
        case 'UNCOMMON':
            return  "#1FA726"
        case 'COMMON':
            return  "#A8A8A8"
        default:
            return 'none'
    }
}