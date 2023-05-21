import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/sharedLayout/SharedLayout";
const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets/:userId" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
