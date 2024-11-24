import Image from "next/image";
import React from "react";
import styles from "../../styles/featured.module.css";
import { useTranslation } from "react-i18next";

const FeaturedSection = () => {
  const { t } = useTranslation();

  return (
    <section className="container text-light py-5 px-4">
      <div className={`${styles.featuredContainer} row bg-black`}>
        <div
          className={`${styles.paragraphContainer} col-12 col-md-6 d-flex flex-column justify-content-center align-items-start text-start`}
        >
          <h1 className={`${styles.paragraphTitle}`}>{t("featuredTitle")}</h1>
          <p className={`${styles.paragraphSubTitle} py-3`}>
            {t("featuredSubTitle")}
          </p>
          <div className={`${styles.buttonsContainer} d-flex flex-column flex-md-row gap-3`}>
            <button
              className={`${styles.paragraphButtonPrimary} btn btn-primary w-100`}
            >
              {t("viewProducts")}
              <Image
                src="/chevron-right-white.svg"
                alt="chevron"
                width={24}
                height={24}
              />
            </button>
            <button
              className={`${styles.paragraphButtonSecondary} btn btn-outline-light w-100`}
            >
              {t("linkButton")}
            </button>
          </div>
        </div>
        <div className={`${styles.imgContainer} col-12 col-md-6`}>
          <Image
            src="/banner.png"
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
