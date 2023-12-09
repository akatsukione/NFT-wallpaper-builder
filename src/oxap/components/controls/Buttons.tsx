import {
    Typography,
    Button,
} from '@mui/material/';
import styled from "styled-components";

import download from '../../assets/images/svg/download.svg'
import rank_line from '../../assets/images/svg/rank_line.svg';
import logo_chrome from '../../assets/images/svg/logo-chrome-icon_black.svg';

interface LayoutProps {
    $isMobile?: boolean;
    is1300?: boolean
}

export const DownloadIcon = styled.img.attrs({
    src: download,
})`
    width: 12px;
    height: 11px;
  `;

export const RankIcon = styled.img.attrs({
    src: rank_line,
})`
    max-width: 100%;
    width: 20px;
    height: 17px;
  `;

export const ChromeIcon = styled.img.attrs({
    src: logo_chrome,
})`
    width: 17px;
    height: 17px;
  `;



export const RoundBtn = styled(Button)`
    border: 1px solid #000000;
    color: #000000;
    border-radius: 100px;
`

export const ButtonHero = styled(Button) <LayoutProps>`
    height: 50px;
    /* margin-top: 46px; */
    margin-top: ${({ $isMobile }) => $isMobile ? "46px" : "20px"};
    border: 1px solid #000000;
    border-radius: 6px;
    color: #000000;
    font-weight: bold;
    font-size: 14px;
    padding-left: 40px;
    padding-right: 40px;
    width: ${({ $isMobile }) => $isMobile ? "initial" : "230px"};;
    z-index: 2;
`

export const SubButtonText = styled(Typography) <LayoutProps>`
    /* font-family: Aeonik; */
    font-style: italic;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
    /* text-align: left; */
    text-align: ${({ $isMobile }) => $isMobile ? "left" : "center"};
    margin-top: 10px;
`