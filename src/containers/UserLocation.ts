import { connect } from "react-redux";
import { UserLocation } from "components";
import { RootState } from "duck";

const mapStateToProps = (state: RootState) => ({
  userLocation: state.userLocation,
  cities: state.cities,
});

export default connect(mapStateToProps)(UserLocation);
