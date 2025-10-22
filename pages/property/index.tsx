import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container"> PropertyList</Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
