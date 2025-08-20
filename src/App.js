import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './assets/css/style.css';
import "./assets/css/style.css";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Route';

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
