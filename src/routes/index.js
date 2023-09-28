import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import HomeScreen from "../screens/HomeScreen";
import ContatoScreen from "../screens/ContatoScreen";
import SobreScreen from "../screens/SobreScreen";
import HotCoffeeScreen from "../screens/ContatoScreen";
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
          <Route element={<HotCoffeeScreen />} path="/cafequente" />
          <Route element={<ColdCoffeeScreen />} path="/cafegelado" />
          <Route element={<ExpressCoffeeScreen />} path="/cafeexpresso" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
