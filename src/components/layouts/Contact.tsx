import { Box, Typography, Grid } from "@mui/material";

export const Contact = () => {
    return (
        <Box sx={{
            width: "100%",
            p: "50px 0 70px 0",
            borderStyle: "solid",
            borderColor: "rgba(194, 224, 255, 0.08)",
            borderWidth: "0px 0px thin",
            backgroundColor: "snow",
        }}>
            <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                <Grid item sx={{
                    m: "0 9%",
                }}>
                    <Typography
                        component="h1"
                        sx={{
                            color: "#ab0f50",
                            fontSize: 30,
                            fontWeight: "Prime",
                            ml: 1.5,
                        }}>
                        Mail / Contact
                    </Typography>
                    <Typography
                        component="h2"
                        sx={{
                            color: "#gray",
                            fontSize: 14,
                            fontWeight: "Light",
                            ml: 8,
                        }}>
                        ー 連絡先 ー
                    </Typography>
                </Grid>
            </Grid>
            <Typography
                component="p"
                sx={{
                    m: "0 10%",
                    fontSize: 20,
                    fontWeight: "normal",
                    textAlign: "center",
                    mt: 7,
                }}>
                shimada-shogo[at]ed.tmu.ac.jp
            </Typography>
            <Typography
                component="p"
                sx={{
                    m: "0 10%",
                    fontSize: 16,
                    fontWeight: "light",
                    textAlign: "center",
                    mt: 1,
                }}>
                ※[at]の部分を@に変えてください。
            </Typography>
        </Box>
    )
}
