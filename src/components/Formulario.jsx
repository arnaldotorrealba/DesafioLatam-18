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
        if(validations().length === 0){
            setformState(initialForm)
        }
    };

    const handleInputChange = ({ target }) => {
        const { value, name } = target;
        setformState({
            ...formState,
            [name]: value,
        });
    };

    const applyTrim = ({target}) => {
        const { value, name } = target;
        setformState({
            ...formState,
            [name]: value.trim(),
        });
    }

    const validations = () => {
        const validations = []

        if(username.trim().length === 0 || 
        email.trim().length === 0 ||
        password.length === 0 ||
        passwordConfirm.length === 0) {
            validations.push({
                message: 'Complete todos los campos.',
                color: 'danger'
            })
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

        if(!emailRegex.test(email.trim())) {
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
