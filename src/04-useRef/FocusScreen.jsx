import { useRef } from "react";

export const FocusScreen = () => {

    // useRef no causa un re-render
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input 
            ref={inputRef} // enlaza el input con el useRef
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={handleClick}
        >
            Set focus
        </button>
        
    </>
  )
}
