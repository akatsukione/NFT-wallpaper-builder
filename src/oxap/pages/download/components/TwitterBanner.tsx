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
import CustomizeBanner from "./CustomizeBanner";

import { RoundBtn } from "../../../components/controls/Buttons";

import logo_cover from "../../../assets/images/svg/logo_cover.svg";
import ornament4yellow from "../../../assets/images/svg/ornament_tweet_yellow.svg";
import ornament4black from "../../../assets/images/svg/ornament_tweet_black.svg";
import ornament4white from "../../../assets/images/svg/ornament_tweet_white.svg";
import download from "../../../assets/images/svg/download.svg";
import discord_black from "../../../assets/images/svg/discord_black_color.svg";
import { SubButtonText } from "./HeroOxap";
import { useState } from "react";
import { discordLink } from "../../../../config";
import useDownloadPng from "../../../../hooks/useDownloadPng";

import tw_pic from "../../../../assets/images/tw-0xape.png";

import TopSectionOxap from "../../../components/TopSectionOxap";

import { AssembleBanner, converter } from "./AssembleBanner";
import { relative } from "path";
import {
  Banner,
  Discord,
  DownloadIcon,
  MonkeyOnBanner1,
  SectionTitle,
  SubSection,
  LogoCover1,
  IdAPE1,
  AnimateDiscord,
} from "./styles";

export function Download(prop: { title: string; mt?: string }) {
  return (
    <Box mt={prop.mt}>
      <RoundBtn variant="outlined" startIcon={<DownloadIcon />}>
        {prop.title}
      </RoundBtn>
    </Box>
  );
}

export default function TwitterBanner() {
  const $isMobile = useMediaQuery("(min-width:455px)");

  const [settings, setSettings] = useState({
    ape: "10000",
    color: "#FFD430",
    pattern: "true",
    logo: "true",
    img: "",
  });

  const ref = React.useRef<HTMLDivElement>(null);

  const widthEl = 1500;
  const heightEl = 500;
  const name = settings.ape;
  const typeCover = "twitter-banner";
  const [isDownload, doDownload] = useDownloadPng({
    ref,
    widthEl,
    heightEl,
    name,
    typeCover,
  });

  return (
    <Box mt={$isMobile ? "48px" : "48px"}>
      <TopSectionOxap />

      <SectionTitle id="twitter_banner">Twitter Banner</SectionTitle>

      <Grid
        container
        xs={12}
        md={10}
        m={"0 auto"}
        sx={{
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Banner
            $isMobile={$isMobile}
            sx={{
              width: "100%",
              backgroundImage: getBannerBackground(settings),
              backgroundColor: settings?.color,
              marginTop: "10px",
              backgroundSize: "cover !important",
            }}
          >
            <Box sx={{ width: "49%" }} display="flex" justifyContent="end">
              {settings.logo === "true" ? (
                <LogoCover1
                  $isMobile={$isMobile}
                  invert={settings.color === "#000"}
                />
              ) : null}
            </Box>

            <Box display="flex" justifyContent="end">
              <MonkeyOnBanner1
                sx={{
                  position: "relative",
                  top: "-17px",
                }}
                $isMobile={$isMobile}
                monkeyImg={settings.img}
              />
            </Box>

            <IdAPE1
              $isMobile={$isMobile}
              sx={{
                color: settings.color === "#000" ? "#fff!important" : "#000",
              }}
            >
              {" "}
              #{settings?.ape}{" "}
            </IdAPE1>
          </Banner>

          <AssembleBanner
            settings={settings}
            typeWallpaper={"twitter"}
            ref={ref}
          />

          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              ml: "43px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              sx={{
                height: 180,
                width: 180,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
                mt: "-80px",
                // transform: "translateY(-80px)",
                border: "4px solid white",
                borderRadius: "100%",
              }}
              alt="The house from the offer."
              src={tw_pic}
            />

            <Box
              sx={{
                mt: "10px",
                ml: "16px",
              }}
            >
              <TextField
                placeholder="@username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TwitterIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>

        <SubSection>Customize Banner</SubSection>

        <CustomizeBanner settingsChanged={setSettings} layout={"row"} />

        <Box
          display="flex"
          mt="40px"
          flexDirection={$isMobile ? "row" : "column"}
          alignItems={$isMobile ? "initial" : "center"}
        >
          <RoundBtn
            onClick={doDownload}
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            Download Banner
          </RoundBtn>

          <AnimateDiscord
            ml={$isMobile ? "40px" : 0}
            display={isDownload ? "flex" : "none"}
            mt={$isMobile ? "initial" : "25px"}
          >
            <Discord />
            <Box ml="15px">
              <SubButtonText $isMobile={$isMobile}>
                Like what we’re doing?
              </SubButtonText>
              <Typography sx={{ color: "#000000" }}>
                {" "}
                Join the NFT Drip Community!{" "}
              </Typography>
            </Box>
          </AnimateDiscord>
        </Box>
      </Grid>
    </Box>
  );
}

export const getBannerBackground = (settings: any) => {
  if (settings.pattern === "false") {
    return "none";
  }
  switch (settings.color) {
    case "#FFD430":
      return `url(${ornament4yellow})`;
    case "#000":
      return `url(${ornament4black})`;
    case "#fff":
      return `url(${ornament4white})`;
    default:
      return "none";
  }
};
