import React, { useState } from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../reusable/servicePriceCard/PackageCard";
import styles from "../ServiceTypes.module.css";
export const AcService = () => {
  const [open, setOpen] = useState(false);
  const [oilContent, setOilContent] = useState();
  const [header, setHeader] = useState("");
  const onClickHandler = (content: any, header: any) => {
    setOilContent(content);
    setHeader(header);
    setOpen(!open);
    console.log(content);
  };
  return (
    <>
      {PackageCardData.map((data: any) => (
        <>
          <div className={styles["card-header"]}>{data.header}</div>
          {data.content.map((content: any) => (
            <PackageCard
              data={content}
              onClickHandler={() => onClickHandler(content, data.header)}
              open={open}
              header={data.header}
            />
          ))}
        </>
      ))}
    </>
  );
};
