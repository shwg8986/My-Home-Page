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
import { AwardsInfo } from "./Info";
import { ScrollableBox } from "../../ui-elements/ScrollableBox";

const rows = [...AwardsInfo];

export const Awards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "30px 0 70px 0",
        mb: 5,
        borderStyle: "solid",
        borderColor: "rgba(194, 224, 255, 0.08)",
        borderWidth: "0px 0px thin",
        backgroundColor: "snow",
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
            Awards
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#gray",
              fontSize: 14,
              fontWeight: "Light",
              ml: 4,
            }}
          >
            ー 受賞 ー
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
            <ScrollableBox maxHeight={400}>
              <TableContainer component={Paper}>
                <Table
                  sx={{
                    maxWidth: 1000,
                    backgroundColor: "#fff",
                  }}
                  aria-label="simple table"
                  stickyHeader
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
                        年
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
                        受賞内容
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.Date + row.Award}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                          {row.Date}
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
                          {row.Award}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ScrollableBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
