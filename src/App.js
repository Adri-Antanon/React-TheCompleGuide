import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
