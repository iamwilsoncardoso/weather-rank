import * as React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Item from "components/common/ScoringSystem/styledScoringSystem";

export default function ScoringSystem() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <Item>Perfect (1.0)</Item>
        <Item>Neutral (0.5)</Item>
        <Item>Poor (0.0)</Item>
      </Stack>
    </div>
  );
}
