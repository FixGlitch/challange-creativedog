import { useEffect } from "react";
import { useRouter } from "next/router";
import HomeTemplate from "@/components/templates/HomeTemplate";
import HeroSection from "@/components/organisms/HeroSection";
import CategoryList from "@/components/organisms/CategoryList";
import ProductList from "@/components/organisms/ProductList";
import FeaturedSection from "@/components/organisms/FeaturedSection";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <HomeTemplate >
      <HeroSection />
      <CategoryList />
      <ProductList />
      <FeaturedSection />
    </HomeTemplate>
  );
};

export default HomePage;
