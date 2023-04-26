import { useTodos } from "../Hooks/useTodos";
import { TodoList, TodoAddForm } from "./";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodoDone
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {todosCount},<small>pendientes: {todosPending}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodoDone={handleToggleTodoDone}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Task</h4>
          <hr />
          <TodoAddForm onNewTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
