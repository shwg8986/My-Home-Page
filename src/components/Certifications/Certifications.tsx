import * as React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CertificationsInfo } from "./Info";

const rows = [...CertificationsInfo];
export const Certifications = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "50px 0",
        mb: 8,
        borderStyle: "solid",
        borderColor: "rgba(194, 224, 255, 0.08)",
        borderWidth: "0px 0px thin",
        backgroundColor: "#fff",
      }}
    >
      <Grid sx={{ flexGrow: 1, mb: 5 }} container spacing={3}>
        <Grid
          item
          sx={{
            m: "0 9%",
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#ab0f50",
              fontSize: 30,
              fontWeight: "Prime",
              ml: 1.5,
            }}
          >
            Certifications
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#gray",
              fontSize: 14,
              fontWeight: "Light",
              ml: 6,
            }}
          >
            ー 資格など ー
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            sx={{
              width: "95%",
              m: "0 auto",
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
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: 16,
                        p: "16px",
                        "@media screen and (max-width: 420px)": {
                          fontSize: 14,
                        },
                      }}
                    >
                      年/月
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: 16,
                        "@media screen and (max-width: 420px)": {
                          fontSize: 14,
                        },
                      }}
                    >
                      資格/試験
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.Dates}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          fontSize: 16,
                          fontWeight: "normal",
                          "@media screen and (max-width: 420px)": {
                            fontSize: 14,
                          },
                        }}
                      >
                        {row.Dates}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          color: "#000",
                          fontSize: 16,
                          fontWeight: "normal",
                          "@media screen and (max-width: 420px)": {
                            fontSize: 14,
                          },
                        }}
                      >
                        {row.Certifications}
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
  );
};
