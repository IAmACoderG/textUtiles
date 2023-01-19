
import './App.css';
import Navbar from './components/Navbar';
import TextAreaa from './components/TextAreaa';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (massage, type) => {
    setalert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setalert()
    }, 1500);

  };

  const switchOnClick = () => {
    console.log("clicked")
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode Enabled", "success");

    }
    else {
      setmode("dark");
      document.body.style.backgroundColor = '#1a2150';
      showAlert("Dark mode Enabled", "success");

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtilies" about="About" Mode={mode} funswitch={switchOnClick} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route path='/' element={<TextAreaa showAlert={showAlert} heading="Enter The Text to Capalized And Smaller" Mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
