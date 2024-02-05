import { BrowserRouter } from "react-router-dom";
import { router } from "./router";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />

      {router()}
    </BrowserRouter>
  );
};

export default App;
