import AuthorPage from "./features/author/AuthorPage";
import Tasks from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
} from "./features/author/styled";

export default () => (
  <HashRouter>
    <StyledNav>
      <StyledNavList>
        <StyledNavItem>
          <StyledNavLink to="/zadania" activeClassName="active">
            Zadania
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink to="/author" activeClassName="active">
            O autorze
          </StyledNavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNav>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);
