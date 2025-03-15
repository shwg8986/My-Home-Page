import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { EducationalBackGroundInfo } from "./Info";

export const EducationalBackground = () => {
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
          Educational Background
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: "gray",
            fontSize: 14,
            fontWeight: "Light",
            ml: 18,
            mb: 5,
            "@media screen and (max-width: 434px)": {
              ml: 7,
            },
          }}
        >
          ー 学歴 ー
        </Typography>
      </Box>
      <Container>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {EducationalBackGroundInfo.map((row, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                color="textSecondary"
                sx={{
                  fontSize: 16,
                  "@media screen and (max-width: 420px)": {
                    fontSize: 14,
                  },
                }}
              >
                {row.Dates}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                {index !== EducationalBackGroundInfo.length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontSize: 16,
                  color: "#000",
                  "@media screen and (max-width: 420px)": {
                    fontSize: 14,
                  },
                }}
              >
                {row.schools}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};
