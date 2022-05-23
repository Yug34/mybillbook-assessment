import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/Home/PrivateRoute";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const billBookUser = localStorage.getItem("billbookuser");
    if (billBookUser) {
      dispatch({ type: "SET_USER", payload: JSON.parse(billBookUser) });
      navigate({ pathname: "/items" });
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Routes>
        {/*TODO: Exact*/}
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<PrivateRoute />}>
          <Route path="/items" element={<Items />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
