import { Grid, IconButton, Typography } from "@mui/material";
import RankingCard from "components/common/RankingCard/RankingCard";
import PageContainer from "components/layout/PageContainer/PageContainer";
import PageWrapper from "components/layout/PageWrapper/PageWrapper";
import { IActivityRanking } from "interfaces/IActivityRanking";
import { ChangeEvent, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { IDailyWeatherQueryResponse } from "interfaces/IDailyWeatherQueryResponse";
import { calculateRankings } from "services/calculateRankings";
import CustomTextField from "components/common/CustomTextField/CustomTextField";
import SearchIcon from "@mui/icons-material/Search";
import { GET_DAILY_WEATHER_DATA } from "graphql/queries";

export default function LandingPage() {
  const [rankings, setRankings] = useState<IActivityRanking | null>(null);

  const [city, setCity] = useState<string>("");
  const [errorValidation, setErrorValidation] = useState<string | null>(null);

  const [getDailyWeather, { loading, error, data }] =
    useLazyQuery<IDailyWeatherQueryResponse>(GET_DAILY_WEATHER_DATA);

  useEffect(() => {
    if (data?.getDailyWeather) {
      setRankings(calculateRankings(data?.getDailyWeather));
    }
  }, [data]);

  const handleCity = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCity(event.target.value);
    if (errorValidation && event.target.value.trim()) {
      setErrorValidation(null);
    }
  };

  const handleSearch = () => {
    if (!city.trim()) {
      setErrorValidation("Please enter a city name");
      return;
    }
    getDailyWeather({ variables: { city: city } });
  };

  return (
    <PageWrapper>
      <PageContainer title="Rank your City/Town" maxWidth="xs">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <RankingCard loading={loading} error={error} rankings={rankings} />
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid container spacing={1}>
              <Grid size={{ xs: 10, sm: 10, md: 10, lg: 10 }}>
                <CustomTextField
                  onChange={handleCity}
                  label="Please enter your city"
                />
              </Grid>

              <Grid size={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: "#D4A017",
                    borderRadius: 2,
                    "&:hover": {
                      bgcolor: "#B38915",
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease",
                    },
                  }}
                  onClick={handleSearch}
                  size="large"
                  aria-label="delete"
                >
                  <SearchIcon sx={{ color: "#FFF" }} fontSize="large" />
                </IconButton>
              </Grid>

              <Typography
                textAlign={"center"}
                variant="caption"
                component="div"
                sx={{ flexGrow: 1, color: "red" }}
              >
                {errorValidation}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </PageWrapper>
  );
}
