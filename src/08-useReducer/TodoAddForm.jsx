import Proptypes from "prop-types";
import { useForm } from "../Hooks/useForm";

export const TodoAddForm = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ""
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
        id: new Date().getTime(),
        description,
        done: false
    }

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Aprender..."
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1 btn-block"
      >
        Agregar
      </button>
    </form>
  );
};

TodoAddForm.propTypes = {
    onNewTodo: Proptypes.func.isRequired
};
