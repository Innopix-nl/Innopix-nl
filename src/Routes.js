import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EpisodeDetails from "./pages/EpisodeDetails";
import TVshows from "./pages/TVshows";
import NotFound from "./pages/NotFound";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/tv-shows"]} component={TVshows} />
        <Route exact path="/episode-details/:id" component={(props) => <EpisodeDetails {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
