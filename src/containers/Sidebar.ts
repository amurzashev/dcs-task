import { connect } from "react-redux";
import { Sidebar } from "components";
import { RootState } from "duck";

const mapStateToProps = (state: RootState) => ({
  top: state.top,
});

export default connect(mapStateToProps)(Sidebar);
