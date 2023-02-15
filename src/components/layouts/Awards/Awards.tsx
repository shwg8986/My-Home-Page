import { Box, Typography, Grid } from "@mui/material";
import { AwardsInfo } from "./Info";

const rows: string[] = [...AwardsInfo]
export const Awards = () => {
    return (
        <Box sx={{
            width: "100%",
            p: "10px 0 20px 0",
            mb: 8,
            borderStyle: "solid",
            borderColor: "rgba(194, 224, 255, 0.08)",
            borderWidth: "0px 0px thin",
            backgroundColor: "#fff",
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
                        Awards
                    </Typography>
                    <Typography
                        component="h2"
                        sx={{
                            color: "#gray",
                            fontSize: 14,
                            fontWeight: "Light",
                            ml: 4,
                        }}>
                        ー 表彰 ー
                    </Typography>
                </Grid>
            </Grid>

            {rows.map((row) => (
                <Typography key={row}
                    component="p"
                    sx={{
                        m: "0 10%",
                        fontSize: 20,
                        fontWeight: "normal",
                        textAlign: "center",
                        mt: 5,
                    }}>
                    {row}
                </Typography>
            ))}
        </Box>
    )
}
