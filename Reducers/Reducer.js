import { ADD_TASK, DELETE_TASK, SET_DONE } from 'ToDoProject/Actions/ActionTypes'

const initialState = {
    notes: [
        { text: 'text 1', isDone: false },
        { text: 'text 2', isDone: false },
    ]
}

export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DONE:
            {
                let notes = state.notes.map((note, index) => {
                    if (index == action.payload.index) {
                        return {
                            ...note,
                            isDone: !note.isDone
                        }
                    }
                    else {
                        return state.notes[index];
                    }
                })
                return { ...state, notes };
            }
        case ADD_TASK:
            {
                let notes = [...state.notes, { text: action.payload.text, isDone: false }];
                return { ...state, notes }
            }

        case DELETE_TASK:
            {
                let notes = state.notes
                notes.splice(action.payload.index,1)
                return { ...state, notes }
            }

        default:
            return state;
    }
}
