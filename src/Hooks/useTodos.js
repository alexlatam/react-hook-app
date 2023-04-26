import { todoReducer } from "./../08-useReducer/todoReducer";
import { useEffect, useReducer } from "react";

export const useTodos = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    const todosCount = todos.length;
    const todosPending = todos.reduce((total, todo) => {
        return todo.done ? total : total + 1
    }, 0);

    // Cada vez que cambie el estado de los todos, se ejecuta este efecto.
    useEffect(() => {
        // cada vez que cambie el estado de los todos, se guarda en el localStorage.        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Funcion encargada de agregar un todo al estado.
    const handleAddTodo = (todo) => {
        // creamos la accion que se va a enviar al reducer.
        const action = {
            type: "[TODO] add",
            payload: todo
        };

        // enviamos la accion al reducer.
        dispatch(action);
    };

    // Funcion encargada de eliminar un todo del estado.
    const handleRemoveTodo = (todo) => {
        // enviamos la accion al reducer.
        dispatch({
            type: "[TODO] remove",
            payload: todo
        });
    };

    // Funcion encargada de cambiar el estado(done[true-false]) de un todo.
    const handleToggleTodoDone = (todo) => {
        // enviamos la accion al reducer.
        dispatch({
            type: "[TODO] done",
            payload: todo
        });
    };

    return {
        todos,
        todosCount,
        todosPending,
        handleAddTodo,
        handleRemoveTodo,
        handleToggleTodoDone
    }
}
