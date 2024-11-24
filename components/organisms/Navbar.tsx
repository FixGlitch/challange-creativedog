import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "../../styles/navbar.module.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const shouldHideNavbar = pathname.startsWith("/login");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    router.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className={styles.navbarContent}>
        <Link className={`${styles.navbarLogo} navbar-brand`} href="/">
          <Image
            src="/logo.svg"
            alt="Commerce Logo"
            width={185}
            height={34}
            className={styles.logoImg}
            priority
          />
        </Link>

        {!shouldHideNavbar && (
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className={`${styles.navbarLinks} nav-link text-decoration-none text-start`}
                  href="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${styles.navbarLinks} nav-link text-decoration-none text-start`}
                  href="#"
                >
                  {t("products")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${styles.navbarLinks} nav-link text-decoration-none text-start`}
                  href="#"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`${styles.navbarLinks} nav-link text-decoration-none text-start`}
                  href="#"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
            <button
              onClick={handleLogout}
              className="btn btn-link text-dark"
              aria-label={t("logout")}
            >
              <Image
                src="/logout.svg"
                alt={t("logout")}
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
