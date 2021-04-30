import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@material-ui/core";

// styles
import "fontsource-roboto";
// import Layout from "./components/layout/Layout";
const Layout = lazy(() => import("./components/layout/Layout"));

const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Layout />
    </Suspense>
  );
};

export default App;
