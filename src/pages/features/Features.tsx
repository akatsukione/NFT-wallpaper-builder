import * as React from 'react';
import Box from '@mui/material/Box';
import CardDrip from '../../components/cardDrip/CardDrip'


export default function StagesFeatures(
    {articleTitle, stepsFeatures} : any
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
                {stepsFeatures.map((step:any, index: number) => (

                    <CardDrip 
                        key = {index}
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