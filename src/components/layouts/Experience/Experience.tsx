import * as React from 'react';
import { Box, Typography, Link, Container, Accordion, AccordionDetails, AccordionSummary, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
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
                                        <Typography
                                            sx={{
                                                fontSize: 18,
                                            }}>
                                            {row.title}
                                            {row.URL ? (
                                                <a href={row.URL} target="_blank" style={{ textDecoration: 'none' }}>
                                                    <LaunchIcon
                                                        sx={{
                                                            color: "#3399ff",
                                                            fontSize: 18,
                                                            pl: 1,
                                                            ":hover": {
                                                                color: "#ff9933",
                                                                cursor: "pointer"
                                                            }
                                                        }}
                                                    >
                                                    </LaunchIcon>
                                                </a>
                                            ) : null}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography
                                            sx={{
                                                fontWeight: "Bold",
                                                fontFamily: 'Noto Sans',
                                                p: "0 0 10px 0",
                                            }}>
                                            {row.days}
                                        </Typography>
                                        <Typography>
                                            {row.content}
                                        </Typography>
                                        {row.content2 ? (
                                            <Typography>
                                                {row.content2}
                                            </Typography>) : null
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Accordion disabled>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Next... from 2024</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}
