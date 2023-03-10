import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailScreen from "./components/detailComponents/DetailScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/homeScreen" element={<HomeScreen />} />
        <Route path="/newRecipeScreen" element={<NewRecipeScreen />} />
        <Route path="/detailScreen/:id" element={<DetailScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
