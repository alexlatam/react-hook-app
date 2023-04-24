import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Blockquote = ({quote, author}) => {

  const paragraphRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = paragraphRef.current.getBoundingClientRect();
      setBoxSize({ width, height});
  }, [quote])

  return (
    <>
      <blockquote 
        className="blockquote text-end" 
        style={{display: 'flex'}}
      >
        <p className="mb-1" ref={paragraphRef} >{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <pre className="text-danger">
        { JSON.stringify(boxSize, null, 3) }
      </pre>

    </>
  );
};

// Definimos las propiedades que va a recibir el componente
Blockquote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}