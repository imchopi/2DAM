import { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import RegisterLogin from "./pages/register_login/RegisterLogin";

setupIonicReact();

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1000);
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <Route path="/home" exact component={showWelcome ? Welcome : Home} />
          <Route
            path="/register"
            exact
            component={showWelcome ? Welcome : RegisterLogin}
          />
          <Redirect exact from="/" to="/home" />
          <Route render={() => <Redirect to="/home" />}></Route>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
