import { createContext, useReducer } from "react";

export const NotesContext = createContext();

function reducer(notes, { type, payload }) {
    switch (type) {
        case 'create':
            return [payload, ...notes];
        case 'reset':
            return payload;
        case 'update':
            return notes.map((note) => (note.id === payload.id ? payload : note));
        case 'delete':
            return notes.filter((note) => note.id !== payload.id);
        default:
            throw Error(`Unknown action: ${type}`);
    }
}

export const NotesProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(reducer);

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>{children}</NotesContext.Provider>
    )
}
