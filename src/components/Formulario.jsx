import { Alert } from "./Alert";

export const Formulario = () => {
    return (
        <div className="row">
            <div className="col">
                <form className="d-flex flex-column">
                    <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Nombre"
                        name="username"
                    />
                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="tuemail@ejemplo.com"
                        name="email"
                    />
                    <input
                        className="form-control my-2"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                    />
                    <input
                        className="form-control my-2"
                        type="password"
                        placeholder="Confirma tu contraseña"
                        name="passwordConfirm"
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
