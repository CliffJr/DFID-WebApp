
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";
//import Login from "./views/LoginContainer.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    {/* <Route exact path="/login">
  <Login />
</Route> */}
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/notifications" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);




