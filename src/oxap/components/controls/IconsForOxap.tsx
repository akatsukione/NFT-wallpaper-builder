import styled from "styled-components";
import oxap3s_logo from '../../assets/images/svg/logo_cover.svg'
import twitter_circle from '../../assets/images/svg/twitter_circle.svg'
import discord_circle from '../../assets/images/svg/discord_circle.svg'
import www_circle from '../../assets/images/svg/www_circle.svg'
import ship_circle from '../../assets/images/svg/ship_circle.svg'


export const OxapLogo = styled.img.attrs({
  src: oxap3s_logo,
})`
    width: 173px;
    height: 44.15px;
    display: block;
`

export const Twitter = styled.a.attrs({
  href: "https://twitter.com/0xApes_NFT",
  target: '_blank',
  rel: 'nofollow'
})`
  width: 32px;
  height: 32px;
  background: url(${twitter_circle});
  margin: 5px;
`;

export const Discord = styled.a.attrs({
  href: "https://discord.gg/NT6vSruNaC",
  target: '_blank',
  rel: 'nofollow'
})`
  width: 32px;
  height: 32px;
  background: url(${discord_circle});
  margin: 5px;
`;

export const WWW = styled.a.attrs({
  href: 'https://www.0xapes.com/',
  target: '_blank',
  rel: 'nofollow'
})`
  width: 32px;
  height: 32px;
  background: url(${www_circle});
  margin: 5px;
`;

export const Ship = styled.a.attrs({
  href: 'https://opensea.io/collection/0xapes-trilogy',
  target: '_blank',
  rel: 'nofollow'
})`
  width: 32px;
  height: 34px;
  background: url(${ship_circle});
  margin: 5px;
`;