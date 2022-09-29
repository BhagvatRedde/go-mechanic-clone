
import { FooterEndData } from "./FooterEndData";
import styles from "./Footer.module.css";
export const FooterEnd = () => {
  return (
    <div className={styles["footer-last"]}>
      <div className={`${styles["div-content"]} d-flex`}>
        <div className={styles["first-div"]}>
          <img
            src="images/footer/WHITE.png"
            alt="img"
            style={{ width: "45%", height: "15%" }}
            className={`${styles["img-size"]} mt-5 `}
          />
          {FooterEndData.map((data: any, i: any) => (
            <>
              <p className={`${styles["para"]} col-10 `}>
                {data.text}
                {data.text2}
              </p>
              <div className={`${styles["image-box"]} d-flex `}>
                {data.sub &&
                  data.sub.map((item: any, i: any) => (
                    <img
                      src={item.image}
                      alt="img"
                      className={styles["image-data"]}
                    />
                  ))}
              </div>
            </>
          ))}
        </div>
        <div className="d-flex">
          <div>
            {FooterEndData.map((data: any, i: any) => (
              <div className="row">
                <div className={`${styles["para"]} col mb-2  `}>
                  <img
                    src={data.image}
                    alt="img"
                    className={styles["image-data"]}
                  />
                  {data.name}
                </div>
                <div className={`${styles["para-2"]} col mb-2 `}>
                  <div> {data.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["image-position"]}>
            <img
              src="images/footer/appstore.png"
              alt="img"
              style={{ width: "60%", height: "24%" }}
            />
            <br />
            <br />
            <img
              src="images/footer/playstore.png"
              alt="img"
              style={{ width: "60%", height: "24%" }}
            />footer-text
          </div>
          
        </div>

       
      </div> 
      {/* <div className={styles[""]}>
      {FooterEndData.map((data: any,i: any)=>(
       <span >{data.text3}</span>
      ))}
     </div> */}
    </div>
  );
};
