import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [ formState, setFormState ] = useState(initialForm)

    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            // Entre corchetes para que se interprete como una variable.
            // Osea que la propiedad del objeto se llame como el valor de la variable.
            // Para que sea dinamica
            [target.name]: target.value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        formState,
        onInputChange,
        onResetForm
    }

}
