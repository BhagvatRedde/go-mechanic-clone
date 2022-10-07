import React from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../reusable/servicePriceCard/PackageCard";
import styles from "../ServiceTypes.module.css";
import { useSelector } from "react-redux";

export const Suspension = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <>
      {AppData &&
        AppData[0]?.PackageCardData[0]?.Suspension?.map((data: any) => (
          <>
            <div className={styles["card-header"]}>{data.header}</div>
            {data.content.map((content: any) => (
              <PackageCard data={content} />
            ))}
          </>
        ))}
    </>
  );
};
