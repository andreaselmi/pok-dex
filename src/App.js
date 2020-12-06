import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import SeenPage from "./components/SeenPage";
import CaughtPage from "./components/CaughtPage";
import SearchPage from "./components/SearchPage";

import PokemonContextProvider from "./context/PokemonContext";

function App() {
  return (
    <>
      <PokemonContextProvider>
        <Router>
          <MyNavbar />
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="/seen">
              <SeenPage />
            </Route>
            <Route path="/caught">
              <CaughtPage />
            </Route>
          </Switch>
        </Router>
      </PokemonContextProvider>
    </>
  );
}

export default App;
