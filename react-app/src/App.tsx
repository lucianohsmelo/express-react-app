import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
    <h1>UI Home</h1>
  )
}

const Manager = () => {
  return (
    <h1>UI Manager</h1>
  )
}

const PageNotFound = () => {
  return (
    <h1>Page Not Found</h1>
  )
}

function App() {
  return (
    <div className="view-routes">
      <Switch>
        <Route path="/ui" exact={true} component={Home} />
        <Route path="/ui/manager" component={Manager} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
