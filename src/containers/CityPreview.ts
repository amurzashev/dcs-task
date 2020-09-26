import { connect } from "react-redux";
import { CityPreview } from "components";
import { RootState } from "duck";

const mapStateToProps = (state: RootState) => ({
  cities: state.cities,
});

export default connect(mapStateToProps)(CityPreview);
