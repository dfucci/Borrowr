import {SELECT_ALL} from '../actions/filter';

export default function filter(state = {}, action) {
    switch (action.type) {
        case SELECT_ALL:
            console.log('object');
            return {hello: 'world'};
        default:
            return state;
    }
}
