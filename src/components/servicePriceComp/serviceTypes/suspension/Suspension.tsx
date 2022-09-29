import React from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../servicePageComps/PackageCard";
import styles from "../ServiceTypes.module.css";

export const Suspension = () => {
  return (
    <>
      {PackageCardData.map((data: any) => (
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
