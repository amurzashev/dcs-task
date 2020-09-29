import React, { FC } from "react";
import { Box, Text } from "ui";

const Favorites: FC = () => {
  return (
    <Box p={3}>
      <Box mb={3}>
        <Text fontSize={4}>Favorites</Text>
      </Box>
    </Box>
  );
};

export default Favorites;
