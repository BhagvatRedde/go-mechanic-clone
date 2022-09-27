import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SpareForm.module.css";
const SpareForm = () => {
  const AppData = useSelector((state: any) => state.data[0]);
  const [manufacture, setManufacture] = useState([]);
  const [model, setModel] = useState([]);
  const [year, setYear] = useState([]);
  const [varient, setvarient] = useState([]);

  useEffect(() => {
    setManufacture(manufacture);
  }, []);

  const handleManufact = () => {};
  return (
    <div className="container">
      <h1 className={styles["font-size"]}>Find the right Spare Parts</h1>
      <form>
        <div className={`${styles["form-box"]} row`}>
          <div className={`${styles["dropdown"]}  col-2`}>
            <select
              className={`${styles["sel"]} form-control`}
            >
              <option selected>Select Manufacture</option>
              {AppData &&
                AppData[0].Selectmenu?.map((data: any, i: number) => (
                  <option key={i} value={data.value}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>

          <div className={`${styles["dropdown"]}  col-2`}>
            <select className={`${styles["sel"]} form-control`}>
              <option selected>Select Model</option>
              {AppData &&
                AppData[0].selectModel?.map((data: any, i: number) => (
                  <option key={i} value={data.value}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>

          <div className={`${styles["dropdown"]} col-2`}>
            <select className={`${styles["sel"]} form-control`}>
              <option selected>Select Year Range</option>
              {AppData &&
                AppData[0].yearRange?.map((data: any, i: number) => (
                  <option key={i} value={data.value}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={`${styles["dropdown"]} col-2`}>
            <select className={`${styles["sel"]} form-control`}>
              <option selected>Select Variant</option>
              {AppData &&
                AppData[0].varient?.map((data: any, i: number) => (
                  <option key={i} value={data.value}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <button className={`${styles["search-btn"]}`}>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SpareForm;
