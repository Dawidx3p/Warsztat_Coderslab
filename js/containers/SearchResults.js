import { connect } from "react-redux";
import SearchResults from "../components/Search/SearchResults";
import { setToWatchList, setWatchedList } from "../redux/actions";

const mapState = ({moviesSearch, toWatchList, watchedList}) => ({
    results: moviesSearch.films ? moviesSearch.films.Search : [],
    error: moviesSearch.error,
    toWatchList,
    watchedList
})

const mapDispatch = (dispatch) => ({
    setWatchList: (payload) => dispatch(setToWatchList(payload)),
    setWatchedList: (payload) => dispatch(setWatchedList(payload)),
})


export default connect(mapState, mapDispatch)(SearchResults);
