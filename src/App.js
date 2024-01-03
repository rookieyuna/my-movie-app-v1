import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
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
// 24.01.01 Router 설치시 $ npm i react-router-dom@5.3.0
export default App;
