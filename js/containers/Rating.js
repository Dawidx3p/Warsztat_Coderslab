import { connect } from "react-redux";
import Rating from "../components/Rating";
import { addToWatchedList, addToWatchList, changeRating, deleteFromWatchList } from '../redux/actions';

const mapState = (state, ownProps) => ({
    element: {...ownProps},
    rated: Boolean(state.watchedList.find(element => element.imdbID===ownProps.imdbID)),
    rating: Boolean(state.watchedList.find(element => element.imdbID===ownProps.imdbID)) ? state.watchedList.find(element => element.imdbID===ownProps.imdbID).rating : null,
    inWatchList: state.toWatchList.find(element => element.imdbID===ownProps.imdbID) ? true : false
})

const mapDispatch = (dispatch ,ownProps) => ({
    changeRating: (rating) => dispatch(changeRating({...ownProps, rating})),
    addRating: (rating) => dispatch(addToWatchedList({...ownProps, rating})),
    handleCheckbox: (payload, state) => state ? dispatch(deleteFromWatchList(payload)): dispatch(addToWatchList(payload))
})


export default connect(mapState, mapDispatch)(Rating);
