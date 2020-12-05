import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PokeNavbar from "./components/PokeNavbar";
import PokeSeenPage from "./components/PokeSeenPage";
import PokeCaughtPage from "./components/PokeCaughtPage";
import PokeSearchPage from "./components/PokeSearchPage";

import PokemonContextProvider from "./context/PokemonContext";

function App() {
  return (
    <>
      <PokemonContextProvider>
        <Router>
          <PokeNavbar />
          <Switch>
            <Route exact path="/">
              <PokeSearchPage />
            </Route>{" "}
            <Route path="/seen">
              <PokeSeenPage />
            </Route>{" "}
            <Route path="/caught">
              <PokeCaughtPage />
            </Route>{" "}
          </Switch>{" "}
        </Router>{" "}
      </PokemonContextProvider>{" "}
    </>
  );
}

export default App;
