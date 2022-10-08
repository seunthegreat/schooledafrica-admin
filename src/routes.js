import Dashboard from "layouts/schooled-dashboard";
import Levels from "layouts/schooled-levels";
import Courses from "layouts/courses";
import Quiz from "layouts/schooled-quizzes";
import EditQuizzes from "layouts/schooled-quizzes/EditQuizzes";
import Exams from "layouts/schooled-exams";
import Questions from "layouts/schooled-questions";

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
    name: "Manage Quizzes",
    key: "quiz",
    route: "/quiz",
    icon: <Cube size="12px" />,
    component: Quiz,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Edit Quizzes",
    key: "editQuizzes",
    route: "/edit-quizzes",
    icon: <Cube size="12px" />,
    component: EditQuizzes,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Manage Exams",
    key: "exams",
    route: "/exams",
    icon: <Cube size="12px" />,
    component: Exams,
    noCollapse: true,
    protected: true,
  },
  {
    type: "collapse",
    name: "Edit Questions",
    key: "questions",
    route: "/questions",
    icon: <Cube size="12px" />,
    component: Questions,
    noCollapse: true,
    protected: false,
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
