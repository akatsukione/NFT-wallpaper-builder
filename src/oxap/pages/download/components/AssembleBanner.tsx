import React from 'react';
import {
    Box,
    Typography
} from '@mui/material/';
import styled from "styled-components";

import logo_cover from '../../../assets/images/svg/logo_cover.svg'

import ornament4yellow from '../../../assets/images/svg/ornament_desktop_yellow.svg'
import ornament4black from '../../../assets/images/svg/ornament_desktop_black.svg'
import ornament4white from '../../../assets/images/svg/ornament_desktop_white.svg'

import ornamentTweet4yellow from '../../../assets/images/svg/ornament_tweet_yellow.svg'
import ornamentTweet4black from '../../../assets/images/svg/ornament_tweet_black.svg'
import ornamentTweet4white from '../../../assets/images/svg/ornament_tweet_white.svg'

import ornamentPhone4yellow from '../../../assets/images/svg/ornament_phone_yellow.svg'


const Banner = styled(Box) <any>`
  position: relative;
  display: flex;
  background-repeat: no-repeat; 
  background-position: 0% 50%;
  
`

const MonkeyOnWall = styled(Box) <{ monkeyImg: string }>`
  width: 146px;
  height: 146px;
  border: 1px solid #FFB50F;
  box-sizing: border-box;
  border-radius: 8.28257px;
  background-image: url(${({ monkeyImg }) => monkeyImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`

const LogoCoverDesktop = styled.img.attrs({
    src: logo_cover,
}) <any>`
  filter: ${({ invert }) => invert ? 'invert(1)' : 'none'};
  width: 134px;
  width: ${({ widthLogo }) => widthLogo};
  margin-top: 20px;
  margin-top:  ${({ mtLogo }) => mtLogo};
`;

export const IdAPE = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: "15px";
  line-height: 18px;
  text-align: right;
  color: #000000;
  position: absolute;
  bottom:  "-138px";
  right:  "-309px";
`

export const converter = (settings: any, typeWallpaper: string) => {
    let obj = {}
    if (typeWallpaper === 'desktop') {
        switch (settings.display) {
            case 'monitor':
                obj = {
                    widthBanner: 1920,
                    heightBanner: 1080,

                    widthBox: '190px',
                    leftBox: '132px',
                    topBox: '380px',

                    widthMonkey: '180px',
                    heightMonkey: '180px',
                    borderRadiusMonkey: '12px',

                    widthLogo: '146px',
                    mtLogo: '40px',

                    fontSizeIdAPE: '20px',
                    bottomIdAPE: '20px',
                    rightIdAPE: '20px',

                    backgroundSize: '130%',
                    jcBanner: 'end',
                    aiBanner: 'end',

                    monkeyPosition: 'unset',
                };
                return new Map(Object.entries(obj));
            case 'laptop':
                obj = {
                    widthBanner: 2560,
                    heightBanner: 1600,

                    widthBox: '190px',
                    leftBox: '210px',
                    topBox: '590px',

                    widthMonkey: '240px',
                    heightMonkey: '240px',
                    borderRadiusMonkey: '28px',

                    widthLogo: '146px',
                    mtLogo: '40px',

                    fontSizeIdAPE: '25px',
                    bottomIdAPE: '25px',
                    rightIdAPE: '25px',

                    backgroundSize: '130%',
                    jcBanner: 'end',
                    aiBanner: 'end',

                    monkeyPosition: 'unset'
                };
                return new Map(Object.entries(obj));
            case 'widemonitor':
                obj = {
                    widthBanner: 3840,
                    heightBanner: 1600,

                    widthBox: '400px',
                    leftBox: '250px',
                    topBox: '485px',

                    widthMonkey: '355px',
                    heightMonkey: '355px',
                    borderRadiusMonkey: '28px',

                    widthLogo: '346px',
                    mtLogo: '40px',

                    fontSizeIdAPE: '30px',
                    bottomIdAPE: '30px',
                    rightIdAPE: '30px',

                    backgroundSize: '130%',
                    jcBanner: 'end',
                    aiBanner: 'end',

                    monkeyPosition: 'unset'
                };
                return new Map(Object.entries(obj));
            default:
                obj = {};
                return new Map(Object.entries(obj));
        }
    } else if (typeWallpaper === 'twitter') {
        obj = {};
        obj = {
            widthBanner: 1500,
            heightBanner: 500,

            widthBox: '190px',
            leftBox: '1000px',
            topBox: '140px',

            widthMonkey: '210px',
            heightMonkey: '210px',
            borderRadiusMonkey: '12px',

            widthLogo: '338px',
            mtLogo: '0px',
            positionLogo: 'absolute',


            fontSizeIdAPE: '20px',
            bottomIdAPE: '20px',
            rightIdAPE: '20px',



            backgroundSize: 'cover',
            backgroundPosition: '0% 50%',
            jcBanner: 'center',
            aiBanner: 'center',

            monkeyPosition: 'absolute'
        }
        return new Map(Object.entries(obj));
    } else if (typeWallpaper === 'phone') {
        obj = {};
        obj = {
            widthBanner: 1080,
            heightBanner: 1920,

            backgroundSize: 'contain',
            backgroundPosition: '0% -62%',

            fdirBanner: 'column',
            jcBanner: 'center',
            aiBanner: 'center',

            widthLogo: '638px',
            mtLogo: '-250px',
            // positionLogo: 'absolute',


            widthMonkey: '910px',
            heightMonkey: '910px',
            borderRadiusMonkey: '12px',

            bottomIdAPE: '20px',

        }
        return new Map(Object.entries(obj));
    }
}

export const AssembleBanner = React.forwardRef<HTMLDivElement, any>(
    ({ settings, typeWallpaper }, ref) => {

        let attr = converter(settings, typeWallpaper)
        return (
            < Box display='none' >
                <Banner
                    ref={ref}
                    sx={{
                        backgroundSize: `${attr?.get("backgroundSize")} !important `,
                        backgroundImage: getBannerBackground(settings, typeWallpaper),
                        backgroundColor: settings?.color,
                        maxWidth: `${attr?.get("widthBanner")}px !important `,
                        height: `${attr?.get("heightBanner")}px !important `,
                        justifyContent: `${attr?.get("jcBanner")} !important `,
                        alignItems: `${attr?.get("aiBanner")} !important `,
                        backgroundPosition: `${attr?.get("backgroundPosition")} !important `,

                    }}>

                    {typeWallpaper === 'desktop'
                        ? <Box
                            width={`${attr?.get('widthBox')}!important`}
                            display='flex' position='absolute' flexDirection='column' alignItems='center'
                            sx={{
                                left: `${attr?.get('leftBox')}!important`,
                                top: `${attr?.get('topBox')}!important`
                            }}>
                            <MonkeyOnWall monkeyImg={settings.img}
                                sx={{
                                    width: `${attr?.get('widthMonkey')}!important`,
                                    height: `${attr?.get('heightMonkey')}!important`,
                                    borderRadius: `${attr?.get('borderRadiusMonkey')}!important`,
                                    // position: `${attr?.get('monkeyPosition')} `,
                                }}
                            />
                            {settings.logo === 'true' ?
                                <LogoCoverDesktop invert={settings.color === '#000'}
                                    widthLogo={`${attr?.get('widthLogo')}!important`}
                                    mtLogo={`${attr?.get('mtLogo')}!important`}
                                /> : null}
                        </Box>
                        : typeWallpaper === 'twitter'
                            ? <Box>
                                {settings.logo === 'true' ?
                                    <LogoCoverDesktop invert={settings.color === '#000'}
                                        widthLogo={`${attr?.get('widthLogo')}!important`}
                                        mtLogo={`${attr?.get('mtLogo')} !important`}
                                    /> : null}

                                <MonkeyOnWall monkeyImg={settings.img}
                                    sx={{
                                        width: `${attr?.get('widthMonkey')}!important`,
                                        height: `${attr?.get('heightMonkey')}!important`,
                                        borderRadius: `${attr?.get('borderRadiusMonkey')}!important`,
                                        position: 'absolute',
                                        top: '125px',
                                        right: '155px',
                                    }}
                                />

                            </Box>
                            : typeWallpaper === 'phone'
                                ? <Box display='flex' flexDirection="column" justifyContent="center" alignItems="center"
                                    sx={{ height: `${attr?.get("heightBanner")}px !important `, }}
                                >
                                    {settings.logo === 'true' ?
                                        <LogoCoverDesktop invert={settings.color === '#000'}
                                            widthLogo={`${attr?.get('widthLogo')}!important`}
                                            mtLogo={`${attr?.get('mtLogo')} !important`}
                                        /> : null}

                                    <MonkeyOnWall monkeyImg={settings.img}
                                        sx={{
                                            width: `${attr?.get('widthMonkey')}!important`,
                                            height: `${attr?.get('heightMonkey')}!important`,
                                            border: "0px !important",

                                            position: 'absolute',
                                            top: '1010px',

                                        }}
                                    />

                                </Box>
                                : ''
                    }



                    <IdAPE sx={{
                        color: settings.color === '#000' ? '#fff!important' : "#000",
                        fontSize: `${attr?.get('fontSizeIdAPE')}!important`,
                        bottom: `${attr?.get('bottomIdAPE')}!important`,
                        right: `${attr?.get('rightIdAPE')}!important`,
                    }}> #{settings?.ape} </IdAPE>
                </Banner>
            </Box >
        )
    }
)

export const getBannerBackground = (settings: any, typeWallpaper: string) => {
    if (settings?.pattern === "false") {
        return 'none';
    }

    if (typeWallpaper === 'desktop') {
        switch (settings?.color) {
            case '#FFD430':
                return `url(${ornament4yellow}) `;
            case '#000':
                return `url(${ornament4black}) `;
            case '#fff':
                return `url(${ornament4white})`;
            default:
                return 'none';
        }
    } else if (typeWallpaper === 'twitter') {
        switch (settings?.color) {
            case '#FFD430':
                return `url(${ornamentTweet4yellow}) `;
            case '#000':
                return `url(${ornamentTweet4black}) `;
            case '#fff':
                return `url(${ornamentTweet4white})`;
            default:
                return 'none';
        }
    } else if (typeWallpaper === 'phone') {
        switch (settings?.color) {
            case '#FFD430':
                return `url(${ornamentPhone4yellow}) `;
            case '#000':
                return `url(${ornamentPhone4yellow}) `;
            case '#fff':
                return `url(${ornamentPhone4yellow})`;
            default:
                return 'none';
        }
    }

}
