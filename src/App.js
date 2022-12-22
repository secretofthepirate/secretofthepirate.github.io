import logo from "./logo.svg";
import "./App.css";
import "./components/CodeForm";
import CodeForm from "./components/CodeForm";
import { useState, useEffect } from "react";

const App = () => {
    const [secret, setSecret] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let timeout = null;
        if (secret === true) {
            timeout = setTimeout(() => {
                setSecret(false);
            }, 2000);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [secret]);

    const showSecret = () => {
        setSecret(true);
    };

    return (
        <div className="App">
            {!success ? (
                <header className="App-header">
                    <div>
                        {secret ? (
                            <div className="secret-text">
                                Sir Hónaljszőr téli estéken nagyon szeretett
                                kötögetni és volt neki egy kedvenc
                                varrósdoboza...
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div onClick={showSecret} className="App-logo-link">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <p>Kérem a titkos jelszót!</p>
                    <CodeForm onSuccess={() => setSuccess(true)} />
                </header>
            ) : (
                <header className="App-header">
                    <div>Ez a nagy titok, amihez hozzáférhetsz most.</div>
                </header>
            )}
        </div>
    );
};

export default App;
