
const initialSate = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialSate, action) => {

    if (action?.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

console.log(todos)
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, action);
console.log(todos)