import { Outlet } from "react-router-dom";
import Header from "layouts/header/Header";
import Footer from "layouts/footer/Footer";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;