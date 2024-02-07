import { BrowserRouter } from "react-router-dom";
import { router } from "./router";
import Navigation from "./components/Navigation";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        {router()}
      </BrowserRouter>
    </div>
  );
};

export default App;
