import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';

export default function TemplateSelect() {
  const [age, setAge] = React.useState('nft_enthusiast');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'inline-flex', minWidth: 120, maxWidth: 220 }}>
      <FormControl fullWidth>
        <FormLabel>Template</FormLabel>
        <Select
          defaultValue="nft_enthusiast"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          
        >
          <MenuItem value={'nft_enthusiast'}>NFT Enthusiast</MenuItem>
          <MenuItem value={'nft_collector'}>NFT Collector</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}