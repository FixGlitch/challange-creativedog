"use client"

import React, { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";
import { fetchProducts } from "@/utils/api";
import { sortProducts } from "@/utils/sortBy";
import styles from "../../styles/product-list.module.css";
import { Product, SortOption } from "@/utils/types";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCardCarrousel from "../molecules/ProductCardCarrousel";

const ProductList = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [orderBy, setOrderBy] = useState<SortOption | "">("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(10, 1);
        setProducts(data);
      } catch (error) {
        console.error("Error to load products:", error);
      }
    };

    getProducts();
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.target.value as SortOption;
    setOrderBy(sortOption);
    const sortedProducts = sortProducts(products, sortOption);
    setProducts(sortedProducts);
  };

  return (
    <section className="products py-5">
      <div className="container">
        <div className="row pb-4">
          <div className="col-12 col-md">
            <h2
              className={`${styles.productTilte} fw-bold text-decoration-none text-start`}
            >
              {t("products")}{" "}
              <span
                className={`${styles.productSpan} text-decoration-none text-start`}
              >
                {t("featured")}
              </span>
            </h2>
            <p
              className={`${styles.productSubTitle} text-decoration-none text-start`}
            >
              {t("discoverProducts")}
            </p>
          </div>
          <div className="col-12 col-md-auto align-self-end mb-4">
            <div className="position-relative d-none d-md-block">
              <select
                className={`${styles.customSelect} form-select btn-outline-dark w-auto ps-5`}
                value={orderBy}
                onChange={handleSortChange}
              >
                <option className="" value="">
                  {t("sortBy")}
                </option>
                <option value="priceAsc">{t("priceAsc")}</option>
                <option value="priceDesc">{t("priceDesc")}</option>
                <option value="nameAsc">{t("nameAsc")}</option>
                <option value="nameDesc">{t("nameDesc")}</option>
              </select>
              <Image
                src="/sort-by.svg"
                alt="sort by"
                width={24}
                height={24}
                className="position-absolute top-50 start-0 translate-middle-y"
                style={{ padding: "2px", marginLeft: "20px" }}
              />
            </div>
          </div>
        </div>
        
        <div className="row flex-md-wrap g-2 d-none d-md-flex">
          {products.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4 d-flex justify-content-center"
              key={product.id}
            >
              <ProductCard
                imageUrl={product.imageUrl}
                productName={product.name}
                category={product.category}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.swiperContainer}`}>
        <Swiper
          slidesPerView={2.1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          className={`${styles.swiperContainer} d-flex d-md-none mySwiper`}
          breakpoints={{
            300: {
              slidesPerView: 2.1,
            },
            768: {
              slidesPerView: 3.5,
            },
            992: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 4.5,
            },
            1446: {
              slidesPerView: 4.5,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCardCarrousel
                imageUrl={product.imageUrl}
                productName={product.name}
                category={product.category}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </section>
  );
};

export default ProductList;
