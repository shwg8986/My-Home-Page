import { Box, Typography, Container, Grid, Chip } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import CodeIcon from "@mui/icons-material/Code";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import NightlightIcon from "@mui/icons-material/Nightlight";

const hobbies = [
  { label: "ピザ・ラーメン巡り", icon: <LocalPizzaIcon /> },
  { label: "国内/海外旅行", icon: <FlightTakeoffIcon /> },
  { label: "ジム", icon: <FitnessCenterIcon /> },
  { label: "ワイン", icon: <WineBarIcon /> },
  { label: "テニス・バドミントン", icon: <SportsTennisIcon /> },
  { label: "野球観戦", icon: <SportsBaseballIcon /> },
  { label: "夜景・海を眺めること", icon: <NightlightIcon /> },
];

export const AboutMe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "50px 0 60px 0",
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
          About Me
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: "#gray",
            fontSize: 14,
            fontWeight: "Light",
            ml: 4,
            mb: 1,
          }}
        >
          ー 自己紹介 ー
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ width: "95%", m: "0 auto" }}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                mb: 2,
              }}
            >
              <ScienceIcon sx={{ color: "#ab0f50", mt: "3px" }} />
              <Typography
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: 16,
                  lineHeight: 1.9,
                  "@media screen and (max-width: 420px)": {
                    fontSize: 14,
                  },
                }}
              >
                大学院では、VR &times;
                人間情報学の分野で研究に取り組んでおりました。現在は量子コンピューティングの研究をしています。
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                mb: 2,
              }}
            >
              <CodeIcon sx={{ color: "#3399ff", mt: "3px" }} />
              <Typography
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: 16,
                  lineHeight: 1.9,
                  "@media screen and (max-width: 420px)": {
                    fontSize: 14,
                  },
                }}
              >
                リアルタイムに視覚的なフィードバックが得られるものが好きで、開発ではフロントエンド側の実装を特に楽しんでいます。
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                mb: 4,
              }}
            >
              <ExploreIcon sx={{ color: "#ff9933", mt: "3px" }} />
              <Typography
                sx={{
                  fontFamily: "Noto Sans",
                  fontSize: 16,
                  lineHeight: 1.9,
                  "@media screen and (max-width: 420px)": {
                    fontSize: 14,
                  },
                }}
              >
                今後は3Dモデリングの知識も身につけていきたいと考えています。
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: "Noto Sans",
                fontSize: 15,
                fontWeight: 500,
                color: "#555",
                mb: 2,
              }}
            >
              Hobbies
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.2,
              }}
            >
              {hobbies.map((hobby) => (
                <Chip
                  key={hobby.label}
                  icon={hobby.icon}
                  label={hobby.label}
                  variant="outlined"
                  sx={{
                    fontSize: 14,
                    fontFamily: "Noto Sans",
                    borderColor: "#ddd",
                    color: "#333",
                    "& .MuiChip-icon": {
                      color: "#ab0f50",
                    },
                    "@media screen and (max-width: 420px)": {
                      fontSize: 12,
                    },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
