import { Alert } from "./Alert";
import { Formulario } from "./Formulario";
import { SocialButton } from "./SocialButton";

export const Registro = ({ handleValidationErrors, messages }) => {
    return (
        <main className="container text-center bg-white p-3 rounded-4">
            <h1>Crea una cuenta</h1>
            <div>
                <div className="w-100 d-flex justify-content-center gap-2">
                    <SocialButton iconClass={"fa-brands fa-facebook"} />
                    <SocialButton iconClass={"fa-brands fa-github"} />
                    <SocialButton iconClass={"fa-brands fa-linkedin"} />
                </div>
                <div className="row">
                    <p className="col">O usa tu email para registrarte</p>
                </div>
                <Formulario handleValidationErrors={handleValidationErrors} />
                {messages.length > 0
                    ? messages.map(({ message, color }, index) => (
                          <Alert key={index} message={message} color={color} />
                      ))
                    : ""}
            </div>
        </main>
    );
};
