import React from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../servicePageComps/PackageCard";
import styles from "../ServiceTypes.module.css";

export const Periodic = () => {
  return (
    <>
      {PackageCardData.map((data: any) => (
        <div className="mb-4">
          <div className={styles["card-header"]}>{data.header}</div>
          {data.content.map((content: any) => (
            <PackageCard data={content} />
          ))}
        </div>
      ))}
    </>
  );
};
