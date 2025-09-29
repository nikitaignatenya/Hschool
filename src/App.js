import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ErrorPage from "./page/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/error" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
