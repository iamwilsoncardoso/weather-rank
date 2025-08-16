import {
  Avatar,
  Box,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";

export default function RankIcon({
  icon,
  loading,
  ranking,
  tooltipTitle,
}: {
  icon: string;
  loading: boolean;
  ranking: number | undefined;
  tooltipTitle: string;
}) {
  return (
    <Box flexDirection={"column"} textAlign={"center"}>
      <Tooltip title={tooltipTitle} placement="top">
        <div>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Could not load Icon"
            src={icon}
          />
          <Typography
            variant="h5"
            fontWeight={"bold"}
            component="div"
            sx={{ flexGrow: 1, pt: 2 }}
          >
            {loading ? (
              <CircularProgress size={"25px"} color="success" />
            ) : ranking !== undefined ? (
              `${ranking}`
            ) : null}
          </Typography>
        </div>
      </Tooltip>
    </Box>
  );
}
