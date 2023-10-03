import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import HomeScreen from "../screens/HomeScreen";
import ContatoScreen from "../screens/ContatoScreen";
import SobreScreen from "../screens/SobreScreen";
import HotCoffeeScreen from "../screens/HotCoffeeScreen";
import ColdCoffeeScreen from "../screens/ColdCoffeeScreen";
import ExpressCoffeeScreen from "../screens/ExpressCoffeeScreen";

export default function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />}>
          <Route element={<HomeScreen />} path="/" />
          <Route element={<ContatoScreen />} path="/contato" />
          <Route element={<SobreScreen />} path="/sobre" />
          <Route element={<HotCoffeeScreen />} path="/cafe-quente" />
          <Route element={<ColdCoffeeScreen />} path="/cafe-gelado" />
          <Route element={<ExpressCoffeeScreen />} path="/cafe-expresso" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
