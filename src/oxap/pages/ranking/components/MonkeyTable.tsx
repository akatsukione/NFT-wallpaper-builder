import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MonkeyCard from './MonkeyCard'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface NftProps {
  img?: string
  ape?: number
  rank?: number
  level?: string
}

export default function MonkeyTable({cards}: {cards:NftProps[] | any}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards?.map((card : any, index : number) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Item elevation={10} sx={{ padding: 0, borderRadius: "12px" }} ><MonkeyCard img={card.img} rank={card.rank} ape={card.ape} level={card.level} /></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
