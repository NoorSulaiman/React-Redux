import { ADD_ITEM, REMOVE_ITEM } from '../actions/listActions';

const initialState = {
    items: []
};

export function listReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };

        case REMOVE_ITEM:
            const index = action.payload;
            const items = state.items.slice(0, index - 1).concat(state.items.slice(index));

            return { ...state, items };

        default:
            return state
    }

}
