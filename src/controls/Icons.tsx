import styled, { keyframes } from "styled-components";

import {
  Button,
  ButtonProps,
}
  from '@mui/material';

import logo_nft from '../assets/images/svg/nftdrip_logo.svg'
import nftdrip_black from '../assets/images/svg/nftdrip_logo_black.svg'
import tweet_icon_apple from '../assets/images/svg/tweet_icon_apple.svg'
import discord_icon_apple from '../assets/images/svg/discord_icon.svg'
import button_nft_drip from '../assets/images/button_nft_drip.png'
import buttonBg from '../assets/images/ButtonBackground.png'

import { max } from "../breakpoints";
import { discordLink, twitterLink } from "../config";


export const LogoNft = styled.img.attrs({
  src: logo_nft,
  alt: 'nftdrip'
})`
  max-width: 100%;
  width: 162px;
`;


export const Nftdrip = styled.img.attrs({
  src: nftdrip_black,
  alt: 'nftdrip'
})`
  max-width: 100%;
  /* width: 162px; */
`;



export const TwitterIcon = styled.a.attrs({
  href: twitterLink,
  target: '_blank',
  rel: 'nofollow'
})`
  width:27.89px; //24px;
  height: 27.89px; //19.5px;
  background-color: #fff;
  -webkit-mask-image: url(${tweet_icon_apple});
  mask-image: url(${tweet_icon_apple});
  mask-size: cover;
  /* transition: all 400ms;
  transform-style: preserve-3d; */
  margin-left: 30px;
  ${max.sm`
       margin-left: 15px;
    `};
  ${max.xs`
       margin-left: 10px;
    `};

  &:hover {
    background-color: #00ACEE;
    /* transform: rotateY(360deg); */
  }
`;


export const DiscordIcon = styled.a.attrs({
  href: discordLink,
  target: '_blank',
  rel: 'nofollow'
})`
  width: 29.42px; //24px;
  height: 24.78px; //18.27px;
  background-color: #fff;
  -webkit-mask-image: url(${discord_icon_apple});
  mask-image: url(${discord_icon_apple});
  mask-size: cover;
  /* transition: all 400ms;
  transform-style: preserve-3d; */
  margin-left: 30px;
  ${max.sm`
       margin-left: 15px;
    `};
  ${max.xs`
       margin-left: 10px;
    `};

  &:hover {
    background-color: #5865F2;
    /* transform: rotateY(360deg); */
  }
`;


const lava = keyframes`
  0% {
    background-position: 0 160%;
    opacity: 0;
  }
  100% {
    background-position: 0 100%;
    opacity: 1;
  }`

const lavaBack = keyframes`
  0% {
    background-position: 0 100%;
    opacity: 1;

  }
  100% {
    background-position: 0 160%;
    opacity: 0;
  }`


interface Props {
  animationDuration?: number
}

export const NFTdrip = styled.a.attrs({
  href: 'https://google.com/',
  target: '_blank',
  rel: 'nofollow'
}) <Props>`
  padding: 0 46px;
  font-size: 16px;
  background-color: #fff;
  color: #f05169;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  margin-left: 30px;
  height: 40PX;
  line-height: 40px;
  font-weight: 700;
  font-family: Sora, serif;
  text-decoration: none !important;
  border-radius: 20px;
  position: relative;
  ${max.sm`
       margin-left:15px;
       padding: 0 15px;
       height:30px;
       line-height: 30px;
       border-radius:15px;
    `};
  ${max.xs`
       margin-left:10px;
       padding: 0 5px;
       font-size:14px;
    `};

  &:after {
    background: url(${button_nft_drip}) no-repeat;
    content: '';
    display: block;
    width: 174px;
    height: 26px;
    position: absolute;
    left: 0;
    z-index: 1;
    background-position: 0 160%;
    top: 99.5%;
    animation-name: ${lavaBack};
    animation-duration: ${props => props.animationDuration || 0}s;
    animation-fill-mode: forwards;
    ${max.sm`
      display:none;
    `};
  }

  &:hover {
    /*  background-color: #f05169;
      color: #fff;*/

    &:after {
      animation-name: ${lava};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }
`


export const NFTcoach = styled.a.attrs({
  // href: 'https://google.com/',
  target: '_blank',
  rel: 'nofollow'
}) <Props>`
  padding: 0 46px;
  font-size: 14px;
  /* background-color: transparent; */
  color: #ffffff;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  margin-left: 30px;
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  font-family: Sora, serif;
  text-decoration: none !important;
  border: 1px solid white;
  border-radius: 20px;
  position: relative;
  ${max.sm`
       margin-left:15px;
       padding: 0 15px;
       height:30px;
       line-height: 30px;
       border-radius:15px;
    `};
  ${max.xs`
       margin-left:10px;
       padding: 0 5px;
       font-size:14px;
    `};

  &:after {
    content: '';
    display: block;
    width: 174px;
    height: 26px;
    position: absolute;
    left: 0;
    z-index: 1;
    background-position: 0 160%;
    top: 99.5%;
    ${max.sm`
      display:none;
    `};
  }

  &:hover {
     background-color: #FF9900;
    color: #fff;
    border-color: #FF9900;

  }
`

interface IsMobile {
  $isMobile?: boolean  // Transient props 
  background?: string
}

export const BuyButtonVip = styled(Button) <ButtonProps & IsMobile>`
   color:#FFFFFF !important;
    border-radius: 140px !important;
    background-image: url(${buttonBg});
    background-size: cover; 
    box-shadow: 0px 20px 80px rgba(255, 172, 12, 0.5);
    &:hover {
        box-shadow: 
            0px 0px 15px #064CF3,
            0px 0px 15px  #E30685,
            0px 0px 15px #EB064E;
        color: #FFFFFF;
    };
    border-color: #FFFFFF;
    font-size: ${({ $isMobile }) => $isMobile ? '18x' : '16px'};
    font-weight: 700;
    width: ${({ $isMobile }) => $isMobile ? '250px' : '200px'};
    height: 60px;
`

export const BuyButtonEarly = styled(Button) <ButtonProps & IsMobile>`
   color:#FFFFFF !important;
    border-radius: 140px !important;
    border: 1px solid #FFFFFF !important;
    &:hover {
      background-color: #67c5e5 !important;
      color: #FFFFFF;
    };
    font-size: ${({ $isMobile }) => $isMobile ? '18x' : '16px'};
    font-weight: 700;
    width: ${({ $isMobile }) => $isMobile ? '250px' : '200px'};
    height: 60px;
`