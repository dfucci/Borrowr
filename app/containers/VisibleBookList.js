import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import BookList from '../components/BookList';
import * as BooksActions from '../actions/books';

const getVisibleBooks = (books, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return books
    }
}

const mapStateToProps = (state) => {
    return {
        books: getVisibleBooks(state.books, state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(BooksActions, dispatch);
}

const VisibleBookList = connect(mapStateToProps, mapDispatchToProps)(BookList)
export default VisibleBookList