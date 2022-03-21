import "./main.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Hola Mundo</h1>
        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
