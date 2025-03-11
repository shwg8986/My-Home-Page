import * as React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { ProgrammingInfo, ProgrammingType } from "./Info";

const rows: ProgrammingType[] = [...ProgrammingInfo]

export const Programming = () => {
    return (
        <Box sx={{
            width: "100%",
            p: "50px 0",
            borderStyle: "solid",
            borderColor: "rgba(194, 224, 255, 0.08)",
            borderWidth: "0px 0px thin",
            backgroundColor: "#fff",
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
                    Programming
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: "#gray",
                        fontSize: 14,
                        fontWeight: "Light",
                        ml: 2.5,
                        mb: 5,
                    }}>
                    ー プログラミング関連 ー
                </Typography>
            </Box>
            <Container>
                <Grid container>
                    <Grid item sx={{
                        width: "100%",
                        m: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        {rows.map((row) => (
                            <Card key={row.name} sx={{
                                width: 200,
                                height: 400,
                                // width: 400,
                                // height: 200,
                                m: "0px 10px 30px 10px",
                                borderRadius: 7,
                                // backgroundColor: "transparent",
                                backgroundColor: "snow",
                            }}>
                                <CardMedia
                                    component="img"
                                    height="180"

                                    image={`/static/images/cards/${row.name}.png`}
                                    alt={row.name}
                                    sx={{
                                        pt: 2,
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                    }}>
                                        {row.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        p: 1,
                                        backgroundColor: "#FFF6FA",
                                    }}>
                                        {row.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
