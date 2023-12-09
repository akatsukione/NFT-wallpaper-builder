import * as React from "react";
import { Box, Divider } from "@mui/material/";
import styled from "styled-components";
import monkey_clear from "../assets/images/svg/monkey_clear.svg";
import logo_cover from "../assets/images/svg/logo_cover.svg";
import logo_cover_white from "../assets/images/svg/logo_cover_white.svg";
import { Download } from "./TwitterBanner";
import { SectionTitle, MonkeyOnBanner, IdAPE, Banner } from "./styles";

const MobileBox = styled(Box)`
  width: 222px;
  height: 416px;
  background: #fed32f;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const DesktopBox = styled(Box)`
  width: 775px;
  height: 416px;
  background: #000000;
  border: 1px solid #585858;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 74px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoCoverDesktop = styled.img.attrs({
  src: logo_cover_white,
})`
  width: 238px;
  height: 61px;
`;
const MonkeyOnDesktop = styled(MonkeyOnBanner)`
  right: 70px;
`;
const MonkeyOnTweet = styled(MonkeyOnBanner)`
  width: 103.82px;
  height: 103.82px;
  right: 85px;
`;
const IdAPEonDesktop = styled(IdAPE)`
  color: #ffffff;
`;
const IdAPEonTweet = styled(IdAPE)`
  font-size: 12px;
  bottom: 15px;
  right: 22px;
`;
const LogoCover = styled.img.attrs({
  src: logo_cover,
})`
  width: 134.19px;
  height: 34.24px;
  margin-top: 85px;
`;
const MonkeyOnMobile = styled.img.attrs({
  src: monkey_clear,
})`
  width: 213px;
  height: 213px;
`;

const BannerWall = styled(Banner)`
  width: 783.83px;
  height: 261px;
  margin-right: -400px;
  margin-top: 30px;
`;
const LogoCoverTweet = styled.img.attrs({
  src: logo_cover,
})`
  width: 197.2px;
  height: 50.54px;
`;

function MobileWall() {
  return (
    <Box
      sx={{ width: "222px", top: "160px", left: "80px" }}
      position="absolute"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <MobileBox>
        <LogoCover />
        <MonkeyOnMobile />
      </MobileBox>
      <Download title="Download Mobile" mt="20px" />
    </Box>
  );
}

function DesktopWall() {
  return (
    <Box
      sx={{ width: "775px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <DesktopBox>
        <LogoCoverDesktop />
        <MonkeyOnDesktop />
        <IdAPEonDesktop> #19927 </IdAPEonDesktop>
      </DesktopBox>
      <Download title="Download Desktop" mt="20px" />
    </Box>
  );
}

function TwitterWall() {
  return (
    <BannerWall>
      <LogoCoverTweet />
      <MonkeyOnTweet />
      <IdAPEonTweet> #19927 </IdAPEonTweet>
    </BannerWall>
  );
}

export default function Wallpapers() {
  let innerHeight = window.innerHeight;

  return (
    <Box>
      <SectionTitle> Wallpapers </SectionTitle>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        <DesktopWall />
        <MobileWall />
        <TwitterWall />
      </Box>
      <Divider sx={{ my: "50px" }} />
    </Box>
  );
}
