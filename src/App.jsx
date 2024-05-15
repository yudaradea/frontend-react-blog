import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  const url = useLocation();

  return (
    <>
      {url.pathname != "/profile" && <Navbar />}
      <Outlet />
    </>
  );
}

export default App;
