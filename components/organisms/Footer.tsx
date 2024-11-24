import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={`${styles.footerContainer} bg-white`}>
      <div className="container py-2 py-md-4">
        <div className="row align-items-center">
          <div className="col-6 col-md-4 mb-md-0 d-flex justify-content-start">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Commerce Logo"
                width={129.36}
                height={23.82}
              />
            </Link>
          </div>
          <div className="col-6 col-md-8 d-flex justify-content-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              <Link href="#" className="text-decoration-none text-primary">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" className="text-decoration-none text-primary">
                <Image
                  src="/facebook.svg"
                  alt="Facebook Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" className="text-decoration-none text-primary">
                <Image
                  src="/youtube.svg"
                  alt="Youtube Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" className="text-decoration-none text-primary">
                <Image
                  src="/tiktok.svg"
                  alt="Tiktok Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" className="text-decoration-none text-primary">
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" className="text-decoration-none text-primary">
                <Image
                  src="/twiter.svg"
                  alt="Twiter Logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footerContainer}`}>
        <div className="container py-2 py-md-4">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div className="col-12 col-md-2 py-2 py-md-0">
              <Link
                href="/terms"
                className={`${styles.termsText} text-muted text-decoration-none`}
              >
                {t("terms")}
              </Link>
            </div>
            <div className="col-12 col-md-6 py-2 py-md-0">
              <p
                className={`${styles.copyrightText} text-muted mb-0 text-decoration-none`}
              >
                {t("copyright")}
              </p>
            </div>
            <div className="col-12 col-md-4 py-2 py-md-0 d-md-flex justify-content-md-end">
              <p
                className={`${styles.designByText} text-muted mb-0 text-decoration-none`}
              >
                {t("designBy")}{" "}
                <Link
                  href="https://creativedog.agency"
                  className={`${styles.creativedogAgencyLink} text-decoration-none`}
                >
                  Creativedog Agency
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
