import React from 'react';
import {
  Box,
  Link,
  useMediaQuery,
} from '@mui/material/';

import { LogoNft, TwitterIcon, DiscordIcon, NFTcoach } from "../../controls/Icons"

// import Hamburger from "./Hamburger"


export default function TopHero() {
  const isMobile = useMediaQuery('(min-width:455px)');
  const is800 = useMediaQuery('(min-width:800px)');

  return (
    <Box
      display='flex'
      justifyContent={isMobile?"space-between":"center"}
      alignItems="center"
    >

      <Link href="/" sx={{ width: `${is800 ? 'initial' : '110px'}` }}>
        <LogoNft />
      </Link>

      <Box
        display={isMobile ? 'flex' : "none"}
        justifyContent="flex-end"
        alignItems="center"
      >
        <DiscordIcon />
        <TwitterIcon />
      </Box>


    </Box>
  )
}
