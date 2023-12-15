import { Routes, Route } from "react-router-dom";
import CardDetail from "../pages/details/CardDetail";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/movie/:id" element={<CardDetail />} />
    </Routes>
  );
};

export default Router;