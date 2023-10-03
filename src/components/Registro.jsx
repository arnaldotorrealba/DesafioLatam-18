import { Formulario } from "./Formulario";
import { SocialButton } from "./SocialButton";

export const Registro = () => {
    return (
        <main className="container text-center bg-white p-3 rounded-4">
            <h1>Crea una cuenta</h1>
            <div>
                {/* TODO: El ícono debe enviarse mediante Props */}
                <SocialButton />
                <Formulario />
            </div>
        </main>
    );
};
