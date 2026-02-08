import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaunchIcon from "@mui/icons-material/Launch";
import { ExperienceInfo, ExperienceType } from "./Info";

const rows: ExperienceType[] = [...ExperienceInfo];

export const Experience = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "50px 0",
        borderStyle: "solid",
        borderColor: "rgba(194, 224, 255, 0.08)",
        borderWidth: "0px 0px thin",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ m: "0 9%" }}>
        <Typography
          component="h1"
          sx={{
            color: "#ab0f50",
            fontSize: 30,
            fontWeight: "Prime",
            ml: 1.5,
          }}
        >
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
          }}
        >
          ー 経験 ー
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            sx={{
              width: "95%",
              m: "0 auto",
            }}
          >
            <div>
              {rows.map((row) => (
                <Accordion
                  key={row.title}
                  sx={{
                    mb: 1,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      sx={{
                        fontSize: 18,
                        "@media screen and (max-width: 420px)": {
                          fontSize: 14,
                        },
                      }}
                    >
                      {row.title}
                      {row.URL ? (
                        <a href={row.URL} style={{ textDecoration: "none" }}>
                          <LaunchIcon
                            sx={{
                              color: "#3399ff",
                              fontSize: 18,
                              pl: 1,
                              ":hover": {
                                color: "#ff9933",
                                cursor: "pointer",
                              },
                            }}
                          ></LaunchIcon>
                        </a>
                      ) : null}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {row.subExperiences ? (
                      row.subExperiences.map((sub, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            mb:
                              idx < (row.subExperiences?.length ?? 0) - 1
                                ? 3
                                : 0,
                            pb:
                              idx < (row.subExperiences?.length ?? 0) - 1
                                ? 3
                                : 0,
                            borderBottom:
                              idx < (row.subExperiences?.length ?? 0) - 1
                                ? "1px solid #e0e0e0"
                                : "none",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "Bold",
                              fontFamily: "Noto Sans",
                              fontSize: 16,
                              "@media screen and (max-width: 420px)": {
                                fontSize: 14,
                              },
                              p: "0 0 4px 0",
                            }}
                          >
                            {sub.days}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontFamily: "Noto Sans",
                              fontSize: 16,
                              "@media screen and (max-width: 420px)": {
                                fontSize: 14,
                              },
                              p: "0 0 8px 0",
                            }}
                          >
                            {sub.subtitle}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Noto Sans",
                              fontSize: 16,
                              "@media screen and (max-width: 420px)": {
                                fontSize: 14,
                              },
                            }}
                          >
                            {sub.content}
                          </Typography>
                        </Box>
                      ))
                    ) : (
                      <>
                        <Typography
                          sx={{
                            fontWeight: "Bold",
                            fontFamily: "Noto Sans",
                            fontSize: 16,
                            "@media screen and (max-width: 420px)": {
                              fontSize: 14,
                            },
                            p: "0 0 10px 0",
                          }}
                        >
                          {row.days}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Noto Sans",
                            fontSize: 16,
                            "@media screen and (max-width: 420px)": {
                              fontSize: 14,
                            },
                          }}
                        >
                          {row.content}
                        </Typography>
                        {row.content2 ? (
                          <Typography
                            sx={{
                              fontFamily: "Noto Sans",
                              fontSize: 16,
                              "@media screen and (max-width: 420px)": {
                                fontSize: 14,
                              },
                            }}
                          >
                            {row.content2}
                          </Typography>
                        ) : null}
                      </>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
              {/* <Accordion disabled>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Next... from 2024</Typography>
                                </AccordionSummary>
                            </Accordion> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
