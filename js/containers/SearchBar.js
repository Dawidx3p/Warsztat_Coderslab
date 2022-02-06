import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { searchFilms } from '../redux/actions';

const mapDispatch = (dispatch) => ({
    onSearch: (payload) => dispatch(searchFilms(payload)),
})


export default connect(undefined, mapDispatch)(SearchBar);
