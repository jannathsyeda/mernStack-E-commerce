import Footers from "./Components/Footers";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderScreens from "./Screens/HeaderScreens";
import ProductScreen from "./Screens/ProductScreen";
import Login from "./Components/Login";
import CartScreen from "./Screens/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-2">
        <Container>
          <Routes>
            <Route path="/"  element={<HeaderScreens />} exact />

            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart"  element={<CartScreen/>}/>

            <Route path="/signIn" element={<Login/>} />

          </Routes>
        </Container>
      </main>
      <Footers />
    </Router>
  );
}

export default App;
