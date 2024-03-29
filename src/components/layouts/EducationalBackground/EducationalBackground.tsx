import * as React from 'react';
import { Box, Typography, Grid, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { EducationalBackGroundInfo } from "./Info";

const rows = [...EducationalBackGroundInfo]

export const EducationalBackground = () => {
    return (
        <Box sx={{
            width: "100%",
            p: "50px 0",
            borderStyle: "solid",
            borderColor: "rgba(194, 224, 255, 0.08)",
            borderWidth: "0px 0px thin",
            backgroundColor: "snow",
        }}>
            <Box sx={{ m: "0 9%" }}>
                <Typography
                    component="h1"
                    sx={{
                        color: "#ab0f50",
                        fontSize: 30,
                        fontWeight: "Prime",
                        ml: 1.5,
                    }}>
                    Educational Background
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: "#gray",
                        fontSize: 14,
                        fontWeight: "Light",
                        ml: 18,
                        mb: 5,
                        "@media screen and (max-width: 434px)": {
                            ml: 7,
                        },
                    }}>
                    ー 学歴 ー
                </Typography>
            </Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{
                        width: "92%",
                        m: "0 auto",
                    }}>
                        <TableContainer component={Paper}>
                            <Table
                                sx={{
                                    maxWidth: 1000,
                                    backgroundColor: "#fff",
                                    color: "#fff"
                                }}
                                aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{
                                            color: "#000",
                                            fontWeight: "500",
                                            fontSize: 16,
                                            "@media screen and (max-width: 420px)": {
                                                fontSize: 14,
                                            },
                                        }}>年/月</TableCell>
                                        <TableCell align="left" sx={{
                                            color: "#000",
                                            fontWeight: "500",
                                            fontSize: 16,
                                            "@media screen and (max-width: 420px)": {
                                                fontSize: 14,
                                            },
                                        }}>学校</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.Dates}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row"
                                                sx={{
                                                    fontSize: 16,
                                                    "@media screen and (max-width: 420px)": {
                                                        fontSize: 14,
                                                    },
                                                }}>
                                                {row.Dates}
                                            </TableCell>
                                            <TableCell align="left"
                                                sx={{
                                                    color: "#000",
                                                    fontSize: 16,
                                                    "@media screen and (max-width: 420px)": {
                                                        fontSize: 14,
                                                    },
                                                }}>
                                                {row.schools}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
