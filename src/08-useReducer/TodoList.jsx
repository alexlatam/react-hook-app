import Proptype from "prop-types";
import { TodoItem } from "./";

export const TodoList = ({todos = [], onRemoveTodo, onToggleTodoDone}) => {
  return (
    <ul className="list-gorup">
      {
        todos.map( todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onRemoveTodo={onRemoveTodo} 
            onToggleTodoDone={onToggleTodoDone}
          />
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
    todos: Proptype.array.isRequired,
    onRemoveTodo: Proptype.func.isRequired,
    onToggleTodoDone: Proptype.func.isRequired,
}