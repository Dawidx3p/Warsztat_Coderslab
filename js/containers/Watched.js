import { connect } from "react-redux";
import Watched from "../components/Watched";
import { setWatchedList } from "../redux/actions";

const mapState = ({watchedList}) => ({
    watchedList
})

const mapDispatch = (dispatch) => ({
    setWatchedList: (payload) => dispatch(setWatchedList(payload))
})


export default connect(mapState, mapDispatch)(Watched);
