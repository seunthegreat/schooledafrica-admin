/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/schooled-dashboard";
import Levels from "layouts/levels";
import Courses from "layouts/courses";
import Quiz from "layouts/schooled-quizes";
import Exams from "layouts/schooled-exams";

//--Statement pages--//
import Subscriptions from "layouts/schooled-subscriptions";
import Payments from "layouts/schooled-payments";
import Transactions from "layouts/schooled-transactions";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import SignOut from "layouts/authentication/sign-out";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
//import Office from "examples/Icons/Office";
// import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
// import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: Dashboard,
    noCollapse: true,
    protected: true,
  },
  { type: "title", title: "Creator", key: "creator-pages" },
  {
    type: "collapse",
    name: "Levels",
    key: "levels",
    route: "/levels",
    icon: <Cube size="12px" />,
    component: Levels,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    route: "/courses",
    icon: <Cube size="12px" />,
    component: Courses,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Quiz",
    key: "quiz",
    route: "/quiz",
    icon: <Cube size="12px" />,
    component: Quiz,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Exam Lab",
    key: "exams",
    route: "/exams",
    icon: <Cube size="12px" />,
    component: Exams,
    noCollapse: true,
    protected: true,
  },
  { type: "title", title: "Statements", key: "statement-pages" },
  {
    type: "collapse",
    name: "Subscriptions",
    key: "subscriptions",
    route: "/subscriptions",
    icon: <Cube size="12px" />,
    component: Subscriptions,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    route: "/payments",
    icon: <Cube size="12px" />,
    component: Payments,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Transactions",
    key: "transactions",
    route: "/transactions",
    icon: <Cube size="12px" />,
    component: Transactions,
    noCollapse: true,
    protected: true,
  },
  { type: "title", title: "Account", key: "account-pages" },
  {
    type: "none",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: SignUp,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-out",
    route: "/authentication/sign-out",
    icon: <SpaceShip size="12px" />,
    component: SignOut,
    noCollapse: true,
  },
];

export default routes;
