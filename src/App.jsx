import { useState } from "react";
import { Registro } from "./components/Registro";

function App() {

    const [messages, setMessages] = useState([]);

    const handleValidationErrors = (messages) => {
        if (messages.length > 0) {
            setMessages(messages);
        } else {
            setMessages([{
                message: "Registro exitoso!",
                color: 'success'
            }]);
        }
    }

    return (
        <Registro
            handleValidationErrors={handleValidationErrors}
            messages={messages}
        />
    )
}

export default App;
