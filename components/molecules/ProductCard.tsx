/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../../styles/product-card.module.css";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: number;
  category: string;
}

const ProductCard = ({
  imageUrl,
  productName,
  price,
  category,
}: ProductCardProps) => {
  return (
    <div
      className={`${styles.cardContainer} card border-0 position-relative overflow-hidden`}
    >
      <div className="d-flex justify-content-center align-items-center position-relative w-100 h-auto">
        <img
          src={imageUrl}
          className={`${styles.cardImage} card-img-top img-fluid`}
          alt={productName}
        />
        <Image
          src="/favourite.svg"
          alt="Favorite"
          width={40}
          height={40}
          className={`${styles.favoriteIcon} position-absolute top-0 end-0 m-2 shadow-sm rounded-circle`}
        />
        <div className="position-absolute bottom-0 start-0 p-1 ms-4 bg-white text-dark d-inline-block">
          <span
            className={`${styles.cardPrice} fw-medium text-decoration-none text-start`}
          >
            ${price}
          </span>
        </div>
      </div>
      <div className={`${styles.cardBody} card-body text-start`}>
        <h5
          className={`${styles.cardTitle} fw-medium text-dark`}
          title={productName}
        >
          {productName}
        </h5>
        <p className={`${styles.cardSubTitle} text-muted`}>{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
