export const todoReducer = (state = [], action) => {

    // action.payload contiene el objeto que se envia desde el dispatch.
    // action.payload = { id: number, description: string, done: boolean }
    // action.type contiene el tipo de accion que se esta ejecutando.
    switch (action.type) {
        case '[TODO] add':
            return [...state, action.payload];
        case '[TODO] remove':
            return state.filter(todo => todo.id !== action.payload.id);

        case '[TODO] done':
            return state.map(todo => 
                todo.id === action.payload.id
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }

}