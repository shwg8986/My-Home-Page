import { Box, Typography, Grid } from "@mui/material";
import { IconButton } from '@mui/material';
import { Instagram, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import { pink, blue } from '@mui/material/colors';

export const Link = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <Box sx={{
      width: "100%",
      p: "50px 0 20px 0",
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
            Link
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#gray",
              fontSize: 14,
              fontWeight: "Light",
              ml: 0.5,
            }}>
            ー リンク ー
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" spacing={3} sx={{ mt: 4 }}>
        <Grid item>
          <IconButton onClick={() => handleLinkClick('https://www.instagram.com/shwg_2.0.929/')}>
            <Instagram sx={{
              fontSize: 40,
              color: pink[500]
            }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => handleLinkClick('https://twitter.com/au_tr_')}>
            <Twitter sx={{
              fontSize: 40,
              color: blue[500]
            }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => handleLinkClick('https://www.linkedin.com/in/shimada-shogo/')}>
            <LinkedIn sx={{ fontSize: 40, color: blue[900] }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => handleLinkClick('https://github.com/shwg8986')}>
            <GitHub sx={{
              fontSize: 40,
              color: "#000"
            }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box >
  )
}
