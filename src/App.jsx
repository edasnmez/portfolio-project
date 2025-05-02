import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from "./components/Home.jsx";
import { LanguageThemeProvider } from "./contexts/LanguageThemeContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <LanguageThemeProvider>
    <Router>
    <>
          <ToastContainer position="top-right" autoClose={1500} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </>
    </Router>
    </LanguageThemeProvider>
  );
}

export default App;
