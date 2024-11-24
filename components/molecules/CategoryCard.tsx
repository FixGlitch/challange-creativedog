/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/category-card.module.css";
import { useTranslation } from "react-i18next";

interface CategoryCardProps {
  imageUrl: string;
  categoryName: string;
  productCount: number;
}

const CategoryCard = ({
  imageUrl,
  categoryName,
  productCount,
}: CategoryCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="card border-0 shadow-sm position-relative rounded-lg overflow-hidden">
      <div className="position-relative w-100 h-auto">
        <img
          src={imageUrl}
          className="card-img-top img-fluid"
          alt={categoryName}
          style={{ objectFit: "cover" }}
        />
        <div className="position-absolute bottom-0 start-0 end-0 p-3 ">
          <h5
            className={`${styles.categoryTitle} card-title text-white text-decoration-none text-start fw-bold`}
          >
            {categoryName}
          </h5>
          <p
            className={`${styles.cardSubTitle} card-title text-white text-decoration-none text-start fw-medium`}
          >
            {productCount} {t("products")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
