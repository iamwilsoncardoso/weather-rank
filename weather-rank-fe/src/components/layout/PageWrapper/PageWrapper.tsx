import { Box } from "@mui/material";
import React from "react";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.paper",
        overflowX: "hidden",
        py: 5,
      }}
    >
      <Box>{children}</Box>
    </Box>
  );
};

export default PageWrapper;
