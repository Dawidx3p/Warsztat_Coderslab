import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";

const mapState = ({moviesSearch}) => ({
    results: moviesSearch.films ? moviesSearch.films.Search : [],
    error: moviesSearch.error
})


export default connect(mapState)(SearchResults);
