import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from "./components/Home.jsx";
import { LanguageThemeProvider } from "./contexts/LanguageThemeContext.jsx";

function App() {
  return (
    <LanguageThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
           <Home />
        </Route>
      </Switch>
    </Router>
    </LanguageThemeProvider>
  );
}

export default App;
