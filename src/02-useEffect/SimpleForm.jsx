import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: 'Alexis',
        email: 'alexis.montilla@oxas.tech'
    })

    const { name, email } = formState

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            // Entre corchetes para que se interprete como una variable.
            // Osea que la propiedad del objeto se llame como el valor de la variable.
            // Para que sea dinamica
            [target.name]: target.value
        })
    }

    useEffect(() => {
        // console.log('Hey! Este useEffect solo se ejecuta una vez. Cuando se carga el componente')
    }, [])

    useEffect(() => {
        // console.log('Hey! formState cambio!')
    }, [formState])

    useEffect(() => {
        // console.log('Hey! Email cambio!')
    }, [email])



  return (
    <>
        <h1>Simple Form</h1>
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

        <hr />

        {
            (name === 'alexis') && <Message />
        }
    </>
  )
}
