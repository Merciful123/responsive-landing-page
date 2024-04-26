import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import RootComponent from "./components/Root";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      <div className=" App  ">
        <Routes>
          <Route path="/" element={<RootComponent />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            {/* <NavbarTop /> */}
            {/* <HomePage /> */}
            {/* <HelpIcon /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
