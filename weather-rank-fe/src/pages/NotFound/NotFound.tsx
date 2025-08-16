import { Box, Button, Grid } from "@mui/material";
import PageContainer from "components/layout/PageContainer/PageContainer";
import PageWrapper from "components/layout/PageWrapper/PageWrapper";
import page_not_found_icon from "assets/img/icons8-404-100.png";
import { useNavigate } from "react-router";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <PageContainer title="Page not found" maxWidth="xs">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Box flexDirection={"row"} justifySelf={"center"}>
              <img
                src={page_not_found_icon}
                width={100}
                height={100}
                alt="Could not load icon"
              />
            </Box>
            <Box flexDirection={"row"} pt={4} justifySelf={"center"}>
              <Button
                onClick={() => navigate("/")}
                sx={{ bgcolor: "#D4A017" }}
                variant="contained"
              >
                Go back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </PageWrapper>
  );
}
