import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router/Router";

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ApiContext from "./components/Context/Context";

function App() {
  const { theme } = useContext(ApiContext);

  return (
    <div className={`App ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
