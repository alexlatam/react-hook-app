import { useForm } from "../Hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formState;

  return (
    <>
      <h1>Simple Form With Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="user@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-info mt-2 px-5" onClick={onResetForm}>Reset</button>

      <hr />
    </>
  );
};
