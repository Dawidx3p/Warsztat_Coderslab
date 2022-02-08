import { connect } from "react-redux";
import ToWatch from "../components/ToWatch";
import { setToWatchList } from "../redux/actions";

const mapState = ({toWatchList}) => ({
    toWatchList
})

const mapDispatch = (dispatch) => ({
    setWatchList: (payload) => dispatch(setToWatchList(payload))
})


export default connect(mapState, mapDispatch)(ToWatch);
