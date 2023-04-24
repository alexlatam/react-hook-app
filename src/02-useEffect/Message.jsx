import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      // console.log(e)
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // Este codigo se ejecuta cuando el componente se desmonta(o se destruye)
      console.log("Message unmounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exist!</h3>
    </>
  );
};
