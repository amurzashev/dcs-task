import { RootState } from "duck";
import React, { FC } from "react";
import { connect } from "react-redux";
import { Box, Text } from "ui";
import styled from "ui/styled";

interface BodyProps {
  lat: string;
  lng: string;
  name?: string;
  country?: string;
}

const Head = styled(Box)`
  background: ${(props) => props.theme.colors.primary};
`;

const HeadText = styled(Text)`
  color: white;
`;

const Body: FC<BodyProps> = ({ lat, lng, name, country }) => {
  return (
    <Head p={3}>
      <HeadText fontSize={4} fontWeight="bold">
        {name}, {country}
      </HeadText>
    </Head>
  );
};

const mapStateToProps = (state: RootState) => state.modalCity;
export default connect(mapStateToProps)(Body);
