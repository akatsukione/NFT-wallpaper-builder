import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  useMediaQuery,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from "@mui/material/";

import TwitterIcon from "@mui/icons-material/Twitter";

import styled from "styled-components";
import { discordLink } from "../../../../config";
import download from "../../../assets/images/svg/download.svg";
import discord_black from "../../../assets/images/svg/discord_black_color.svg";
import CustomizeBanner from "./CustomizeBanner";

import { RoundBtn } from "../../../components/controls/Buttons";

import logo_cover from "../../../assets/images/svg/logo_cover.svg";
import ornament4yellow from "../../../assets/images/svg/ornament_tweet_yellow.svg";
import ornament4black from "../../../assets/images/svg/ornament_tweet_black.svg";
import ornament4white from "../../../assets/images/svg/ornament_tweet_white.svg";

interface LayoutProps {
  $isMobile?: boolean;
  is1300?: boolean;
  monkeyImg?: string;
}

export const Discord = styled.a.attrs({
  href: discordLink,
  target: "_blank",
  rel: "nofollow",
})`
  width: 51px;
  height: 43px;
  background: url(${discord_black});
`;

export const SectionTitle = styled(Typography)<LayoutProps>`
  margin-bottom: ${({ $isMobile }) => ($isMobile ? "32px" : "40px")};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "32px" : "46px")};
  text-align: center;
  line-height: 104%;
  color: #000000;
`;

export const Banner = styled(Box)<LayoutProps>`
  max-width: 946px;
  height: ${({ $isMobile }) => ($isMobile ? "315px" : "160px")};
  /* height: 315px; */
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const LogoCover = styled.img.attrs({
  src: logo_cover,
})<any | LayoutProps>`
  filter: ${({ invert }) => (invert ? "invert(1)" : "none")};
  width: ${({ $isMobile }) => ($isMobile ? "238px " : "100px")};
  height: 61px;
`;

export const MonkeyOnBanner = styled(Box)<LayoutProps>`
  width: ${({ $isMobile }) => ($isMobile ? "125px" : "60px")};
  height: ${({ $isMobile }) => ($isMobile ? "125px" : "60px")};
  border: 1px solid #ffb50f;
  box-sizing: border-box;
  border-radius: 8.28257px;
  background-image: url(${({ monkeyImg }) => monkeyImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  position: absolute;
  right: ${({ $isMobile }) => ($isMobile ? "100px " : "25px")};
  top: ${({ $isMobile }) => ($isMobile ? "80px " : "45px")};
`;

export const IdAPE = styled(Typography)<LayoutProps>`
  font-style: normal;
  font-weight: 500;
  font-size: ${({ $isMobile }) => ($isMobile ? "14.6163px " : "10px")};
  line-height: 18px;
  text-align: right;
  color: #000000;
  /* position: absolute; */
  position: relative;
  bottom: ${({ $isMobile }) => ($isMobile ? "-138px " : "10px")};
  left: ${({ $isMobile }) => ($isMobile ? "-309px " : "100px")};
`;
export const SubSection = styled(Typography)<LayoutProps>`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "18px " : "24px")};
  line-height: 29px;
  text-align: left;
  color: #000000;
  margin-top: 18px;
  margin-bottom: 24px;
`;
export const DownloadIcon = styled.img.attrs({
  src: download,
})`
  width: 12px;
  height: 11px;
`;

export const MonkeyOnBanner1 = styled(Box)<LayoutProps>`
  width: ${({ $isMobile }) => ($isMobile ? "125px" : "60px")};
  height: ${({ $isMobile }) => ($isMobile ? "125px" : "60px")};
  border: 1px solid #ffb50f;
  box-sizing: border-box;
  border-radius: 8.28257px;
  background-image: url(${({ monkeyImg }) => monkeyImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  margin-left: ${({ $isMobile }) => ($isMobile ? "145px" : "60px")};
`;

export const IdAPE1 = styled(Typography)<LayoutProps>`
  font-style: normal;
  font-weight: 500;
  font-size: ${({ $isMobile }) => ($isMobile ? "19px" : "10px")};
  line-height: 18px;
  text-align: right;
  color: #000000;
  position: absolute;
  bottom: ${({ $isMobile }) => ($isMobile ? "19px" : "10px")};
  left: ${({ $isMobile }) => ($isMobile ? "240px" : "100px")};
`;

export const LogoCover1 = styled.img.attrs({
  src: logo_cover,
})<any | LayoutProps>`
  filter: ${({ invert }) => (invert ? "invert(1)" : "none")};
  width: ${({ $isMobile }) => ($isMobile ? "238px " : "100px")};
  height: 61px;
`;

export const AnimateDiscord = styled(Box)`
  position: relative;
  opacity: 0;
  animation-duration: 400ms;
  animation-name: slidein-arb;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: 100ms;

  @keyframes slidein-arb {
    from {
      /* transform: translate3d( 0, -60px, 0); */
      transform: translate3d(-60px, 0, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0);
      opacity: 1;
    }
  }
`;
