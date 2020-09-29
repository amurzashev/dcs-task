import React, { FC } from "react";
import GFL from "react-google-font-loader";

const GoogleFontLoader: FC = () => (
  <GFL
    fonts={[
      {
        font: "Fjalla One",
        weights: [400],
      },
    ]}
  />
);

export default GoogleFontLoader;
