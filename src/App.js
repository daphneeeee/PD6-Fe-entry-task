import NavBar from "./NavBar";
import Home from "./Home";
import PostDetail from "./PostDetail";
import AddPost from './AddPost';
import Edit from "./Edit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/add'>
            <AddPost/>
          </Route>
          <Route path="/posts/:id">
            <PostDetail />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
