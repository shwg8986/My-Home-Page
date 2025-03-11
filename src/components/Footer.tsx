import React from "react";
import { Box, Typography } from '@mui/material';

export const Footer = () => {
    const Copyright: string = " Copyright © "
    const Name: string = " Shogo SHIMADA.　"
    const Right: string = " All rights reserved."
    return (
        <footer>
            <Box sx={{
                width: "100%",
                padding: "60px 0",
                backgroundColor: "#0A1929",
            }}>
                <Typography component="p"
                    sx={{
                        color: "#B2BAC2",
                        fontSize: 14,
                        fontWeight: "Light",
                        textAlign: "center",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        "@media screen and (max-width: 300px)": {
                            fontSize: 12,
                        }
                    }}
                >
                    {Copyright} {new Date().getFullYear()} {Name}
                </Typography>
                <Typography component="p"
                    sx={{
                        color: "#B2BAC2",
                        fontSize: 14,
                        fontWeight: "Light",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        textAlign: "center",
                        "@media screen and (max-width: 300px)": {
                            fontSize: 12,
                        }
                    }}
                >
                    {Right}
                </Typography>
            </Box>
        </footer>
    )
}
