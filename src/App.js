import logo from "./logo.svg";
import "./App.css";
import "./components/CodeForm";
import CodeForm from "./components/CodeForm";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Kérem a titkos jelszót!</p>
                <CodeForm />
            </header>
        </div>
    );
}

export default App;
