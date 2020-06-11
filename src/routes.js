
import About from "views/About.jsx";
import UserProfile from "views/UserProfile.jsx";
import DiagnosticReports from "views/DiagnosticReports.jsx";
import Help from "views/Help.jsx";
import PatientRef from "views/PatientRef.jsx";
import Notifications from "views/Notifications.jsx";
import PatientRecords from "views/PatientRecords";

const dashboardRoutes = [
  {
    path: "/notifications",
    name: "Dashboard",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/newpatient",
    name: "New Patient",
    icon: "pe-7s-add-user",
    component: PatientRef,
    layout: "/admin"
  },
  {
    path: "/interpretation",
    name: "Patients Records",
    icon: "pe-7s-news-paper",
    component: PatientRecords,
    layout: "/admin"
  },
  {
    path: "/diagnostics",
    name: "Doctor's Diagnostics",
    icon: "pe-7s-note2",
    component: DiagnosticReports,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/help",
    name: "Help",
    icon: "pe-7s-help1",
    component: Help,
    layout: "/admin"
  },
  {
    path: "/about",
    name: "About",
    icon: "pe-7s-light",
    component: About,
    layout: "/admin"
  }
];

export default dashboardRoutes;
