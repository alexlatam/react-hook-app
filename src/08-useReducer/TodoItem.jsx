import Proptype from "prop-types";

export const TodoItem = ({ todo = {}, onRemoveTodo, onToggleTodoDone }) => {
  return (
    <li className="list-group-item d-flex justify-content-between mb-2">
      <span 
        role="button"
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={ () => onToggleTodoDone(todo)}
      >{todo.description}</span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: Proptype.object.isRequired,
  onRemoveTodo: Proptype.func.isRequired,
  onToggleTodoDone: Proptype.func.isRequired,
};
