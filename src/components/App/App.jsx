import "./App.css";
import Planets from "../Planets";
import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Residents from "../Residents/Residents";
import PlanetDetails from "../PlanetDetails/PlanetDetails";
import Films from "../Films/Films";
import Page404 from "../Page404/Page404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/planets/:id/films">
          <h1>Star Wars Planet Films</h1>
          <Films />
        </Route>
        <Route path="/planets/:id/residents">
          <h1>Star Wars Planet Residents</h1>
          <Residents />
        </Route>
        <Route path="/planets/:id">
          <h1>Star Wars Planet Details</h1>
          <PlanetDetails />
        </Route>
        <Route path="/planets">
          <h1>Star Wars Planets</h1>
          <Planets>
            {(header) => {
              return [
                ...header,
                {
                  colName: "films",
                  Cell: ({ row }) => {
                    return row?.films?.length;
                  },
                },
                {
                  colName: "residents",
                  Cell: ({ row }) => {
                    return row?.residents?.length;
                  },
                },
              ];
            }}
          </Planets>
        </Route>
        <Route path="/">
          <Redirect to="/planets" />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
