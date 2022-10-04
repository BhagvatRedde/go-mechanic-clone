import React, { useState } from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../reusable/servicePriceCard/PackageCard";
import styles from "../ServiceTypes.module.css";
import EngineModal from "./engineModal/EngineModal";

export const Periodic = () => {
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
        <div className="mb-4">
          <div className={styles["card-header"]}>{data.header}</div>
          {data.content.map((content: any, i: number) => (
            <>
              <PackageCard
                data={content}
                onClickHandler={() => onClickHandler(content, data.header)}
                open={open}
                header={data.header}
              />
              {/* {open && (
                <EngineModal
                  open={open}
                  setOpen={onClickHandler}
                  data={oilContent}
                />
              )} */}
            </>
          ))}
        </div>
      ))}
    </>
  );
};
