import { useEffect, useState } from "react";
import { Echo } from "echo";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [echoed, setEchoed] = useState(false);

  useEffect(() => {
    if (!echoed) return;
    const timeout = setTimeout(() => setEchoed(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [echoed]);

  const handleChange = (e) => setValue(e.target.value);
  const handleSave = () => {
    Echo.echo({ value }).then((result) => {
      console.log("result", result);
      setResult(result?.value || "");
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enter a value to have it echoed back.</p>

        <div className="form">
          <input value={value} onChange={handleChange} />
          <button
            type="button"
            onClick={handleSave}
            className={echoed ? "echoed" : ""}
          >
            {echoed ? "Sent!" : "Send"}
          </button>
        </div>

        <div className="result">{result}</div>
      </header>
    </div>
  );
}

export default App;
