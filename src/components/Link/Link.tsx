import { Box, Typography, Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import {
  Instagram,
  X,
  LinkedIn,
  GitHub,
  ThreeDRotation,
} from "@mui/icons-material";
import { pink, blue } from "@mui/material/colors";

export const Link = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  function adjustLogoSize(
    logoId: string,
    smallSize: number,
    defaultSize: number
  ): void {
    const logo: HTMLElement | null = document.getElementById(logoId);
    if (logo) {
      if (window.innerWidth <= 420) {
        logo.setAttribute("width", `${smallSize}`);
        logo.setAttribute("height", `${smallSize}`);
      } else {
        logo.setAttribute("width", `${defaultSize}`);
        logo.setAttribute("height", `${defaultSize}`);
      }
    }
  }

  window.addEventListener("load", function () {
    adjustLogoSize("orcid-logo", 30, 40);
    adjustLogoSize("researchGate-logo", 30, 40);
  });

  window.addEventListener("resize", function () {
    adjustLogoSize("orcid-logo", 30, 40);
    adjustLogoSize("researchGate-logo", 30, 40);
  });

  return (
    <Box
      sx={{
        width: "100%",
        p: "20px 0 20px 0",
        mb: 10,
        borderStyle: "solid",
        borderColor: "rgba(194, 224, 255, 0.08)",
        borderWidth: "0px 0px thin",
        backgroundColor: "#fff",
      }}
    >
      <Grid sx={{ flexGrow: 1 }} container spacing={3}>
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
            Link
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#gray",
              fontSize: 14,
              fontWeight: "Light",
              ml: 0.5,
            }}
          >
            ー リンク ー
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ pt: 3, pb: 6, width: "95%", margin: "0 auto" }}
      >
        <Grid item>
          <IconButton
            onClick={() => handleLinkClick("https://shimada-web3d.com/")}
          >
            <ThreeDRotation
              sx={{
                fontSize: 40,
                "@media screen and (max-width: 420px)": {
                  fontSize: 30,
                },
                color: "teal",
              }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() =>
              handleLinkClick("https://www.instagram.com/shwg_sh_")
            }
          >
            <Instagram
              sx={{
                fontSize: 40,
                "@media screen and (max-width: 420px)": {
                  fontSize: 30,
                },
                color: pink[500],
              }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => handleLinkClick("https://x.com/shwg_360")}>
            <X
              sx={{
                fontSize: 40,
                "@media screen and (max-width: 420px)": {
                  fontSize: 30,
                },
                color: "black",
              }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() =>
              handleLinkClick("https://www.linkedin.com/in/shimada-shogo/")
            }
          >
            <LinkedIn
              sx={{
                fontSize: 40,
                "@media screen and (max-width: 420px)": {
                  fontSize: 30,
                },
                color: blue[900],
              }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => handleLinkClick("https://github.com/shwg8986")}
          >
            <GitHub
              sx={{
                fontSize: 40,
                "@media screen and (max-width: 420px)": {
                  fontSize: 30,
                },
                color: "#000",
              }}
            />
          </IconButton>
        </Grid>
        {/* <Grid item>
          <IconButton onClick={() => handleLinkClick('https://orcid.org/0000-0002-4264-6753')}>
            <img id="orcid-logo" alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_64x64.png" width="40" height="40"
            />
          </IconButton>
        </Grid> */}
        <Grid item>
          <IconButton
            onClick={() =>
              handleLinkClick(
                "https://www.researchgate.net/profile/Shogo-Shimada-2"
              )
            }
          >
            <img
              id="researchGate-logo"
              alt="Research Gate Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ResearchGate_icon_SVG.svg/1280px-ResearchGate_icon_SVG.svg.png"
              width="40"
              height="40"
            />
          </IconButton>
        </Grid>
        {/* <Grid item>
          <IconButton onClick={() => handleLinkClick('https://oncyber.io/shwgallery_')}>
            <img id="oncyber-logo" alt="OnCyber Logo" src="https://styles.redditmedia.com/t5_4rq3b2/styles/communityIcon_j15f3tm4jrb71.png"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
              }} />
          </IconButton>
        </Grid> */}
      </Grid>
    </Box>
  );
};
