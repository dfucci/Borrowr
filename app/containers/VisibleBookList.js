import {connect} from 'react-redux';
import BookList from '../components/BookList';

const getVisibleBooks = (books, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return books
    }
}

const mapStateToProps = (state) => {
    return {books: getVisibleBooks(state.books, state.visibilityFilter)}
}
const mapDispatchToProps = (dispatch) => {
    return {};
}

const VisibleBookList = connect(mapStateToProps, mapDispatchToProps)(BookList)
export default VisibleBookList