import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import SeenPage from "./components/SeenPage";
import CaughtPage from "./components/CaughtPage";
import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";

import PokemonContextProvider from "./context/PokemonContext";

function App() {
  return (
    <>
      <PokemonContextProvider>
        <Router>
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/seen" component={SeenPage} />
            <Route path="/caught" component={CaughtPage} />
            <Route path="/:details_id" component={DetailsPage} />
          </Switch>
        </Router>
      </PokemonContextProvider>
    </>
  );
}

export default App;
