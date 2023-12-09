import React from 'react';
import {
  Box,
  Link,
  useMediaQuery,
} from '@mui/material/';
import styled from "styled-components";

import oxaps3s_logo from '../assets/images/svg/oxaps3s_logo.svg'
import plus from '../assets/images/svg/plus.svg'

import { Nftdrip, TwitterIcon, DiscordIcon } from '../../controls/Icons'

interface LayoutProps {
  $isMobile?: boolean;
  is1300?: boolean
}

const Oxaps3s_logo = styled.img.attrs({
  src: oxaps3s_logo,
  alt: 'oxaps3s'
}) <LayoutProps>`
  /* max-width: 100%; */
  /* width: 108.38px; */
  width: ${({ $isMobile }) => $isMobile ? "108.38px" : "54px"}; 
  height: 18.53px;
`;

const Plus = styled.img.attrs({
  src: plus,
}) <LayoutProps>`
/* margin: 4px 20px; */
margin: 4px ${({ $isMobile }) => $isMobile ? "20px" : "10px"}; ;
`

const NftdripPlus = styled(Nftdrip) <LayoutProps>`
/* width: 112.02px; */
width: ${({ $isMobile }) => $isMobile ? "112px" : "60px"}; 
height: 18.53px;
`

export const TwitterBlack = styled(TwitterIcon) <LayoutProps>`
background-color: black;
width: ${({ $isMobile }) => $isMobile ? "27px;" : "15px"}; 
height: ${({ $isMobile }) => $isMobile ? "27px;" : "15px"}; 
`
export const DiscordBlack = styled(DiscordIcon) <LayoutProps>`
background-color: black;
width: ${({ $isMobile }) => $isMobile ? "29px" : "20px"}; 
height: ${({ $isMobile }) => $isMobile ? "24px" : "15px"}; 
`

export default function TopHero() {
  const $isMobile = useMediaQuery('(min-width:455px)');
  const is800 = useMediaQuery('(min-width:800px)');

  return (
    <Box
      display='flex'
      justifyContent="space-between"
      alignItems="center"
      sx={{
        'paddingTop': `${$isMobile ? '45px' : '20px'}`
      }}>

      <Box>
        <Link href="/" sx={{ width: `${is800 ? 'initial' : '110px'}` }}>
          <NftdripPlus $isMobile={$isMobile} />
        </Link>
        <Plus />
        <Link href="/" sx={{ width: `${is800 ? 'initial' : '110px'}` }}>
          <Oxaps3s_logo $isMobile={$isMobile} />
        </Link>
      </Box>

      <Box
        display={$isMobile ? 'flex' : 'flex'}
        justifyContent="flex-end"
        alignItems="center"
      >
        <DiscordBlack $isMobile={$isMobile} />
        <TwitterBlack $isMobile={$isMobile} />
      </Box>


    </Box>
  )
}
