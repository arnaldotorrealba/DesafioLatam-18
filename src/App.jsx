import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className="container text-center bg-white p-3 rounded-4">
            <h1>Crea una cuenta</h1>
            <div>
                <div className="w-100 d-flex justify-content-center gap-2">
                    <div>
                        <button className="btn btn-outline-dark rounded-circle">
                            <i class="fa-brands fa-facebook"></i>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-outline-dark rounded-circle">
                            <i class="fa-brands fa-github"></i>
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-outline-dark rounded-circle">
                            <i class="fa-brands fa-linkedin"></i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <p className="col">O usa tu email para registrarte</p>
                </div>
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
                            <p className="alert alert-danger my-2">
                                Completa todos los campos
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
