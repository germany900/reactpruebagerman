import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Patrocinadores from './pages/Patrocinadores';
import Contribuciones from './pages/Contribuciones'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/topics" component={Patrocinadores} />
          <Route path="/contribition" component={Contribuciones} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
