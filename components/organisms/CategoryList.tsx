"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchCategories } from "../../utils/api";
import CategoryCard from "../molecules/CategoryCard";
import { Category } from "@/utils/types";
import styles from "../../styles/category-list.module.css";
import { useTranslation } from "react-i18next";

const CategoryList = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories(10, 1);
        setCategories(data);
      } catch (error) {
        console.error("Error to load the categories:", error);
      }
    };

    getCategories();
  }, []);

  return (
    <section className="categories py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md">
            <h2
              className={`${styles.categoryTilte} fw-bold text-decoration-none text-start`}
            >
              {t("categories")}{" "}
              <span
                className={`${styles.categorySpan} text-decoration-none text-start`}
              >
                {t("visited")}
              </span>
            </h2>
            <p
              className={`${styles.categorySubTitle} text-decoration-none text-start`}
            >
              {t("discover")}
            </p>
          </div>
          <div className="col-12 col-md-auto align-self-end mb-4">
            <a
              href="#"
              className={`${styles.categoryLink} text-decoration-none text-start fw-medium`}
            >
              {t("viewAllCategories")}{" "}
              <Image
                src="/chevron-right.svg"
                alt="chevron"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.swiperContainer}`}>
        <Swiper
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.5,
            },
            992: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 4.5,
            },
            1446: {
              slidesPerView: 4.5,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard
                imageUrl={category.imageUrl}
                categoryName={category.name}
                productCount={category.childCategories.length}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryList;
