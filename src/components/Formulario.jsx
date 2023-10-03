import { useState } from "react";

const initialForm = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
};

export const Formulario = ({handleValidationErrors}) => {
    const [formState, setformState] = useState(initialForm);

    const { username, email, password, passwordConfirm } = formState;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        handleValidationErrors(validations());
    };

    const validations = () => {
        const validations = []

        if(username.trim().length === 0 || 
        email.trim().length === 0 ||
        password.trim().length === 0 ||
        passwordConfirm.trim().length === 0) {
            validations.push({
                message: 'Complete todos los campos.',
                color: 'danger'
            })
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

        if(!emailRegex.test(email)) {
            validations.push({
                message: 'Ingrese un email válido.',
                color: 'danger',
            });
        }

        if (!(password === passwordConfirm)) {
            validations.push({
                message: 'Las contraseñas no coinciden.',
                color: 'danger'
            });
        }

        return validations;

    }

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
                        type="text"
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
                </form>
            </div>
        </div>
    );
};
