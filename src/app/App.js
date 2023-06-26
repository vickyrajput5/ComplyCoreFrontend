import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import './style.scss';
function App() {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
