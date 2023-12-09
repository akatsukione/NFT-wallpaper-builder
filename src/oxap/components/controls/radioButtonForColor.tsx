import * as React from 'react';
import {
  Radio,
  FormControlLabel,
} from '@mui/material/';
import { RadioProps } from '@mui/material/Radio';
import styled from "styled-components";
import monitor from "../../assets/images/svg/monitor.svg"
import laptop from "../../assets/images/svg/laptop.svg"
import wide_monitor from "../../assets/images/svg/wide_monitor.svg"
import laptop_active from "../../assets/images/svg/laptop_active.svg"
import monitor_active from "../../assets/images/svg/monitor_active.svg"
import wide_monitor_active from "../../assets/images/svg/wide_monitor_active.svg"

import ImageListItem from '@mui/material/ImageListItem';

const Display = styled(ImageListItem)`
  width: 40px;
  height: 40px;
`

export function RadioLaptop(props: RadioProps) {
  return (
    <Radio
      checkedIcon={<Display> <img src={laptop_active} /> </Display>}
      icon={<Display> <img src={laptop} /> </Display>}
      {...props}
    />
  );
}

export function RadioMonitor(props: RadioProps) {
  return (
    <Radio
      checkedIcon={<Display> <img src={monitor_active} /> </Display>}
      icon={<Display> <img src={monitor} /> </Display>}
      {...props}
    />
  );
}

export function RadioWideMonitor(props: RadioProps) {
  return (
    <Radio
      checkedIcon={<Display> <img src={wide_monitor_active} /> </Display>}
      icon={<Display> <img src={wide_monitor} /> </Display>}
      {...props}
    />
  );
}
// 
// For checkbox Сhoice of Сolour
// 

export function BpRadioOne(props: RadioProps) {
  return (
    <Radio
      checkedIcon={<BpCheckedIcon background="#FFD430" colorBorder="rgba(0, 0, 0, 0.543)" />}
      icon={<BpIcon background="#FFD430" />}
      {...props}
    />
  );
}

export function BpRadioTwo(props: RadioProps) {
  return (
    <Radio
      checkedIcon={<BpCheckedIcon background="#0C0D0E" colorBorder="rgb(245, 8, 8)" />}
      icon={<BpIcon background="#0C0D0E" />}
      {...props}
    />
  );
}

export function BpRadioThree(props: RadioProps) {
  return (
    <Radio
      checkedIcon={<BpCheckedIcon background="#FAFAFA" colorBorder="rgba(0, 0, 0, 0.543)" />}
      icon={<BpIcon background="#FAFAFA" />}
      {...props}
    />
  );
}


const BpIcon = styled.span <{ background: string }>`
    width: 40px;
    height: 40px;
    background: ${({ background }) => background};
    border-radius:  6px; 
    border: 1px solid #D0D0D0;
`

const BpCheckedIcon = styled.span <{ background: string, colorBorder: string }>`
    width: 40px;
    height: 40px;
    background: ${({ background }) => background};
    border-radius:  6px; 
    border: 2px solid ${({ colorBorder }) => colorBorder};
    /* border: 2px solid;
    border-color: rgba(0, 0, 0, 0.543); */
`
// END choice of colour

export const RadioMonkey = styled(Radio)`
&, &.Mui-checked {
    color: #FFD430 !important;
}
`
export const FormControlLabelMonkey = styled(FormControlLabel)`
.MuiFormControlLabel-label {
    color: #000000 !important;
}
`
