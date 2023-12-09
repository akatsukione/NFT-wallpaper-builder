import React, { useState, useEffect } from 'react'
import {
    Box,
    Divider,
    Pagination,
    Stack,
    PaginationItem,
} from '@mui/material/';
import styled from "styled-components";
import useFetch from '../../../../hooks/useFetch'

import MonkeyTable from './MonkeyTable'
import { dataStatic } from '../../../data/data'
import oxap3s_logo from '../../../assets/images/svg/logo_cover.svg'
import twitter_circle from '../../../assets/images/svg/twitter_circle.svg'
import discord_circle from '../../../assets/images/svg/discord_circle.svg'
import www_circle from '../../../assets/images/svg/www_circle.svg'
import ship_circle from '../../../assets/images/svg/ship_circle.svg'
import { discordLink, } from "../../../../config";

export default function MonkeyContent() {
    let cardsPerPage = 8;

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    let data = dataStatic
    // const [data, loading] = useFetch('http://localhost:3000/cards'); // For use with json-server
    const [cards, setCards] = useState(data)

    const products = () => {
        let pageIndex = (page - 1) * cardsPerPage;
        return cards?.slice(pageIndex, pageIndex + cardsPerPage)
    }


    useEffect(() => {
        if (data) {
            setCards(data);
        }
    }, [data]);


    let totalPage = Math.ceil(data.length / cardsPerPage);
    return (
        <Box mb='100px'>
            <Box mt='48px' display='flex' justifyContent='space-between' alignItems='center'>
                < Logo />
                < Box sx={{ flexGrow: 1 }} />
                <Ship />
                <WWW />
                <Discord />
                <Twitter />
            </Box>
            <Divider sx={{ mb: '48px', mt: '20px' }} />

            <MonkeyTable cards={products()} />

            <Stack spacing={2} mt='50px' alignItems='center'>
                <Pagination count={totalPage} page={page} onChange={handleChange} color='secondary' />
            </Stack>
        </Box>

    )
}

const Logo = styled.img.attrs({
    src: oxap3s_logo,
})`
    width: 173px;
    height: 44.15px;
    display: block;
`

const Twitter = styled.a.attrs({
    href: "https://twitter.com/",
    target: '_blank',
    rel: 'nofollow'
})`
  width: 36px;
  height: 32px;
  background: url(${twitter_circle});
  margin: 5px;
`;

const Discord = styled.a.attrs({
    href: discordLink,
    target: '_blank',
    rel: 'nofollow'
})`
  width: 32px;
  height: 32px;
  background: url(${discord_circle});
  margin: 5px;
`;

const WWW = styled.a.attrs({
    href: '#',
    target: '_blank',
    rel: 'nofollow'
})`
  width: 32px;
  height: 32px;
  background: url(${www_circle});
  margin: 5px;
`;

const Ship = styled.a.attrs({
    href: '#',
    target: '_blank',
    rel: 'nofollow'
})`
  width: 32px;
  height: 34px;
  background: url(${ship_circle});
  margin: 5px;
`;