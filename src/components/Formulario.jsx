import { useState } from "react";
import { Alert } from "./Alert";

const initialForm = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
};

export const Formulario = () => {
    const [formState, setformState] = useState(initialForm);

    const { username, email, password, passwordConfirm } = formState;

    const handleOnSubmit = (event) => {
        event.preventDefault();

        // TODO: validar formato de email.

        if (password === passwordConfirm) {
            console.log("Contraseñas son iguales");
        }
    };

    const handleInputChange = ({ target }) => {
        const { value, name } = target;
        setformState({
            ...formState,
            [name]: value,
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
                    />
                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="tuemail@ejemplo.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
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
                    <Alert />
                </form>
            </div>
        </div>
    );
};
