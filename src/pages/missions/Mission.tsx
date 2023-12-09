import * as React from 'react';
import Box from '@mui/material/Box';

import CardMission from './cardMission';

export default function Mission(
    {articleTitle, stepsMission} : any
) {
    return (
        <Box>
             <Box 
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ 
                mb: 3,
                typography: 'h6',
                fontWeight: '500',  
                }}>
                {articleTitle}    
            </Box>
            <Box>
                {stepsMission.map((step:any, index: number) => (

                    <CardMission 
                        key={index}
                        direction = {step["direction"]}
                        url = {step["url"]}
                        sectionTitle = {step["sectionTitle"]}
                        featureName = {step["featureName"]}
                        featureDescription = {step["featureDescription"]}
                    />

                ))}

            </Box>

        </Box>
    )
}
