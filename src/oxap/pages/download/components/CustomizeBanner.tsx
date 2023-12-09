import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    FormGroup,
    Switch,
} from '@mui/material/';


import { styled } from '@mui/material/styles';

import {
    BpRadioOne,
    BpRadioTwo,
    BpRadioThree,
    RadioMonkey,
    FormControlLabelMonkey,
    RadioLaptop,
    RadioMonitor,
    RadioWideMonitor,
} from '../../../components/controls/radioButtonForColor'

import { correctInputValue, InputOxap } from '../../../components/controls/InputForApe'

import TemplateSelect from '../../../components/controls/TemplateSelect'

import ToggleSwitch from '../../../components/controls/Switch'

import { debounce } from "@mui/material";

import useValidation from '../../../../hooks/useValidation'
import { InputValidations } from '../../../components/controls/validations'
interface InputProps {
    ape: any
}



export default function CustomizeBanner(props: any) {

    const [settings, setSettings] = useState({
        ape: '10000',
        color: '#FFD430',
        pattern: 'true',
        logo: 'true',
        img: '',
        display: "laptop",
    });


    const [images, setImages] = useState({} as any)

    // FIXME isValid - use for loading image / incorrect first errors load img 


    const wait = 1000
    const { errors, isValid } = useValidation(settings, InputValidations, wait);



    useEffect(() => {
        props.settingsChanged(settings)
    }, [settings]);

    useEffect(() => {
        // if (settings.ape === "" || settings.ape.toString().length !== 5) {
        if (!isValid || settings.ape.toString().length !== 5) {
            return;
        }
        if (images[settings.ape]) {
            setSettings((settings) => ({
                ...settings,
                img: images[settings.ape]
            }));
            return;
        }
        const imgUrl  = `https://byterum.mypinata.cloud/ipfs/QmXhHyRN1Boatq3gD33Rgii4gpehw4nfR8pcq81f2o5zyN/${settings.ape}.png`
        setSettings((settings) => ({
            ...settings,
            img: imgUrl
        }));
        setImages((images: any) => ({
            ...images,
            [settings.ape]: imgUrl
        }));
    }, [settings.ape, isValid]);

    const loadImage = useCallback(
        debounce(async (ape) => {
            const { img } = await fetch(`https://nftdrip.app/api/apeImg/${ape}`).then(r => r.json());
            setSettings((settings) => ({
                ...settings,
                img
            }))
            setImages((images: any) => ({
                ...images,
                [ape]: img
            }))

        }, 1000),
        []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        let isApe = event.target.name === 'ape'
        const stngs = {
            ...settings,
            [event.target.name]: isApe ? correctInputValue(event.target.value) : event.target.value,
        };
        setSettings(stngs);
        event.preventDefault();

    };

    if (props.layout === 'row') {
        return (
            <Box>

                <FormControl focused={false}>
                    <FormLabel sx={{ }}>NFT #</FormLabel>
                    <InputOxap error={errors} name={'ape'} placeholder={' '} value={settings.ape ? settings.ape : ''} onChange={handleChange} />
                </FormControl>
                
                <TemplateSelect/>

                <FormControl focused={false}>
                    <FormLabel>Theme</FormLabel>
                    <RadioGroup row defaultValue="#FFD430" name='color' onChange={handleChange}>
                        <FormControlLabel value="#FFD430" control={<BpRadioOne />} label="" />
                        {
                            props.mobile ? <Box width='100px' />
                                : <>
                                    <FormControlLabel value="#000" control={<BpRadioTwo />} label="" />
                                    <FormControlLabel value="#fff" control={<BpRadioThree />} label="" />
                                </>

                        }

                    </RadioGroup>
                </FormControl>


                <FormControl sx={{ mr: '20px', mt: '20px' }} focused={false}>
                    <FormLabel>Pattern</FormLabel>
                    <RadioGroup row defaultValue="true" name='pattern' onChange={handleChange}>
                        <FormControlLabelMonkey value="true" control={<RadioMonkey />} label="ON" />
                        <FormControlLabelMonkey value="false" control={<RadioMonkey />} label="OFF" />
                    </RadioGroup>
                </FormControl>

                <FormControl sx={{ mr: '20px', mt: '20px' }} focused={false}>
                    <FormLabel> Collection Logo</FormLabel>
                    <RadioGroup row defaultValue="true" name='logo' onChange={handleChange}>
                        <FormControlLabelMonkey value="true" control={<RadioMonkey />} label="ON" />
                        <FormControlLabelMonkey value="false" control={<RadioMonkey />} label="OFF" />
                    </RadioGroup>

                    <ToggleSwitch logo={settings.logo}/>
                    
                </FormControl>

                {
                    props.desktop ?
                        <>
                            <FormControl sx={{ mr: '20px', mt: '20px' }} focused={false}>
                                <FormLabel sx={{ color: '#000000', textTransform: 'uppercase' }}> Monitor size</FormLabel>
                                <RadioGroup row defaultValue="monitor" name='display' onChange={handleChange}>
                                    <FormControlLabelMonkey value="monitor" control={<RadioMonitor />} label="" />
                                    <FormControlLabelMonkey value="laptop" control={<RadioLaptop />} label="" />
                                    <FormControlLabelMonkey value="widemonitor" control={<RadioWideMonitor />} label="" />
                                </RadioGroup>
                            </FormControl>

                        </>
                        : ''
                }
            </Box>
        )
    } else {
        return (
            <Box display='flex' flexDirection='column' justifyContent="space-between">
                {/* <Box mt='-20px'> */}
                <Box mt='30px'>
                    <FormControl focused={false}>
                        <FormLabel sx={{ color: '#000000' }}>APE #</FormLabel>
                        <InputOxap error={errors} name={'ape'} placeholder={''} value={settings.ape ? settings.ape : ''} onChange={handleChange} />
                    </FormControl>
                </Box>

                <Box mt='70px'>
                    <FormControl sx={{ mr: '20px' }} focused={false}>
                        <FormLabel sx={{ color: '#000000' }}> COLOR</FormLabel>
                        <RadioGroup row defaultValue="#FFD430" name='color' onChange={handleChange}>
                            <FormControlLabel value="#FFD430" control={<BpRadioOne />} label="" />
                            {/* <FormControlLabel value="#000" control={<BpRadioTwo/>} label=""/>
                            <FormControlLabel value="#fff" control={<BpRadioThree/>} label=""/> */}
                        </RadioGroup>
                    </FormControl>

                    <FormControl sx={{ mr: '20px' }} focused={false}>
                        <FormLabel sx={{ color: '#000000' }}> PATTERN</FormLabel>
                        <RadioGroup row defaultValue="true" name='pattern' onChange={handleChange}>
                            <FormControlLabelMonkey value="true" control={<RadioMonkey />} label="ON" />
                            <FormControlLabelMonkey value="false" control={<RadioMonkey />} label="OFF" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box mt='60px'>
                    <FormControl sx={{ mr: '20px' }} focused={false}>
                        <FormLabel sx={{ color: '#000000', textTransform: 'uppercase' }}> Collection Logo</FormLabel>
                        <RadioGroup row defaultValue="true" name='logo' onChange={handleChange}>
                            <FormControlLabelMonkey value="true" control={<RadioMonkey />} label="ON" />
                            <FormControlLabelMonkey value="false" control={<RadioMonkey />} label="OFF" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        )
    }
}

export function CustomizeBanner1(props: any) {
    const [settings, setSettings] = React.useState({
        ape: '',
        color: '#FFD430',
        pattern: 'true',
        logo: 'true',
    })


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const stngs = {
            ...settings,
            [event.target.name]: event.target.value,
        };
        setSettings(stngs);
        props.settingsChanged(stngs)
    };
    return (
        <Box mt={"20px"}>

            <FormControl focused={false} >
                <FormLabel sx={{ color: '#000000', mb: "-8px" }}>APE #</FormLabel>
                <InputOxap name={'ape'} placeholder={''} value={settings.ape ? settings.ape : ''} onChange={handleChange} />
            </FormControl>

            <FormControl sx={{ mr: '20px' }} focused={false} >
                <FormLabel sx={{ color: '#000000' }}> COLOR</FormLabel>
                <RadioGroup row defaultValue="#FFD430" name='color' onChange={handleChange}>
                    <FormControlLabel value="#FFD430" control={<BpRadioOne />} label="" />
                    <FormControlLabel value="#000" control={<BpRadioTwo />} label="" />
                    <FormControlLabel value="#fff" control={<BpRadioThree />} label="" />
                </RadioGroup>
            </FormControl>


            <FormControl sx={{ mr: '20px' }} focused={false}>
                <FormLabel sx={{ color: '#000000' }}> PATTERN</FormLabel>
                <RadioGroup row defaultValue="true" name='pattern' onChange={handleChange}>
                    <FormControlLabelMonkey value="true" control={<RadioMonkey />} label="ON" />
                    <FormControlLabelMonkey value="false" control={<RadioMonkey />} label="OFF" />
                </RadioGroup>
            </FormControl>

            <FormControl sx={{ mr: '20px' }} focused={false}>
                <FormLabel sx={{ color: '#000000', textTransform: 'uppercase' }}> Collection Logo</FormLabel>
                <RadioGroup row defaultValue="true" name='logo' onChange={handleChange}>
                    <FormControlLabelMonkey value="true" control={<RadioMonkey />} label="ON" />
                    <FormControlLabelMonkey value="false" control={<RadioMonkey />} label="OFF" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}


