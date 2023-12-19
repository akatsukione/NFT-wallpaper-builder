import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

export default function VerticalLinearStepper({ articleTitle, steps }: any) {
    return (
        <Box>
            <Box sx={{ 
                    mb: 2, 
                    ml: 6,  
                    typography: 'h6',
                    fontWeight: '500', 
                    }}>
                { articleTitle }      
            </Box>
            <Stepper orientation="vertical">
                {steps.map((step:any, index: number) => (
                    <Step key={index} active={true} >
                        <StepLabel>
                            <Box sx={{ 
                                    ml: 2,  
                                    typography: 'h6',
                                    fontSize: 16,
                                    textDecoration: 'underline',
                                    }}>
                                {step.label}      
                            </Box>
                        </StepLabel>
                        <StepContent>
                            <Box sx={{ 
                                    ml: 2,  
                                    typography: 'body',
                                    fontSize: 14,
                                    whiteSpace: 'pre-line',
                                    color: 'text.secondary',
                                    // lineHeight: '1'
                                    }}>
                                {step.description}      
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
