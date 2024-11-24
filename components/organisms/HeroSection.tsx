import Image from "next/image";
import styles from "../../styles/hero.module.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className={`${styles.heroSection} position-relative text-light`}>
      <div className="d-md-none">
        <Image
          src="/hero-mobile.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="d-none d-md-block">
        <Image
          src="/hero.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="container d-flex align-items-md-center align-items-end h-100">
        <div
          className={`${styles.heroContent} w-100 text-md-start text-center`}
        >
          <h1
            className={`${styles.heroTitle} display-4 fw-bold text-decoration-none text-start`}
          >
            {t("heroTitle")}
          </h1>
          <p
            className={`${styles.heroSubTitle} lead mt-3 text-decoration-none text-start d-none d-md-block`}
          >
            {t("heroSubTitle")}
          </p>

          <div className="d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
            <button
              className={`${styles.heroButtonPrimary} btn btn-primary btn-lg text-decoration-none d-flex align-items-center`}
            >
              {t("heroButtonPrimary")}
              <Image
                src="/chevron-right-white.svg"
                alt="chevron"
                width={24}
                height={24}
              />
            </button>
            <button
              className={`${styles.heroButtonSecondary} btn btn-outline-light btn-lg text-decoration-none d-none d-md-block`}
            >
              {t("heroButtonSecondary")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
