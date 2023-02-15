import * as React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Publications, ResearchWords } from "./Info";
import { ResearchDetailSlide } from "./ResearchDetailSlide";
import { normalize } from 'path';

const words: string[] = [...ResearchWords]
const publications = [...Publications]
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
                    Research Contents
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: "#gray",
                        fontSize: 14,
                        fontWeight: "Light",
                        ml: 12,
                        mb: 5,
                    }}>
                    ー 研究内容 ー
                </Typography>
            </Box>
            <Box sx={{
                width: "900px",
                m: "0 auto",
                mt: 9,
                mb: 9,
                p: 1,
                boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .2)",

                "@media screen and (max-width: 1000px)": {
                    width: "90%",
                    mt: 8,
                },
            }}>
                <ResearchDetailSlide />
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
                                width: 150,
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
