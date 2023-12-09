import * as React from 'react';
import {styled} from '@mui/material/styles';
import * as yup from 'yup';
import {
    Box,
    InputBase,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import {mailChimpService} from '../../../services/mailchip.service'
import {useState} from "react";

let schema = yup.object().shape({
    email: yup.string().email().required(),
});

export const InputEmail = styled(InputBase)`
  padding-left: 22px;

  border: 1px solid rgb(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 140px;
  height: 50px;
  width: 100%;

  & .MuiInputBase-input {
    width: 100%;
    font-family: Sora, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    /* or 25px */
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;

    &::placeholder {
      color: #fff;
      opacity: 1;
    }
  }
;
`

export const ButtonSubmitEmail = styled(Button)`
  /* width: 186px; */
  height: 50px;
  background: #FFFFFF;
  border-radius: 140px;
  color: #000002;
  font-family: Sora, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  padding-left: 75px;
  padding-right: 75px;

  &:hover {
    background: linear-gradient(82.34deg, #BB29FF -5.56%, #15E2A8 105.13%);
    /* border-color: #0062cc; */
    box-shadow: none;
    color: #FFFFFF;
  }
`


export default function EmailSubmit() {
    const isMobile = useMediaQuery('(min-width:455px)');
    const [emailInput, setEmailInput] = useState('')
    const [emailErrors, setEmailErrors] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleInput = (event: any) => setEmailInput(event.target.value);
    const onKeyDown = async (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            await handleSubmit();
        }
    }

    const handleSubmit = async () => {
        setEmailErrors(false);
        const isValid = await schema.isValid({
            email: emailInput
        });
        if (!isValid) {
            return setEmailErrors(true);
        }
        await mailChimpService.subscribe(emailInput);
        handleClickOpen();
        setEmailInput('');
    }

    return (
        <Box>
            <Box sx={{position: 'relative', paddingBottom: '35px'}}>
                <InputEmail
                    placeholder="Email"
                    name='email'
                    value={emailInput}
                    onChange={handleInput}
                    onKeyDown={onKeyDown}
                    endAdornment={
                        isMobile &&
                        <ButtonSubmitEmail onClick={handleSubmit}>
                            Submit
                        </ButtonSubmitEmail>}
                />
                {emailErrors &&
                <Typography
                    color='error'
                    sx={{ml: "20px", position: "absolute", bottom: "0"}}>
                    Invalid email format
                </Typography>}
            </Box>
            <Box display={isMobile ? 'none' : 'block'}>
                <ButtonSubmitEmail sx={{width: "100%", mt: 2}} onClick={handleSubmit}>
                    Submit
                </ButtonSubmitEmail>
            </Box>

            <DialogNFT
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{color: '#FFFFFF'}}>
                    {"Your email was successfully sent."}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{color: '#FFFFFF'}} id="alert-dialog-description">
                        You will be placed on the list of expectations and one of the first to receive our offer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </DialogNFT>
        </Box>
    );
}


const DialogNFT = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 16px;
    background-color: #161616;
  }
;
`
