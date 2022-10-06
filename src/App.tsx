import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import axios from "axios";
import { SaveData } from "./redux-store/action";
import Routing from "./routes/Routing";
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
      <Routing/>
       
      )} */}

      <Routing />
    </div>
  );
}

export default App;
