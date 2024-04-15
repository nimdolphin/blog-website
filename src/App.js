import { BrowserRouter } from "react-router-dom";
import { router } from "./router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        {router()}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
