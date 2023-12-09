import * as React from 'react';
import {
    Box,
    useMediaQuery,
} from '@mui/material/'
import styled from "styled-components";

import { RoundBtn } from '../../../components/controls/Buttons'
import { SectionTitle } from './TwitterBanner'


import nftdrip_logo from '../../../assets/images/svg/nftdrip_logo.svg'
import chrome_logo from '../../../assets/images/chrome_logo.png'
// import monkey_group from '../assets/images/monkey_group.png'
import monkey_group from '../../../assets/images/monkey_group3.png'
import monkey1 from '../../../assets/images/monkey1.png'
import phon_extention from '../../../assets/images/phon_extention.png'

interface LayoutProps {
    isMobile?: boolean;
    is1300?: boolean
}

export const Monkey = styled(Box) <LayoutProps>`
    width: ${({ isMobile }) => isMobile ? "161px" : "108px"};
    height: 184.46px;
    border-radius: 12px;
    box-sizing: border-box;
    border-radius: 8.28257px;
    background-image: url(${monkey1});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    position: absolute;
    top: ${({ isMobile }) => isMobile ? "-30px" : "-31px"};
    left: ${({ isMobile }) => isMobile ? "-10px" : "-7px"};
    z-index: 2;
 `
export const MonkeyGroup = styled(Box) <LayoutProps>`
    width: ${({ isMobile }) => isMobile ? "512px" : "107%"};
    height: 312.58px;
    border-radius: 12px;
    box-sizing: border-box;
    border-radius: 8.28257px;
    background-image: url(${monkey_group});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    margin-left: ${({ isMobile }) => isMobile ? "-1px" : "-19px"};
    margin-bottom:  ${({ isMobile }) => isMobile ? "-7px" : "-33px"};
`
const BoxExtention = styled(Box) <LayoutProps>`
    /* width: 946px; */
    width: 100%;
    height: ${({ isMobile }) => isMobile ? "235px" : "400px"};
    background: #000000 url(${phon_extention});
    background-repeat: no-repeat;
    background-position: right;
    border-radius: 10px;
    position: relative;
    margin-top: 74px;
    margin-bottom: ${({ isMobile }) => isMobile ? "100px" : "0px"};
    /* overflow: hidden; */
    display: flex;
    flex-direction: ${({ isMobile }) => isMobile ? "row" : "column"};
    align-items: center;
    justify-content:  ${({ isMobile }) => isMobile ? "space-between" : "start"};
`
const SubSection = styled(SectionTitle)`
    font-size: 30px;
    text-transform: capitalize;
    width: 233px;
`
const DownloadExtention = styled(RoundBtn)`
    border: 1px solid #808080;
    border-radius: 8px;
    color: #FFFFFF;
    margin-top: 15px;
`
export const DownloadIcon = styled.img.attrs({
    src: chrome_logo,
})`
    width: 24px;
    height: 24px;
  `;

export const NftDripLogo = styled.img.attrs({
    src: nftdrip_logo,
})`
    width: 70px;
    height: 11.2px;
  `;

export default function Extention() {
    const isMobile = useMediaQuery('(min-width:455px)');
    return (
        <Box >
            <SectionTitle>  Extension </SectionTitle>
            <BoxExtention isMobile={isMobile}>
                {/* <Monkey isMobile={isMobile}/> */}
                <MonkeyGroup isMobile={isMobile} position={isMobile ? 'unset' : 'relative'} top='-35px' />
                <Box width={isMobile ? '50%' : '100%'} display='flex' justifyContent='center'>
                    <Box display='flex' flexDirection='column' position={isMobile ? 'unset' : 'relative'} top='-15px'>
                        <NftDripLogo />
                        
                        <DownloadExtention variant="outlined" startIcon={<DownloadIcon />}>
                            download the extension
                        </DownloadExtention>
                    </Box>
                </Box>
            </BoxExtention>
        </Box>
    )
}