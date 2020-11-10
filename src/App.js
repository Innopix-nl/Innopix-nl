import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Home from './components/pages/Home';
import EpisodeDetails from './components/pages/EpisodeDetails';

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div>
                  {/* <ThemeProvider> */}
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/episode-details/:episodeId" component={EpisodeDetails}/>
                    </Switch>
                    {/* </ThemeProvider> */}
              </div>
            </Router>
          </Provider>
  );
}
export default App;