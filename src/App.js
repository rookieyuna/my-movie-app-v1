import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basepath={process.env.PUBLIC_URL}>
      <Switch>
      <Route path="/detail/:movieId">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
