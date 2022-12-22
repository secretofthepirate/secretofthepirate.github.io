import { useState } from "react";
import Modal from "./Modal";

const CodeForm = ({ onSuccess }) => {
    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const failed = () => {
        setMessage("Ez most nem sikerült! Szedd össze magad!");
        setIsOpen(true);
    };

    const success = () => {
        onSuccess();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.code1 && inputs.code2 && inputs.code3) {
            if (
                inputs.code1 === "14" &&
                inputs.code2 === "40" &&
                inputs.code3 === "7" &&
                inputs.code4 === "47"
            ) {
                success();
            } else {
                failed();
            }
        }
        console.log(inputs);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="code-form">
                <label>
                    <input
                        className="code1"
                        type="number"
                        name="code1"
                        value={inputs.code1 || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        className="code2"
                        type="number"
                        name="code2"
                        value={inputs.code2 || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        className="code3"
                        type="number"
                        name="code3"
                        value={inputs.code3 || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        className="code4"
                        type="number"
                        name="code4"
                        value={inputs.code4 || ""}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" className="btn btn-warning btn-lg">
                    Beküldés
                </button>
            </form>
            {isOpen && <Modal setIsOpen={setIsOpen} message={message} />}
        </>
    );
};

export default CodeForm;
