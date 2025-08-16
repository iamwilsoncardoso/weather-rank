import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import weather_bg from "assets/img/test.gif";
import { Box, Stack } from "@mui/material";
import skiing_icon from "assets/img/icons8-skiing-100.png";
import surfing_icon from "assets/img/icons8-surfing-100.png";
import indoorSightseeing_icon from "assets/img/icons8-indoors-100.png";
import outdoorSightseeing_icon from "assets/img/icons8-sightseeing-100.png";
import { IActivityRanking } from "interfaces/IActivityRanking";
import RankIcon from "components/common/RankIcon/RankIcon";
import ScoringSystem from "components/common/ScoringSystem/ScoringSystem";

export default function RankingCard({
  rankings,
  loading,
  error,
}: {
  rankings: IActivityRanking | null;
  loading: boolean;
  error: any;
}) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height={210}
        alt="Could not load icon"
        image={weather_bg}
      />
      <CardContent>
        <Box flexDirection={"row"} justifyItems={"center"}>
          <ScoringSystem />
        </Box>
        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={4}
          padding={2}
        >
          <RankIcon
            icon={skiing_icon}
            loading={loading}
            ranking={rankings?.skiing}
            tooltipTitle="Skiing Rank"
          />
          <RankIcon
            icon={surfing_icon}
            loading={loading}
            ranking={rankings?.surfing}
            tooltipTitle="Surfing Rank"
          />
          <RankIcon
            icon={indoorSightseeing_icon}
            loading={loading}
            ranking={rankings?.indoorSightseeing}
            tooltipTitle="Indoor Sightseeing Rank"
          />
          <RankIcon
            icon={outdoorSightseeing_icon}
            loading={loading}
            ranking={rankings?.outdoorSightseeing}
            tooltipTitle="Outdoor Sightseeing Rank"
          />
        </Stack>
        <Typography
          textAlign={"center"}
          variant="caption"
          component="div"
          sx={{ flexGrow: 1, color: "red" }}
        >
          {error ? `Error! ${error.message}` : ""}
        </Typography>
      </CardContent>
    </Card>
  );
}
