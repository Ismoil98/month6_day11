import { lazy } from "react";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const NotFound = lazy(() => import("./NotFound"));
const Contact = lazy(() => import("./Contact"));
const Shop = lazy(() => import("./Shop"));

export {
  About,
  Contact,
  Home,
  NotFound,
  Shop,
};
