import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Stroage from "./pages/Stroage";
import Settings from "./pages/Settings";
import Build from "./pages/Build";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element=<AllApps /> />
          <Route path="/stroage" element=<Stroage /> />
          <Route path="/settings" element=<Settings /> />
          <Route path="/authentication" element=<Authentication /> />
          <Route path="/build/:bID" element=<Build /> />
          <Route path="/analytics/:aID" element=<Analytics /> />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
