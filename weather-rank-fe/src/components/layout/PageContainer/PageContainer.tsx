import { Box, Container, ContainerProps, Typography } from "@mui/material";
import React from "react";

export const PageContainer = ({
  title,
  children,
  maxWidth,
}: {
  title?: string;
  children: React.ReactNode;
  maxWidth?: ContainerProps["maxWidth"];
}) => {
  return (
    <Container
      maxWidth={maxWidth ?? "lg"}
      sx={{
        flex: 1,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          component={"div"}
          color="text.primary"
          textAlign={"center"}
        >
          {title}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
};

export default PageContainer;
