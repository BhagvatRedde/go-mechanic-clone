import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { BeatLoader, CircleLoader, PulseLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers } from "./redux/action";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
 
//  const { AllData, isLoading } = useSelector((state) => state);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(requestUsers(data));
//   }, [AllData]);
  return (
    <div>
      {loading ? (
        <PulseLoader
          className="text-center"
          color={"#D0021B"}
          loading={loading}
          size={20}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
