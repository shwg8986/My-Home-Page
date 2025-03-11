import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Journals, Conferences, Exhibitions } from "./Info";

const journals = [...Journals];
const conferences = [...Conferences];
const exhibitions = [...Exhibitions];
export const Research = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "50px 0",
        borderStyle: "solid",
        borderColor: "rgba(194, 224, 255, 0.08)",
        borderWidth: "0px 0px thin",
        backgroundColor: "snow",
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
          }}
        >
          ー 研究 ー
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            sx={{
              width: "95%",
              m: "20px auto 70px",
            }}
          >
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table
                sx={{
                  maxWidth: 1000,
                  backgroundColor: "#fff",
                  color: "#fff",
                }}
                aria-label="simple table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontFamily: "Times New Roman",
                        fontWeight: 800,
                        color: "#000",
                        fontSize: 20,
                        "@media screen and (max-width: 420px)": {
                          fontSize: 18,
                        },
                      }}
                    >
                      Journal article（学術論文）
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {journals.map((journal, index) => (
                    <TableRow
                      key={journal.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontWeight: "100",
                          fontFamily: "Noto Sans",
                          fontSize: 16,
                          "@media screen and (max-width: 420px)": {
                            fontSize: 14,
                          },
                        }}
                      >
                        {`${journal.title}`}
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
          <Grid
            item
            sx={{
              width: "95%",
              m: "0px auto 70px",
            }}
          >
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table
                sx={{
                  maxWidth: 1000,
                  backgroundColor: "#fff",
                  color: "#fff",
                }}
                aria-label="simple table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontFamily: "Times New Roman",
                        fontWeight: 800,
                        color: "#000",
                        fontSize: 20,
                        "@media screen and (max-width: 420px)": {
                          fontSize: 18,
                        },
                      }}
                    >
                      Conference papers（学会論文）
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {conferences.map((conference, index) => (
                    <TableRow
                      key={conference.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontWeight: 100,
                          fontFamily: "Noto Sans",
                          fontSize: 16,
                          "@media screen and (max-width: 420px)": {
                            fontSize: 14,
                          },
                        }}
                      >
                        {`${conference.title}`}
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
          <Grid
            item
            sx={{
              width: "95%",
              m: "0px auto 70px",
            }}
          >
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table
                sx={{
                  maxWidth: 1000,
                  backgroundColor: "#fff",
                  color: "#fff",
                }}
                aria-label="simple table"
                stickyHeader
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontFamily: "Times New Roman",
                        fontWeight: 800,
                        color: "#000",
                        fontSize: 20,
                        "@media screen and (max-width: 420px)": {
                          fontSize: 18,
                        },
                      }}
                    >
                      Demo exhibition（デモ展示）
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exhibitions.map((exhibition, index) => (
                    <TableRow
                      key={exhibition.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontWeight: 100,
                          fontFamily: "Noto Sans",
                          fontSize: 16,
                          "@media screen and (max-width: 420px)": {
                            fontSize: 14,
                          },
                        }}
                      >
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

      {/* <Container>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    textAlign: "center",
                    mb: 3,
                    fontSize: 22,
                    "@media screen and (max-width: 420px)": {
                        fontSize: 18,
                    },
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
                                m: "0 0px 10px 0px",
                                borderRadius: 90,
                                textAlign: "center",
                                width: 200,
                                height: 50,
                                "@media screen and (max-width: 420px)": {
                                    width: 165,
                                    height: 50,
                                },
                            }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        sx={{
                                            fontWeight: 300,
                                            fontSize: 16,
                                            m: 0,
                                            "@media screen and (max-width: 420px)": {
                                                fontSize: 14,
                                            },
                                        }}>
                                        {word}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container> */}
    </Box>
  );
};
