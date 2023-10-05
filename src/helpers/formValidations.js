export const validations = ({ username, email, password, passwordConfirm }) => {

    const validations = [];

    if (
        username.trim().length === 0 ||
        email.trim().length === 0 ||
        password.length === 0 ||
        passwordConfirm.length === 0
    ) {
        validations.push({
            message: "Complete todos los campos.",
            color: "danger",
        });
        return validations;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email.trim())) {
        validations.push({
            message: "Ingrese un email válido.",
            color: "danger",
        });
    }

    if (!(password === passwordConfirm)) {
        validations.push({
            message: "Las contraseñas no coinciden.",
            color: "danger",
        });
    }

    return validations;
};
