import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./context/auth-context";

const App = (props) => {
  const AuthCtx = useContext(AuthContext);

  let content = AuthCtx.isAuth ? <Ingredients /> : <Auth />;

  return content;
};

export default App;
