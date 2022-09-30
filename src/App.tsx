import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/home/Home";
import { BeatLoader, CircleLoader, PulseLoader } from "react-spinners";
import { Services } from "./pages/services/Services";
import axios from "axios";
import { SaveData } from "./redux-store/action";
import SparePage from "./pages/spare-page/SparePage";
function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/Alldata")
      .then((res) => {
        console.log(res.data);
        dispatch(SaveData(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {/* {loading ? (
        <PulseLoader
          className="text-center"
          color={"#D0021B"}
          loading={loading}
          size={20}
        />
      ) : (
        <Home />
        // <Services />
      )} */}
      {/* <Home /> */}
      {/* <SparePage /> */}
      <Services />
    </div>
  );
}

export default App;
