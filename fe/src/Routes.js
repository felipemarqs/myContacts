import { Route, Switch, BrowserRouter } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
//import { Container as EditContact } from "./pages/EditContact";
import EditContact from "./pages/EditContact";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new" component={NewContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
