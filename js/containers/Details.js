import { connect } from "react-redux";
import Details from "../components/Deatails";
import { getFilmDetails } from '../redux/actions';

const mapState = ({details}) => ({
    details
})

const mapDispatch = (dispatch, ownProps) => {
    return ({
        onFetch: () => dispatch(getFilmDetails(ownProps.match.params.imdbID))
    })
}


export default connect(mapState, mapDispatch)(Details);
