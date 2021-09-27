
import './App.css';
import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';
 import About from './Component/About';
import React, { useState } from 'react'
import Alert from './Component/Alert';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"; 
import Weather from './Component/Weather';
import Weatherstyle from './Component/Weatherstyle';



function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode successfully enabled ", "success")
      document.title = "TextUtil-LIGHT"
    }
    else {
      setmode("dark");
      document.body.style.backgroundColor = '#070725'
      showAlert("Light mode successfully enabled ", "success")
      document.title = "TextUtil-DARK"
    }
  }
  const brownMode = () => {
    setmode("#401b1b")
    document.body.style.backgroundColor = 'grey'
    showAlert("Brown mode successfully enabled ", "success")

  }
  const greenMode = () => {
    setmode("#073a07")
    document.body.style.backgroundColor = 'green'
    showAlert("Green mode successfully enabled ", "success")

  }

  return (
    <>
      <Router> 
        <Navbar title="TextUtils" aboutText='About TextUtils' mode={mode} togglemode={togglemode} brownMode={brownMode} greenMode={greenMode} />
        <Alert alert={alert} />
       
        <div className="container">
          <Switch>
          
            <Route exact path="/about">
              <About mode={mode} />
            </Route> 
            <Route exact path="/weather">
              <Weather/>
            </Route> 


             <Router exact path="/"> 
              <TextBox heading="Enter text below" mode={mode} showAlert={showAlert} />
           </Router> 
           </Switch>
          
        </div>
        
     </Router> 

    </>


  );
}

export default App;
