import * as React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Publications, Exhibitions, ResearchWords } from "./Info";
import { normalize } from 'path';

const words: string[] = [...ResearchWords]
const publications = [...Publications]
const exhibitions = [...Exhibitions]
export const Research = () => {
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
                    Academic Research
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: "#gray",
                        fontSize: 14,
                        fontWeight: "Light",
                        ml: 14,
                        mb: 5,
                    }}>
                    ー 研究 ー
                </Typography>
            </Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{
                        width: "95%",
                        m: "20px auto 70px",
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
                                        <TableCell sx={{ fontFamily: "Times New Roman", fontWeight: 800, color: "#000", fontSize: 24, }}>Publications and Conferences</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {publications.map((publication, index) => (
                                        <TableRow
                                            key={publication.title}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row"
                                                sx={{
                                                    fontSize: 18,
                                                    fontWeight: 300,
                                                    fontFamily: 'Times New Roman',
                                                }}>
                                                {`${publication.title}`}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{
                        width: "95%",
                        m: "0px auto 70px",
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
                                        <TableCell sx={{ fontFamily: "Times New Roman", fontWeight: 800, color: "#000", fontSize: 24, }}>Demo Exhibition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {exhibitions.map((exhibition, index) => (
                                        <TableRow
                                            key={exhibition.title}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row"
                                                sx={{
                                                    fontSize: 18,
                                                    fontWeight: 300,
                                                    fontFamily: 'Times New Roman',
                                                }}>
                                                {`${exhibition.title}`}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    textAlign: "center",
                    mb: 3,
                    fontSize: 22,
                }}>
                    研究キーワード
                </Typography>

                <Grid container>
                    <Grid item sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        {words.map((word) => (
                            <Card key={word} sx={{
                                width: 200,
                                height: 50,
                                m: "0 5px 10px 5px",
                                borderRadius: 90,
                                textAlign: "center",
                            }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: 16,
                                    }}>
                                        {word}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}
