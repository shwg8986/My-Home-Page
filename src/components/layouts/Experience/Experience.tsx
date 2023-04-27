import * as React from 'react';
import { Box, Typography, Link, Container, Accordion, AccordionDetails, AccordionSummary, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExperienceInfo, ExperienceType } from "./Info";

const rows: ExperienceType[] = [...ExperienceInfo]

export const Experience = () => {
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
                    Experience
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: "#gray",
                        fontSize: 14,
                        fontWeight: "Light",
                        ml: 7,
                        mb: 5,
                    }}>
                    ー 経験 ー
                </Typography>
            </Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{
                        width: "90%",
                        m: "0 auto",
                    }}>
                        <div>
                            {rows.map((row) => (
                                <Accordion key={row.title}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        {row.URL ?
                                            (<Link sx={{
                                                color: "#3399ff",
                                                fontWeight: "#bold",
                                                textDecoration: "none",
                                                fontSize: 20,
                                                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                                                ":hover": { color: "#ff9933", cursor: "pointer" },
                                            }}
                                                href={row.URL}
                                                target="_blank">{row.title}
                                            </Link>
                                            ) : (
                                                <Typography sx={{ fontSize: 20, }}>{row.title}</Typography>
                                            )}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {row.days}
                                        </Typography>
                                        <Typography>
                                            {row.content}
                                        </Typography>
                                        {row.content2 ? (
                                            <Typography>
                                                {row.content2}
                                            </Typography>) : null}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Accordion disabled>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Getting ready... from 2024</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
