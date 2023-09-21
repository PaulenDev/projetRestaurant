import React from 'react';
import {Box, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function LinkdInIcon() {
    return null;
}

const Footer = () => {
    return (
        <>
        <Box sx={{textAlign:'center',
            bgcolor:"#1A1A19",
            color:"#FFFF",
            p:3}}
        >
            <Box sx={{my:3, "& svg":{
                fontSize: "60px",
                cursor: "pointer",
                mr:2,
                },
                "& svg:hover":{
                    color:'goldenrod',
                    transform:'translateX(5px)',
                    transition:'all 400ms',
                }
            }}>
                {/* icons */}
                <InstagramIcon/>
                <LinkedInIcon/>
                <FacebookIcon/>
                <YouTubeIcon/>
            </Box>
            <Typography
                variant="h5" sx={{"@media(max-width:600px)":{
                fontSize:"1rem",
                }}}>
                All Right Reserved &copy; Paul Madeleine
            </Typography>
        </Box>
        </>
    )
}
export default Footer
