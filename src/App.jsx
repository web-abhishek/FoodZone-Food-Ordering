import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
// import Searchbar from './components/Searchbar'
import { Outlet } from "react-router-dom";
import AppStore from "./utils/AppStore";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={AppStore}>
      <div className="container mx-auto font-bevellier">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
