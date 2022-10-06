import Global from "./styles/global";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
