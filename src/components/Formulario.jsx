import { useState } from "react";
import {validations} from "../helpers/formValidations.js";

const initialForm = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
};

export const Formulario = ({ handleValidationErrors }) => {
    const [formState, setFormState] = useState(initialForm);

    const { username, email, password, passwordConfirm } = formState;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        handleValidationErrors(validations(formState));
        if (validations(formState).length === 0) {
            setFormState(initialForm);
        }
    };

    const handleInputChange = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const applyTrim = ({ target }) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [name]: value.trim(),
        });
    };
    
    return (
        <div className="row">
            <div className="col">
                <form className="d-flex flex-column" onSubmit={handleOnSubmit}>
                    <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Nombre"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        onBlur={applyTrim}
                    />
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="tuemail@ejemplo.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        onBlur={applyTrim}
                    />
                    <input
                        className="form-control my-2"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <input
                        className="form-control my-2"
                        type="password"
                        placeholder="Confirma tu contraseña"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="btn btn-success">
                        Registrase
                    </button>
                </form>
            </div>
        </div>
    );
};
