import React, { useState, useRef, useEffect, useCallback } from "react";
import {
    Input,
    Box,
    TextField,
    InputAdornment
} from '@mui/material/';
import styled from "styled-components";


const ErrorStyled = styled.span`
    width: 153px;
    color: red;
    text-align: center;
    line-height: 1.2; 
    margin-top: 5px;   
`


function checkInputKey(e: any) {
    // preventing input of unwanted characters
    if (!((e.key >= '0' && e.key <= '9') ||
        e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Delete' || e.key == 'Backspace')) {
        e.preventDefault();
    }

}

export const InputOxap = ({ placeholder, value, onChange, name, error }: any) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Box position='relative'
            onClick={() => {
                inputRef.current?.focus();
            }}
        >
            
            <TextField variant="outlined"
                ref={inputRef}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                onKeyDown={checkInputKey}
                autoComplete="off"
                InputProps={{
                    startAdornment: <InputAdornment position="start">NFT #</InputAdornment>
                }}
                sx={{
                    width: "125px",
                }}
            />
            
            
            <ErrorStyled> {error.ape} </ErrorStyled>
        </Box >
    );
};

export const correctInputValue = (value: string) => {
    let MaxLength = 5
    return value.length <= MaxLength ? value : value.slice(0, MaxLength)
}



