import { connect } from "react-redux";
import { Favorites } from "components";
import { RootState } from "duck";

const mapStateToProps = (state: RootState) => ({
  cities: state.cities,
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
