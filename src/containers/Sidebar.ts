import { connect } from "react-redux";
import { Sidebar } from "components";
import { RootState } from "duck";
import { getTop15Cities } from "actions/cities";

const mapStateToProps = (state: RootState) => ({
  top: state.top,
});
const mapDispatchToProps = {
  getTop15Cities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
